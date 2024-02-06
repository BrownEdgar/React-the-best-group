import React from 'react'
import './Forms.scss'
import { Formik, Field, Form } from 'formik';
import { nanoid } from 'nanoid'
import { useState } from 'react';

export default function Forms() {
  const [messages, setMessages] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const {username,email,subject,textmessage} = e.target;
    const message = {
      id:nanoid(4),
      user:username.value,
      email:email.value,
      subject:subject.value,
      textmessage:textmessage.value
    }
    setMessages([...messages,message]);
    e.reset();
    }
  return (
    <div className='Forms'>
      <h2>Contact Us</h2>
      <form className='Forms__Form' onSubmit={handleSubmit} >
        <input type="text" name="username" placeholder='enter your name' required />
        <input type="email" name="email" placeholder='enter your @mail' required />
        <input type="text" name="subject" placeholder='subject' required />
        <textarea name="textmessage" id="" cols="30" rows="10" placeholder='TYPE YOUR MESSAGE HERE' required ></textarea>
        <button>Send</button>
      </form>
    </div>

  )
}

