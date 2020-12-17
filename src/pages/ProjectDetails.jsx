import React, { Component } from 'react'
import { connect } from 'react-redux'

export const ProjectDetails = (props) => {
  const { match: { params: { name } } } = props;
  return (
    <div>
      {`Página de detalhes do projeto ${name}`}
    </div>
  )
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails)
