import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import '../styles/Home.css'
import ProfileImage from '../Images/FotoParqueSemBG.png';

export const Home = () => {
  return (
    <div>
      <div className="home-main">
        <img className="home-image" src={ProfileImage} alt=""/>
        <p className="home-speak-text">Olá! Sou o Daniel Duarte, Desenvolvedor Front-End e estudante de desenvolvimento Full Stack!!!</p>
        <p className="home-text">Sabia quem sou eu, conheça meus projetos, com quais stacks eu trabalho,  veja um pouco do meu <span>{"<code>"}</span> e muito mais!</p>
      </div>
    </div>
  )
}

Home.propTypes = {
  prop: PropTypes
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
