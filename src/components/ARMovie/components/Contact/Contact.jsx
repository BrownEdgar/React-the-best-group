import './Contact.scss'
import { nanoid } from 'nanoid'
import { useState } from 'react';

export default function Contact() {
  const [messages, setMessages] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, subject, textmessage } = e.target;
    const message = {
      id: nanoid(4),
      user: username.value,
      email: email.value,
      subject: subject.value,
      textmessage: textmessage.value
    }
    setMessages([...messages, message]);
    e.target.reset();
  }
  console.log(messages);
  return (
    <div className='Main-Contact'>
      <div className="Contact">
        <h2>Contact Us</h2>
        <form className='Contact__Form' onSubmit={handleSubmit} >
          <input type="text" name="username" placeholder='Full Name' required />
          <input type="email" name="email" placeholder='Email' required />
          <input type="text" name="subject" placeholder='Subject' required />
          <textarea name="textmessage" id="" cols="30" rows="10" placeholder='type your message here' required ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>

  )
}