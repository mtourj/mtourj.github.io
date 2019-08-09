import React from 'react';

import './styles/Project.scss';

const Project = ({ data }) => {
  const href = link => {
    window.open(link, '_blank');
  }

  return (
    <div className='project'>
      <div className='thumb'>
        <img src={data.image} alt={data.name} />
      </div>
      <div className='right'>
      <div className='content'>
        <h3 className='project-head'>{data.name}</h3>
        <h5 className='project-subhead'>{data.tech}</h5>
        <p className='project-desc'>{data.description}</p>
      </div>
      <div className='cta'>
        <button onClick={() => href(data.demo)}>View Demo  <span className="glyphicon glyphicon-new-window" /></button>
        <button onClick={() => href(data.code)}>View Code  <span className="glyphicon glyphicon-new-window" /></button>
      </div>
      </div>
    </div>
  );
};

export default Project;