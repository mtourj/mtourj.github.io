import React, { useState } from "react";

import "./styles/Info.scss";

import Contact from "./Contact";

const Info = () => {
  const [tab, setTab] = useState(0);

  return (
    <div className="info">
      <div className="nav">
        <button
          onClick={() => setTab(0)}
          className={tab === 0 ? "selected" : ""}
        >
          ABOUT
        </button>
        <button
          onClick={() => setTab(1)}
          className={tab === 1 ? "selected" : ""}
        >
          EDUCATION
        </button>
        <button
          onClick={() => setTab(2)}
          className={tab === 2 ? "selected" : ""}
        >
          RESUME
        </button>
        <button
          onClick={() => setTab(3)}
          className={tab === 3 ? "selected" : ""}
        >
          CONTACT
        </button>
      </div>
      {tab === 0 && (
        <div className="tab">
          I have been writing code since the age of 12, and I have had a passion
          for it since. I started with Java, moved on to game development with
          C# as a hobby, and fast-forward today, I am attending Lambda school to
          specialize in full stack web development, and I look forward to and am
          excited about starting a career as a software developer.
        </div>
      )}
      {tab === 1 && (
        <div className="tab">
          I am currently enrolled in Lambda School (expected end date in March
          2020). Lambda School is a 6+ month Computer Science & Software
          Engineering Academy that provides an immersive hands-on curriculum
          with a focus on computer science, web and mobile development, UX
          design, and data science. I strongly believe in their mission and I am
          constantly thankful to have them by my side, and to be involved.
        </div>
      )}
      {tab === 2 && (
        <div className="tab">
          <span>My resume can be found by following </span>{" "}
          <a
            className="resume-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://docs.google.com/document/d/1YeteNcPehFGOMPEMr4iUdVCbJYckRqiiSYX4IbMV3Pw/edit?usp=sharing"
          >
            {" "}
            this link! <span className="glyphicon glyphicon-new-window" />
          </a>
        </div>
      )}
      {tab === 3 && <Contact />}
    </div>
  );
};

export default Info;
