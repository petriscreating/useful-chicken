import React, { useState, useRef } from "react";
import { Container } from 'react-bootstrap';
import './Despedida.css';
import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti';
import emailjs from '@emailjs/browser';

export default function OfficialHey() {
  const [runConfetti, setRunConfetti] = useState(true);
  const knope = require('knope');
  const form = useRef();
  const { width, height } = useWindowSize();

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm("service_2dstpjp","template_y4lwi86", form.current, '6okG80mdlYWqVEAnC')
      .then(
        () => {
          alert('Thanks! You may now fly away');
          resetForm();
        },
        () => {
          alert('Failed to send the message, please try again');
        }
      )
  }
  
  const resetForm = () => {
    const inputs = form.getElementsByTagName('input');
    const textarea = form.getElementsByTagName('textarea')[0];
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = '';
    }
    textarea.value = '';
  }


  return (
    <div className="section section-dark">
      <Container fluid className="section-content">

        <h2>Congrats {knope.getCompliment('', 3, false).replace(/^, /, "").replace(".", "")}!</h2>
        <p>You've got so far! I'm proud of you.</p>
        Now you can
        <p className="item">{"->"} Write an appreciation message</p>
        <p className="item">{"->"} Write me what you had for breakfast</p>
        <p className="item">{"->"} Explain why </p>
        <p className="item">I still don't know who you are, so you better write it down here</p>
        
        <form ref={form} onSubmit={sendEmail}>
          <input className="input" placeholder="Name (optional)" type="text" name="from_name" />
          <textarea className="input"
            placeholder="Write here whatever you want"
            name="message"
            required
            rows={4}
          ></textarea>
          <input type="submit" className="form-button" value="send" />
        </form>
        <div className="down-div">
          <p className="last-mssg">You can also go to <span className="url-txt" onClick={() => {window.location.href = '/bye'}}>the playground</span> or <span className="url-txt" onClick={() => {window.location.href = '/but-first'}}>draw for me!</span></p>
          <button className="for-real-btn confetti-btn" onClick={() => {setRunConfetti(!runConfetti)}}>{ runConfetti ? 'Pause ' : 'Continue '}confetti</button>
        </div>
      </Container>
      
    <Confetti
      width={width}
      height={height}
      run={runConfetti}
    />
    </div>
  );
}
