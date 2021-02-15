import React from 'react';
import '../styles/Home.css';
import frontEndImage from '../Images/frontend.png';

function Home() {
  const downloadCurriculum = async () => {
    try {
      const response = await fetch('https://raw.githubusercontent.com/danielmlduarte/danielmlduarte/master/Daniel%20M%C3%BAcio%20Lima%20Duarte.pdf');
      const file = await response.blob();
      const url = window.URL.createObjectURL(file);
      const selector = document.createElement('a');
      selector.href = url;
      selector.download = 'Daniel Múcio Lima Duarte.pdf';
      selector.click();
    } catch (error) {
      return error;
    }
  };

  return (
    <div className="home-main">
      {/* <p className="home-speak-text">Olá! Sou o Daniel Duarte,
      Desenvolvedor Front-End e estudante de desenvolvimento Full Stack!!!</p> */}
      <img className="home-image" src={ frontEndImage } alt="" />
      <div className="home-main-content">
        <img
          className="home-avatar"
          src="https://avatars2.githubusercontent.com/u/69773207?s=460&u=3c1497fe8cc953d0419c15955dcaf4b683fc4d70&v=4"
          alt="Daniel Profile"
        />
        <div className="home-text-content">
          <p
            className="home-text"
          >
            Nesse site, você irá encontrar os meus projetos
            desenvolvidos durante minha formação na Trybe e
            com quais stacks eu trabalho atualmente.
          </p>
          <button
            className="home-button"
            type="button"
            onClick={ downloadCurriculum }
          >
            Faça o download do meu currículo
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
