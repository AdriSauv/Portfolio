import React from 'react';
import './index.css';
import { AiFillGithub } from 'react-icons/ai';

function Footer() {
  const email = 'adriensauvage59@gmail.com';
  const phoneNumber = '+33670949151';
  const githubLink = 'https://github.com/AdriSauv';

  return (
    <footer id="contact" className="footer">
      <div className="footer_main-container">
        <h2 className="heading">
          <span className="heading_title">Contact</span>
        </h2>
        <div className="footer_details">
          <p>Email: <a href={`mailto:${email}`}>{email}</a></p>
          <p>Phone: {phoneNumber}</p>
          <a href={githubLink} target="_blank" rel="noopener noreferrer" alt="github link">
              <AiFillGithub className='github-icon'/>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

