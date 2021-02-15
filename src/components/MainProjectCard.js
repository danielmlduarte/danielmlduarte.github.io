import React from 'react';
import PropTypes from 'prop-types';
import gitHubIcon from '../Images/github-brands.svg';

function MainProjectCard({ project }) {
  const { name, description, stacks, git, run } = project;
  return (
    <div className="main-project-card">
      <div className="main-project-info">
        <h3>
          { name }
        </h3>
        <p>{ `${description}` }</p>
        <div className="main-project-stacks-container">
          { stacks
            .map((stack) => (
              <div className="main-project-stack" key={ stack }>{ stack }</div>)) }
        </div>
      </div>
      {/* <Link to={`/projects/${name}`}>Detalhes</Link> */}
      <div className="main-project-buttons">
        <a className="project-button" target="_blank" rel="noreferrer" href={ git }>
          <img src={ gitHubIcon } alt="" />
          Visite o repositório
        </a>
        <a
          className="project-button"
          target="_blank"
          rel="noreferrer"
          href={ run }
        >
          App
        </a>
      </div>
    </div>
  );
}

MainProjectCard.propTypes = {
  project: PropTypes.shape({
    time: PropTypes.string.isRequired,
    team: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    stacks: PropTypes.arrayOf(PropTypes.string).isRequired,
    git: PropTypes.string.isRequired,
    run: PropTypes.string.isRequired,
  }).isRequired,
};

export default MainProjectCard;
