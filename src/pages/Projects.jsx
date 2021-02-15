import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import MainProjectCard from '../components/MainProjectCard';
import mainProjects from '../data/projectsList';
import '../styles/Projects.css';

function Projects({ projectsList }) {
  const [isRedirect, setIsRedirect] = useState(false);

  useEffect(() => {
    if (!projectsList) setIsRedirect(true);
  }, [projectsList]);

  return (
    <div className="projects-container">
      { (isRedirect) && <Redirect to="/" /> }
      <div className="projects-text">
        <h3>Meus projetos.</h3>
        <p>
          Aqui você verá todos os projetos que desenvolvi durante o curso da
          <span> TRYBE. </span>
          Vão desde projetos bem simples, feitos somente com
          <span> HTML </span>
          e
          <span> CSS, </span>
          até projetos feitos com
          <span> REACT </span>
          usando
          <span> REDUX. </span>
          Alguns projetos foram feitos aplicando
          <span> MÉTODOS ÁGEIS </span>
          , com a colaboração de outros colegas.
        </p>
      </div>
      <div className="projects-section">
        { mainProjects
          .map((project, index) => (
            <MainProjectCard
              key={ index }
              project={ project }
            />)) }
      </div>
      <div className="projects-section">
        { (projectsList.length) && projectsList
          .map((project, index) => <ProjectCard key={ index } project={ project } />) }
      </div>
    </div>
  );
}

Projects.propTypes = {
  projectsList: PropTypes.arrayOf(
    PropTypes.shape,
  ).isRequired,
};

const mapStateToProps = ((state) => ({
  projectsList: state.projectsReducer.list,
}));

export default connect(mapStateToProps)(Projects);
