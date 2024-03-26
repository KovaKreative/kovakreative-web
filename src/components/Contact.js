import './Contact.scss';

import Button from './Button';
import Social from './Social';

import { useState } from 'react';

import emailjs from '@emailjs/browser';

export default function Contact() {

  const [submitted, setSubmit] = useState(null);
  const [contactForm, setForm] = useState({ name: '', email: '', message: '' });

  const onSubmit = function() {

    const { name, email, message } = { ...contactForm };
    if (email.length > 5 && message.length > 50) {
      const templateParams = {
        name,
        email,
        message
      };
      emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, templateParams, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
        .then(res => {
          setSubmit('Thank you so much for reaching out!\nI will get back to you as soon as possible!');
        }, err => {
          console.log(err);
          setSubmit('Something went wrong. Please try again later.');
        });
    }
  };

  return (
    <section className='Contact'>
      <div>
        <h1 className="section-title">Contact</h1>
        <p className='centered'>If you're in need of a developer, or just want to connect, drop me a line!</p>
      </div>
      {submitted
        ?
        <div className='submitted'>{submitted}</div>
        :
        <form className='contact-form' onSubmit={e => e.preventDefault()}>
          <div className='form-container'>
            <div>
              <label>Name</label>
              <input type='text' value={contactForm.name} onChange={e => setForm(prev => { return { ...prev, name: e.target.value }; })}></input>
            </div>
            <div>
              <label>E-mail</label>
              <input type='email' value={contactForm.email} onChange={e => setForm(prev => { return { ...prev, email: e.target.value }; })}></input>
            </div>
          </div>
          <textarea type='email' placeholder="Type your message here..." value={contactForm.message} onChange={e => setForm(prev => { return { ...prev, message: e.target.value }; })}></textarea>
          <Button large={true} label='Submit' onClick={onSubmit} />
        </form>
      }
      <Social />
    </section>
  );
}