import React from 'react';
import PropTypes from 'prop-types';

function ProjectDetails({ match: { params: { name } } }) {
  return (
    <div>
      {`Página de detalhes do projeto ${name}`}
    </div>
  );
}

ProjectDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProjectDetails;
