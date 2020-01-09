import React, { useState } from 'react';
import axios from 'axios';

import './styles/Contact.scss';

const Contact = () => {

  const [state, setState] = useState({
    sending: false,
    sendError: '',
    sendSuccess: ''
  })

  const defaultForm = {
    name: '',
    email: '',
    company: '',
    message: '',
    error: ''
  }

  const [form, setForm] = useState(defaultForm);

  const setError = error => {
    setForm({
      ...form,
      error,
      sendSuccess: error ? '' : state.sendSuccess
    })
  }

  const sendMessage = e => {
    e.preventDefault();

    const name = form.name.trim();
    const email = form.email.trim();
    const company = form.company.trim();
    const message = form.message.trim();

    setError('');

    if(!name){
      setError("Please provide your name.");
      return;
    } else if (!email) {
      setError("Email is required for replies.");
      return;
    } else if(!message){
      setError("Message may not be empty.");
      return;
    }

    setState({
      ...state,
      sending: true
    })

    axios.post(process.env.REACT_APP_SEND_MAIL, {
      name,
      email,
      company,
      message
    })
    .then(() => {
      setState({
        ...state,
        sendSuccess: 'Thank you, your message has been sent successfully! I will respond shortly.',
        sending: false
      })
      setForm(defaultForm);
    })
    .catch(err => {
      setState({
        ...state,
        sending: false,
        sendError: err.message
      })
    })
  }

  const handleChange = e => {
    setError('');
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form className='tab'>
      <div className='form-field'>
        <label>Name <span className='required'>*</span></label>
        <input disabled={state.sending} type='text' name='name' value={form.name} onChange={handleChange} />
      </div>
      <div className='form-field'>
        <label>Email <span className='required'>*</span></label>
        <input disabled={state.sending} type='email' name='email' value={form.email} onChange={handleChange} />
      </div>
      <div className='form-field'>
        <label>Company</label>
        <input disabled={state.sending} type='text' name='company' value={form.company} onChange={handleChange} />
      </div>
      <div className='form-field'>
        <label>Message <span className='required'>*</span></label>
        <textarea disabled={state.sending} name='message' value={form.message} onChange={handleChange} />
      </div>
      {form.error && <p className='required'>{form.error}</p>}
      {state.sendError && <p className='required'>{state.sendError}</p>}
      {state.sendSuccess && <p className='success'>{state.sendSuccess}</p>}
      <button disabled={state.sending} onClick={sendMessage}>Send</button>
    </form>
  );
};

export default Contact;