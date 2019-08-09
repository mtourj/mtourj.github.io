import React from 'react';

import Project from './components/Project';
import Info from './components/Info';

import conjugator from './img/conjugator.png';
import devmap from './img/devmap.png';

import './App.scss';

function App() {
  const projects = [
    {
      name: 'Conjugator',
      code: 'https://github.com/ls-bw-06212019-conjugator/conjugator-FE',
      demo: 'https://bw-conjugator.netlify.com/',
      image: conjugator,
      description: 'Conjugator is an education, drill-practice style app that helps users practice Spanish conjugations through repitition and visual/statistical feedback.',
      tech: 'React/Redux, NodeJS/Express'
    },
    {
      name: 'Devmap',
      code: 'https://github.com/mtourj/Devmap',
      demo: 'https://devmap.netlify.com/',
      image: devmap,
      description: 'An early work-in-progress software engineering tool used to make visual blueprints of apps before them get built.',
      tech: 'React/Redux, NodeJS/Express'
    },
  ]

  return (
    <div className="App">
      <div className='container-left'>
        <hr className='horizontal-line' />
        <h1 className='head'>MOHAMMAD TOURJOMAN</h1>
        <h1 className='subhead'>Software Developer</h1>
        <h4 className='subhead'>Eastvale, California</h4>
        <Info />
        <hr className='horizontal-line' />
      </div>
      <div className='container-right'>
      <h1 className='head'>MOST RECENT PROJECTS</h1>
      {projects.map(project => <Project key={project.name} data={project}/>)}
      More to come...
      </div>
      <div className='arrow-down'>
      &#8595;
      </div>
    </div>
  );
}

export default App;
