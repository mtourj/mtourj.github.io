import React, { useState, useEffect } from 'react';

import Project from './components/Project';
import Info from './components/Info';

import SocialButton from './components/SocialButton';

// import conjugator from './img/conjugator.png';
// import scribe from './img/scribe.png';
// import designhub from './img/designhub.png';

// Icon imports
import github from './img/icons/github.png';
import githubLight from './img/icons/github-light.png';
import linkedin from './img/icons/linkedin.png';
import linkedinLight from './img/icons/linkedin-light.png';

import './App.scss';
import Axios from 'axios';

function App() {
  const [state, setState] = useState({
    projects: null,
    loading: true,
    loadingTakingLong: false,
    error: null
  });

  const init = () => {
    // Get project data
    setState({
      ...state,
      loading: true,
      error: null
    });
    setTimeout(() => {
      if(state.loading) {
        setState(prevState => ({
          ...prevState,
          loadingTakingLong: true
        }))
      }
    }, 3000)
    Axios.get(`${process.env.REACT_APP_BACKEND}/projects`, {
      headers: { apiKey: process.env.REACT_APP_API_KEY }
    })
      .then(res => {
        const projects = res.data.sort((a, b) => b.order - a.order);

        setState({
          ...state,
          projects,
          loading: false
        });
      })
      .catch(err => {
        console.log(err);
        setState({
          ...state,
          loading: false,
          error: 'Failed to get projects! :( Refreshing the page might help'
        });
      });
  };

  useEffect(init, []);

  return (
    <div className='App'>
      <div className='container-left'>
        <hr className='horizontal-line' />

        <h1 className='head'>MOHAMMAD TOURJOMAN</h1>
        <div className='links'>
          <SocialButton
            to='https://github.com/mtourj'
            default={githubLight}
            hover={github}
          />
          <SocialButton
            to='https://www.linkedin.com/in/mohammad-tourjoman-6b811259/'
            default={linkedinLight}
            hover={linkedin}
          />
        </div>
        <div className='subheads'>
          <h1 className='subhead'>Software Developer</h1>
          <h4 className='subhead'>Eastvale, California</h4>
          <h4 className='subhead'>
            React/Redux, NodeJS/Express, SQLite/PostgreSQL/MongoDB
          </h4>
        </div>
        <Info />
        <hr className='horizontal-line' />
        <div className='arrow-down'>&#8595;</div>
      </div>
      <div className='container-right'>
        <h1 className='head'>MOST RECENT PROJECTS</h1>
        {state.projects ? (
          <div>
            {state.projects.map(project => (
              <Project key={project.name} data={project} />
            ))}
            <span>More to come...</span>
          </div>
        ) : state.loading ? (
          <div className='loading'>
            Loading...
            <p className={`taking-too-long ${state.loadingTakingLong && 'shown'}`}>This is taking a while... my server probably is probably just waking up</p>
          </div>
        ) : (
          <p className='error'>{state.error}</p>
        )}
      </div>
    </div>
  );
}

export default App;
