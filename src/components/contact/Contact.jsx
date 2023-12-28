import { useState, useRef } from "react";
import "./contact.scss"
import emailjs from '@emailjs/browser'


const Contact = () => {

  const formRef = useRef();
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8bvvusc', 'template_bvjsnb2', formRef.current, 'CECXBHC_Lr3bDD3q-')
      .then((result) => {
          setSuccess(true)
      }, (error) => {
        setError(true)
      });
  };
  return (
    <div className="contact">
      <div className="textContainer">
        <h1>Let's Work together</h1>
        <div className="item">
          <h2>Mail</h2>
          <span>lasindudileepa2001@gmail.com</span>
        </div>
        <div className="item">
          <h2>Address</h2>
          <span>No.45, 5th cross street, Colombo</span>
        </div>
        <div className="item">
          <h2>Phone</h2>
          <span>+94-72-467-9291</span>
        </div>
      </div>
      <div className="formContainer">
        <form ref={formRef} onSubmit={sendEmail}>
          <input type="text" required placeholder="Name" name="name"/>
          <input type="email" required placeholder="Email" name="email"/>
          <textarea required rows={8} placeholder="Message" name="message"/>
          <button>Submit</button>
          {error && "Error"}
          {success && "Success"}
        </form>
      </div>
    </div>
  )
};

export default Contact;
