import React, { useState } from "react";

import "./styles/Info.scss";

import Contact from './Contact';

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
          I am Mohammad Tourjoman, located in Eastvale, California, aged 18, and
          currently a Software Engineering student at Lambda School. If I'm not
          working on software, I'm probably mixing/mastering/recording music on
          the side. I began messing with code at the age of 12. I don't claim to
          be a master of of what I do by any means, but I do claim that
          programming is one of several fundamental pieces of my childhood. I
          thoroughly enjoy what I do, and I definitely enjoy teaching it, too.
          Fast forward to today, I am now pursuing Software Engineering as a
          career, which would enable me to realize my goals of working on AI,
          the automotive industry, and to eventually create an innovative online
          school that could help other people in the way Lambda School is
          helping me, but on a larger scale. More on my educational background
          here.
        </div>
      )}
      {tab === 1 && (
        <div className="tab">
          I am currently attending Lambda School, a 9 month intensive Web
          Development and Software Engineering course. I used to go to Irvine
          Valley College in California, before I left to pursue a career through
          Lambda. I'm a firm believer that our education system today is broken,
          which is why my educational background may not be considered a 'formal
          education', however, you can visit my work section and be the judge of
          my qualifications yourself. I am self taught, ever since the age of
          12. My marketable skills include: UX/UI Design iOS Development (Swift,
          database with Firebase) Full Stack Web Development (React, JavaScript,
          CSS(LESS), and more...) Game Development (Unity3D, C#, MySQL) &
          more...
        </div>
      )}
      {
        tab === 2 && (
          <div className='tab'>
            <span>My resume can be found by following </span> <a className='resume-link' target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1YeteNcPehFGOMPEMr4iUdVCbJYckRqiiSYX4IbMV3Pw/edit?usp=sharing"> this link! <span className="glyphicon glyphicon-new-window" /></a>
          </div>
        )
      } 
      {
        tab === 3 && <Contact />
      }
    </div>
  );
};

export default Info;
