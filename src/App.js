import React, { useState, useEffect } from "react";

import Project from "./components/Project";
import Info from "./components/Info";

import SocialButton from "./components/SocialButton";

// Icon imports
import github from "./img/icons/github.png";
import linkedin from "./img/icons/linkedin.png";

import avatar from "./img/avatar.png";

import "./App.scss";
import Axios from "axios";

function App() {
  const [state, setState] = useState({
    projects: null,
    loading: true,
    loadingTakingLong: false,
    error: null,
  });

  const init = () => {
    // Get project data
    setState({
      ...state,
      loading: true,
      error: null,
    });
    setTimeout(() => {
      if (state.loading) {
        setState((prevState) => ({
          ...prevState,
          loadingTakingLong: true,
        }));
      }
    }, 3500);
    Axios.get(`${process.env.REACT_APP_BACKEND}/projects`)
      .then((res) => {
        const projects = res.data.sort((a, b) => b.order - a.order);

        setState({
          ...state,
          projects,
          loading: false,
        });
      })
      .catch((err) => {
        console.log(err);
        setState({
          ...state,
          loading: false,
          error: "Failed to get projects! :( Refreshing the page might help",
        });
      });
  };

  useEffect(init, []);

  return (
    <div className="App">
      <div className="container-top">
        <div className="nameplate">
          <div className="nameplate-image">
            <img className="avatar" src={avatar} alt="Avatar" />
            <div className="links">
              <SocialButton
                to="https://github.com/mtourj"
                default={github}
                // hover={githubLight}
              />
              <SocialButton
                to="https://www.linkedin.com/in/mohammadtourjoman/"
                default={linkedin}
                // hover={linkedinLight}
              />
            </div>
          </div>
          <div className="nameplate-text">
            <p className="head">MOHAMMAD TOURJOMAN</p>
            <div className="subheads">
              <h1 className="subhead">Software Developer</h1>
              <h4 className="subhead">Eastvale, California</h4>
              <h4 className="subhead">
                React ● React Native ● Redux ● Express ● PostgreSQL ● MongoDB
              </h4>
            </div>
          </div>
        </div>

        <Info />
        <div className="arrow-down">&#8595;</div>
      </div>
      <div className="container-bottom">
        <h1 className="head">MOST RECENT PROJECTS</h1>
        {state.projects ? (
          <div>
            {state.projects.map((project) => (
              <Project key={project.name} data={project} />
            ))}
          </div>
        ) : state.loading ? (
          <div className="loading">
            Loading...
            <p
              className={`taking-too-long ${
                state.loadingTakingLong && "shown"
              }`}
            >
              This is taking a while... my server is probably just waking up
            </p>
          </div>
        ) : (
          <p className="error">{state.error}</p>
        )}
      </div>
    </div>
  );
}

export default App;
