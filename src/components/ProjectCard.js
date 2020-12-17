import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { fetchGitHubProjectInfos, fetchGitHubProjectImage } from '../services/GitApi';
import { Link } from 'react-router-dom';
import gitHubIcon from '../Images/github-brands.svg';
import bgProject from '../Images/bg-project.jpg';

class ProjectCard extends Component {
  constructor() {
    super()
  
    this.state = {
       imageUrl: '',
    }
  }

  async componentDidMount() {
    const { project: { files } } = this.props;
    const imageUrl = await fetchGitHubProjectImage(files);
    this.setState({
      imageUrl,
    });
  }
  
  render() {
    const { project: { url } } = this.props;
    let { project: { name } } = this.props;
    name = name.replaceAll('-', ' ');
    name = name.toUpperCase();
    let { imageUrl } = this.state;
    imageUrl = (!imageUrl) ? bgProject : imageUrl;
    return (
      <div className="project-card">
        <div className="project-image">
          <img src={imageUrl} alt=""/>
        </div>
        <div className="project-info">
          <h3>
            {name}
          </h3>
          <Link to={`/projects/${name}`}>Detalhes</Link>
          <a className="project-button" target="_blank" href={url}>
            <img src={gitHubIcon} alt=""/>
            Visite o repositório
          </a>
          {/* <a target="_blank" href={exeUrl}>Execute o projeto</a> */}
        </div>
      </div>
    )
  }
}

export default ProjectCard


