import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../styles/About.css';
import photoSlack from '../Images/SlackLine.png';
import photoBeach from '../Images/FotoPraiaCostas.jpg';
import photoGameMuseumOne from '../Images/FotoMuseuVideoGame1.jpg';
import photoGameMuseumTwo from '../Images/FotoMuseuVideoGame2.jpg';
import htmlCssJsImage from '../Images/htmlcssjs-nobg.png';
import reactReduxImage from '../Images/reactredux-nobg.png';
import githubVsCodeImage from '../Images/githubvscode-nobg.png';

function About() {
  return (
    <div>
      <div className="about-container">
        <div className="about-container-text">
          <h3>Sobre mim.</h3>
          <h5>
            Eu sou o Daniel, um desenvolvedor front-end e estudante
            de desenvolvimento web full stack de BH, Minas Gerais.
          </h5>
          <p>
            Gosto de transformar problemas complexos em códigos simples,
            bonitos e intuitivos.
            Quando não estou codando, você me verá cozinhando,
            passeando na natureza ou praticando esportes ao ar livre.
          </p>
          <p>
            Desde de pequeno, sempre muito curioso, me apaixonei por
            tecnologia e pela computação, que pra mim,
            não é só um trabalho, é um estilo de vida.
          </p>
          <div className="about-container-stacks">
            <img src={ htmlCssJsImage } alt="" />
            <img src={ reactReduxImage } alt="" />
            <img src={ githubVsCodeImage } alt="" />
          </div>
        </div>
      </div>
      <div className="about-photo-container">
        <img className="about-photo" src={ photoSlack } alt="" />
        <img className="about-photo" src={ photoGameMuseumOne } alt="" />
        <img className="about-photo" src={ photoBeach } alt="" />
        <img className="about-photo" src={ photoGameMuseumTwo } alt="" />
      </div>
      <div className="carousel-photo">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ photoSlack }
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ photoGameMuseumOne }
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ photoBeach }
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ photoGameMuseumTwo }
              alt="Four slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default About;
