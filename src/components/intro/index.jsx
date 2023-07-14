import React from 'react';
import Button from '../button';
import './index.css';
import styles from '../button/styles.module.css';

function Intro() {
  return (
    <section id="home">
      <div className="home__background"></div>
      <div className="home__content">
        <h1 className="home__title">Hey, I'm Adrien</h1>
        <div className="home__info">
          <p className="home__info-text">A Web Developer building the Frontend and Backend of Websites and Web Applications that leads to the success of the overall product</p>
        </div>
        <div className="home__cta">
          <Button text="Projects" link="projects" className={styles['btn-bg']}/>
        </div>
      </div>
    </section>
  );
}

export default Intro;