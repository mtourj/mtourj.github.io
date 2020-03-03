import React from 'react';

import './styles/Project.scss';

const Project = ({ data }) => {
  const href = link => {
    window.open(link, '_blank');
  };

  return (
    <div className='project'>
      <div className='images'>
        {data.thumbnail && (
          <img
            className='thumb'
            style={
              !data.mobile_thumbnail
                ? { width: 'auto', maxHeight: 480, margin: 'auto' }
                : null
            }
            src={data.gif || data.thumbnail}
            alt={data.name}
          />
        )}
        {data.mobile_thumbnail && (
          <img
            className='mobile-thumb'
            style={!data.thumbnail ? { width: null, maxHeight: '480px' } : null}
            src={data.mobile_gif || data.mobile_thumbnail}
            alt={data.name}
          />
        )}
      </div>
      <div className='content'>
        <h3 className='project-head'>
          {data.name}
          {data.early && <span className='warn'>EARLY</span>}
        </h3>

        <h5 className='project-subhead'>{data.tech}</h5>
        <p className='project-desc'>{data.description}</p>
      </div>
      <div className='cta'>
        <button
          className={data.demo ? '' : 'disabled'}
          onClick={() => href(data.demo)}
        >
          {data.demo ? (
            <>
              View Demo <span className='glyphicon glyphicon-new-window' />
            </>
          ) : (
            <>Demo unavailable</>
          )}
        </button>
        <button onClick={() => href(data.github)}>
          View Code <span className='glyphicon glyphicon-new-window' />
        </button>
      </div>
    </div>
  );
};

export default Project;
