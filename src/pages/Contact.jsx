import React from 'react';
import '../styles/Contact.css';
import github from '../Images/GitHub-contact.png';
import linkedin from '../Images/Linkedin-contact.png';
import outlook from '../Images/Outlook-contact.png';
import whatsapp from '../Images/Whatsapp-contact.png';

function Contact() {
  return (
    <div className="contact-container">
      <h3>Entre em contato comigo:</h3>
      <div className="contact-div">
        <img className="image-contact" src={ outlook } alt="logo outlook" />
        <a
          href="mailto:daniel_mld@hotmail.com"
          className="contact-link"
        >
          daniel_mld@hotmail.com
        </a>
      </div>
      <div className="contact-div">
        <img className="image-contact" src={ linkedin } alt="logo linkedin" />
        <a
          href="http://linkedin.com/in/danielmlduarte"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          linkedin.com/in/danielmlduarte
        </a>
      </div>
      <div className="contact-div">
        <img className="image-contact" src={ github } alt="logo github" />
        <a
          href="http://github.com/danielmlduarte"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          github.com/danielmlduarte
        </a>
      </div>
      <div className="contact-div">
        <img className="image-contact" src={ whatsapp } alt="logo whatsapp" />
        <a
          href="https://wa.me/5531997706994"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          (31) 9977-06994
        </a>
      </div>
    </div>
  );
}

export default Contact;
