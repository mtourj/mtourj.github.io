import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {

  

  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const sendMessage = () => {

  }

  return (
    <form className='tab'>
      
    </form>
  );
};

export default Contact;