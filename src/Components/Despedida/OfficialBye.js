import React, { useState } from "react";
import { Container } from 'react-bootstrap';
import './Despedida.css';
import ducks from '../../static/img/duck-u.jpg';
import oldboy from '../../static/img/oldboy-.jpg';
import black from '../../static/img/black.jpg';
import Testimonial from "../ItsMe/Testimonial";
import useSound from 'use-sound';
import quack from '../../static/img/quack.mp3';
import doit from '../../static/img/do-it.mp3';
import Modal from '../Modal/Modal';

export default function OfficialBye() {
  const [showModal, setShowModal] = useState(false);
  const [playquack] = useSound(quack);
  const [playdoit] = useSound(doit);

  return (
    <div className="section light-yellow">
      <Container fluid className="section-content">

        <h2>I must say it was great seeing you around here, but I'm sad now that you're leaving</h2>
        <p>Here you have a duck. Remember, <span className="instructions-duck">a click = a 'duck you'</span></p>

        <img src={ducks} onClick={playquack} alt="A duck" />

        <p>You can always go to <span className="url-txt" onClick={() => {window.location.href = '/bye'}}>the playground</span>, if you haven't been there. Or even <span className="url-txt" onClick={() => {window.location.href = '/but-first'}}>paint me something!</span></p>  
        <div className="last-phrase">
            <Testimonial text={"*Insert inspirational phrase for quitters like you*"}
              person="Someone Someday" position="Corintio 04:20"  imgUrl={black} />
        </div>
        <div>
          <button className="for-real-btn confetti-btn" onClick={() => {setShowModal(true)}}>I SUMMON THE GODS OF CLOSING TABS</button>
        </div>
        {showModal && (
          <Modal
            title="U stupid"
            message={
              <>
                Do I really have to do everything for you??
                <img className="shake-it" src={oldboy} onClick={playdoit} alt="oldboy" />
                Just CLOSE IT YOU WEIRD HUMAN BEING!!
              </>
            }
            show={showModal}
            onClose={() => {setShowModal(false)}}
          />
        )}

      </Container>
    </div>
  );
}
