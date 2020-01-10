import React from "react";

import Project from "./components/Project";
import Info from "./components/Info";

import SocialButton from './components/SocialButton';

import conjugator from "./img/conjugator.png";
import scribe from "./img/scribe.png";
import designhub from "./img/designhub.png";

// Icon imports
import github from './img/icons/github.png';
import githubLight from "./img/icons/github-light.png";
import linkedin from './img/icons/linkedin.png';
import linkedinLight from './img/icons/linkedin-light.png';

import "./App.scss";

function App() {

  const projects = [
    {
      name: "DesignHub X",
      code: "https://github.com/Lambda-School-Labs/designhub-fe",
      demo: "https://www.designhubx.com/",
      image: designhub,
      description:
        "DesignHub is a collaborative and intuitive platform for artists and designers to share and manage their work. ",
      tech: "React/Redux, NodeJS/Express, PostgreSQL"
    },
    {
      name: "Conjugator",
      code: "https://github.com/ls-bw-06212019-conjugator/conjugator-FE",
      demo: "https://bw-conjugator.netlify.com/",
      image: conjugator,
      description:
        "Conjugator is an educational, drill-practice style app that helps users practice Spanish conjugations through repitition and visual/statistical feedback.",
      tech: "React/Redux, NodeJS/Express, PostgreSQL",
      early: false
    },
    {
      name: "Scribe",
      code: "https://github.com/scribe-notes",
      demo: "https://notaking-with-scribe.netlify.com/",
      image: scribe,
      early: true,
      description:
        "Scribe is a digital note-taker. It allows a user to record transcripts by listening to their speech/meeting/conversation and storing it into their personal repository of transcripts"
    },
  ];

  return (
    <div className="App">
      <div className="container-left">
        <hr className="horizontal-line" />

        <h1 className="head">MOHAMMAD TOURJOMAN</h1>
        <div className='links'>
          <SocialButton to='https://github.com/mtourj' default={githubLight} hover={github} />
          <SocialButton to='https://www.linkedin.com/in/mohammad-tourjoman-6b811259/' default={linkedinLight} hover={linkedin} />
        </div>
        <div className="subheads">
          <h1 className="subhead">Software Developer</h1>
          <h4 className="subhead">Eastvale, California</h4>
          <h4 className="subhead">
            React/Redux, NodeJS/Express, SQLite/PostgreSQL/MongoDB
          </h4>
        </div>
        <Info />
        <hr className="horizontal-line" />
        <div className="arrow-down">&#8595;</div>
      </div>
      <div className="container-right">
        <h1 className="head">MOST RECENT PROJECTS</h1>
        {projects.map(project => (
          <Project key={project.name} data={project} />
        ))}
        More to come...
      </div>
    </div>
  );
}

export default App;
