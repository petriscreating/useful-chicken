import React, { useEffect, useState, useRef } from "react";
import { Container } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import animals from '../../Animals'


export default function LetsTalk() {
  const [animal, setAnimal] = useState();
  const [imgUrl, setImgUrl] = useState();
  const form = useRef();
  const colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink", "pink"];
  const urls = ['/who-am-I', '/bye', '/real-bye', '/you-made-it'];



  const getRandomAnimal = () => {
    const randomIndex = Math.floor(Math.random() * animals.length);
    setAnimal(animals[randomIndex].toLowerCase());
  }

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_2dstpjp","template_cri3vcr", form.current, '6okG80mdlYWqVEAnC')
      .then(
        () => {
          alert('Thanks for the message! You may now fly away');
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


  useEffect(() => { 

    getRandomAnimal();
  }, []);

  
    return (
      <div className="section section-dark">
        <Container fluid className="section-content">

        <h2 className="colorful-title">Welcome, 
          {"little artist".split("").map((char, index) => (
            <span key={index} style={{ color: colors[index % colors.length] }}>
              {char}
            </span>
          ))}
        </h2>

        Here you can express your feelings with a drawing. You can draw:
        <p className="item">{"->"} a/an {animal} <span className="url-txt" onClick={() => {getRandomAnimal()}}>(or change it)</span></p>
        <p className="item">{"->"} yourself</p>
        <p className="item">{"->"} anything else, abstract or not (a title could be helpful on this one) </p>
        <p className="item">{"->"} a call for help</p>
        <p className="item">{"->"} your favourite food</p>
        <p className="item">{"->"} how you think I am</p>
        <p className="item">{"->"} your mother</p>
        <p className="item">{"->"} anxiety</p>
        <p className="item">{"->"} three things you hate</p>

        <p><input type="submit" onClick={() => window.location.href = '/canvas'} className="for-real-btn confetti-btn" value="let me paint" /></p>
        
        But if you just want to write something, you can leave me:
        <p className="item">{"->"} a playlist or a song (need to get out of the loop)</p>
        <p className="item">{"->"} a place/restaurant/bar/city/ park/corner/river/ditch recommendation</p>
        <p className="item">{"->"} a comment/compliment/request</p>
        <p className="item">{"->"} a recipe</p>

        <form ref={form} onSubmit={sendEmail}>
          <input className="input" placeholder="Who's writing" type="text" name="from_name" required/>
          <textarea className="input" name="message" placeholder="Insert here your deepest thoughts" required/>
          <input type="submit" className="for-real-btn confetti-btn" value="send" />
        </form>
            <br />
        <p className="item">I don't know where you came from, but you can now <span className="url-txt" onClick={() => window.location.href = urls[Math.floor(Math.random() * urls.length)]}>go somewhere else</span></p>
        </Container>
      </div>
    );
  
}

