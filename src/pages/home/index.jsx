import React from 'react';
import Intro from '../../components/intro';
import About from '../../components/about';
import Projects from '../../components/projects';

function Home() {
  return (
    <main>
      <Intro />
      <About />
      <Projects />
    </main>
  );
}

export default Home;