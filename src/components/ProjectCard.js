import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchGitHubProjectImage } from '../services/GitApi';
import gitHubIcon from '../Images/github-brands.svg';
import bgProject from '../Images/bg-project.jpg';

function ProjectCard({ project }) {
  const [stacks, setStacks] = useState('');
  const [time, setTime] = useState('');
  const [shortDescription, setShortDescription] = useState('');

  const reader = (file) => {
    console.log(file);
    return new Promise((resolve) => {
      const fileReader = new FileReader();
      fileReader.onload = () => resolve(fileReader.result);
      fileReader.readAsText(file);
    });
  };

  const readFile = async (file) => {
    try {
      const result = await reader(file);
      return result;
    } catch (error) {
      return error;
    }
  };

  const fetchProjectInfos = async () => {
    const { files } = project;
    const imageUrl = await fetchGitHubProjectImage(files);
    if (imageUrl !== '') {
      let descriptions = await readFile(imageUrl);
      descriptions = descriptions.split('\n');
      console.log(descriptions);
      setStacks(descriptions[0]);
      setTime(descriptions[1]);
      setShortDescription(descriptions[2]);
    }
  };

  useEffect(() => {
    fetchProjectInfos();
  }, []);

  const { url, name } = project;
  const nameReplaced = name.replaceAll('-', ' ').toUpperCase();
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={ bgProject } alt="" />
      </div>
      <div className="project-info">
        <h3>
          { nameReplaced }
        </h3>
        <p>{ `${shortDescription}` }</p>
        <p>{ `Neste projeto usei ${stacks}` }</p>
        <p>{ `Prazo de ${time}` }</p>
        {/* <Link to={`/projects/${name}`}>Detalhes</Link> */}
        <a className="project-button" target="_blank" rel="noreferrer" href={ url }>
          <img src={ gitHubIcon } alt="" />
          Visite o repositório
        </a>
        {/* <a target="_blank" href={exeUrl}>Execute o projeto</a> */}
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    url: PropTypes.string.isRequired,
    files: PropTypes.string.isRequired,
    name: PropTypes.shape({
      replaceAll: PropTypes.func.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProjectCard;
