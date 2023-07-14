import './index.css';
import Button from '../../components/button';
import styles from '../button/styles.module.css';

function About() {
  return (
    <section id="about">
      <div className="about_main__container">
        <h2 className="about__heading">
          <span className="heading__main">
            About me
          </span>
          <span className="heading__sub">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </span>
        </h2>
        <div className="about__content">
          <div className="about__content-main">
            <h3 className="about__content-title">Get to know me!</h3>
            <div className="about__content-details">
              <p className="about__content-details-para">
                I have always been <strong>passionate</strong> about computer science and programming. 
                I pursued my interest by <strong>studying computer science for a year</strong>, 
                followed by four years of language studies in English and Chinese.
              </p>
              <p className="about__content-details-para">
                During this time, I also gained valuable experience as a customer service representative 
                at a mobile phone company. 
                However, my thirst for <strong>knowledge</strong> and <strong>adventure</strong> led me to embark on a two-year journey 
                around the world.
                Upon returning, I dedicated myself to various jobs to save money and 
                eventually completed a six-month <strong>training program</strong> as a <strong>web developer</strong>.
              </p>
              <p className="about__content-details-para">
                I am currently seeking exciting <strong>job</strong> opportunities where I can contribute, learn, and grow. 
                If you have a compelling opportunity that aligns with my skills and experience, 
                please feel free to reach out and <strong>contact</strong> me.
              </p>
            </div>
            <Button text="Contact" link="contact" className={styles['btn-bg']}/>
          </div>
          <div className="about__content-skills">
            <h3 className="about__content-title">My Skills</h3>
            <div className="skills">
              <div className="skills__skill">HTML</div>
              <div className="skills__skill">CSS</div>
              <div className="skills__skill">JavaScript</div>
              <div className="skills__skill">React</div>
              <div className="skills__skill">GIT</div>
              <div className="skills__skill">Github</div>
              <div className="skills__skill">Responsive Design</div>
              <div className="skills__skill">SEO</div>
              <div className="skills__skill">Terminal</div>
              <div className="skills__skill">Express Basics</div>
              <div className="skills__skill">MongoDB</div>
              <div className="skills__skill">NodeJS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
