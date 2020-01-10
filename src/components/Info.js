import React, { useState } from "react";

import "./styles/Info.scss";

import Contact from "./Contact";

const Info = () => {
  const [tab, setTab] = useState(0);

  const contents = [
    `Before I became the full stack developer I am today, I began learning
            in Java about 8 years ago as a hobby, and eventually moved on
            to game development with Unity and C#. I learned a lot and made
            a lot, and I have now been a student at lambda school for 8 months
            building web apps as a full stack web developer in a professional
            capacity.`,
    `I am currently enrolled in Lambda School (expected end date in March
            2020). Lambda School is a 6+ month Computer Science and Software
            Engineering Academy that provides an immersive hands-on curriculum
            with a focus on computer science, web and mobile development, UX
            design, and data science. I strongly believe in their mission and
            their work. I am constantly thankful to have them by my side and 
            to be involved.`,
    <>
      <span>My resume can be found by following </span>{" "}
      <a
        className="resume-link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://resume.creddle.io/resume/j5dsdq10hnm"
      >
        {" "}
        this link! <span className="glyphicon glyphicon-new-window" />
      </a>
    </>,
    <Contact />
  ];

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
      <div className="tab">
        {contents[tab]}
      </div>
    </div>
  );
};

export default Info;
