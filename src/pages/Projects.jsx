import React from 'react'
import PropTypes from 'prop-types'
import ProjectCard from '../components/ProjectCard';
import '../styles/Projects.css';
import { connect } from 'react-redux';

export const Projects = (props) => {
  const { projectsList } = props;
  return (
    <div className="projects-container">
      <div className="projects-text">
        <h3>Meus projetos.</h3>
        <p>Aqui você verá todos os projetos que desenvolvi durante o curso da <span>TRYBE</span>.
        Vão desde projetos bem simples, feitos somente com <span>HTML</span> e <span>CSS</span>, até projetos feitos com <span>REACT</span> usando <span>REDUX</span>.
        Alguns projetos foram feitos aplicando <span>MÉTODOS ÁGEIS</span>, com a colaboração de outros colegas.</p>
      </div>
      <div className="projects-section">
        {projectsList.map((project, index) => <ProjectCard key={index} project={project}/>)}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  projectsList: state.projectsReducer.list,
})

Projects.propTypes = {
  prop: PropTypes
}

export default connect(mapStateToProps)(Projects);
