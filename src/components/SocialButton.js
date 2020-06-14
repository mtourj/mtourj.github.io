import React, { useState } from 'react';

import './styles/SocialButton.scss';

const SocialButton = props => {
  const [hover, setHover] = useState(false);

  return (
    <a href={props.to} target="_blank" rel="noopener noreferrer">
    <img alt='' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} src={hover ? props.hover || props.default : props.default} className='link' />
    </a>
  );
};

export default SocialButton;