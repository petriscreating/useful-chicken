import React, { useState } from "react";
import { Container} from 'react-bootstrap';
import './ItsMe.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Modal from '../Modal/Modal';
import Testimonial from "./Testimonial";
import reina from '../../static/img/reina.jpg';
import serbian from '../../static/img/serbian.jpg';
import chat from '../../static/img/chat-gpt.jpg';
import oldy from '../../static/img/old-man-crazy.jpg';
import lila from '../../static/img/lila.jpg';
import chicken from '../../static/img/chicken-2.jpg';
import heroku from '../../static/img/heroku.png';

function ItsMe() {
    const [showModal, setShowModal] = useState(false);
    const knope = require('knope');
  
  return (
    <>
    <div className="section section-dark first">
      <Container fluid className="section-content" >

        <p className="intro-mssg">You chose the right path, <span className="compliment-span">{knope.getOfficialCompliment('', 3, false).replace(/^, /, "")}</span></p>

        <h2>Now, let me introduce myself...</h2>

        <Carousel className="intro-div" onSwipeEnd={() => console.log("FIN")} showThumbs={false}>
            <div>
                <h2>I'm Maria.</h2> 
                <h3>
                To give you a little taste of who I am, here are some&nbsp;
                    <span className="url-txt" onClick={() => {setShowModal(true);}}>tidbits</span>&nbsp;that might pique your interest.
                </h3>
            </div>
            <div>
                <h4>
                    <p>I can read and breathe</p>
                    <p>I can hear a song in loop more than 100 times</p>   
                    <p>I code useful things</p>
                    <p>I do clay things</p>
                    <p>I sometimes won't listen to you, so you can insult me</p>   
                    <p>Normally, I am not late</p>                     
                </h4>
            </div>
            <div>
                <h3>
                <p>You still have two options;</p>
                <br />
                <p onClick={() => {window.location.href = '/bye'}} className="url-txt">Run away</p>
                <br />
                <p>Keep going {"=>"}</p>                    
                </h3>
            </div>
            <div>
                <h3>
                <p>I am aware of the oddity of this approach.</p>
                <p>I will understand it if you choose running away, but I really think you shouldn't</p>
                </h3>
            </div>
            <div>
                <h3>
                Keep scrolling to find some testimonials about me if you're still doubting or you just want to get bored. 
                <br /><br />
                <p>I hope it helps</p>
                </h3>
            </div>
        </Carousel>
        <br /> <br /> <br /><br /> <br />
        <div className="scroll-down-arrows">↓↓↓ scroll down ↓↓↓</div>
      </Container>
    </div>
    <div className="section section-dark">
        <Container fluid className="section-content testimonials-cont">
        <h2>Testimonials</h2>
            <Testimonial text={"She talked stupid. And I don't understand her. This relationship won't work. She puts so many obligations"}
                person="Aleksandra" position="Serbian that doesn't speak Serbian"  imgUrl={serbian} />
            <Testimonial text={"My programming prevents me from making comments that may harm or negatively affect others in any way"}
                person="Chat GPT" position="needs to chill" imgUrl={chat} />
            <Testimonial text={"I never met her, but that doesn't mean she doesn't deserve my position down here"}
                person="Queen Elizabeth II" position="underground" imgUrl={reina} />
            <Testimonial text={"State changed from up to crashed. Process exited with status 1"}
                person="The Cursed Heroku" position="my only bff"  imgUrl={heroku} />
            <Testimonial text={"She sings like a nightingale, like one whose vocal cords have been cut and sewn back together by a blind person."}
                person="The old men on the corner" position="he's right there"  imgUrl={oldy} />
            <Testimonial text={"I love how she says 'annoying', so hateable"}
                person="Lila" position="the color"  imgUrl={lila} />
            <Testimonial text={"A chicken with oversized legs always running. I offer a bed and oats"}
                person="Eduardo the Weak" position="the chicken hater"  imgUrl={chicken} />
        </Container>
    </div>
    <div className="section section-dark ">
        <Container fluid className="section-content last-sect">
        <h2>This is your last chance. After this, there is no turning back. </h2>
           <p> You take the <span className="blue-txt">blue pill</span> - the story ends, you wake up in your bed and believe whatever you want to believe. </p>
           <p> You take the <span className="red-txt">red pill</span> - you stay in Wonderland and I show you how deep the rabbit hole goes.</p>
        
        <div className="pills-row">
            <button onClick={() => {window.location.href = '/real-bye'}} className="pill-btn blue-pill">Bedtime!!</button>
            <button onClick={() => {window.location.href = '/you-made-it'}} className="pill-btn red-pill" >Wonderland</button>
        </div>
        <br /> <br /> <br />
        <p className="down-mssg">No matter what you choose, remember that Simon loves you <span>(and maybe even your mother)</span></p>
        </Container>
    </div>

    

    {showModal && (
          <Modal
            title="Some things I like rn:"
            message={
                  <>
                  You better read it now, beacuse you won't be able to re-open it.<br />
                  <b>Movies:</b> Snatch (2000), Amélie (2001), Oldboy (2003)
                  <br />
                  <b>Current on-loop songs:</b> 
                  <br />- <span className="url-txt" onClick={() => {window.open('https://www.youtube.com/watch?v=BciS5krYL80&ab_channel=TheEagles-Topic', '_blank') }}>Hotel California</span>&nbsp;	
                  <br />- <span className="url-txt" onClick={() => {window.open('https://www.youtube.com/watch?v=K-2vt8UV2e4&ab_channel=MarcoSolisCaicedo', '_blank') }}>Siempre me quedará</span>&nbsp;	
                  <br />- <span className="url-txt" onClick={() => {window.open('https://www.youtube.com/watch?v=r6bxSrcnQlY&ab_channel=ManuChao', '_blank') }}>Luna y Sol</span> 
                  <br />
                  <b>Food:</b> Croquetas de jamón
                  <br />
                  <b>Drinks:</b> Caipirinha, Tequila and Colacao (not mixed)
                  <br />
                  <b>Website:</b>  #2 <span className="url-txt" onClick={() => {window.open('https://www.lingscars.com/', '_blank') }}>LINGsCAR</span><br />
                  #1 <span className="url-txt" onClick={() => {window.open('https://simone.computer/#/', '_blank') }}>Simone Computer</span>
                 </>
              }
            show={showModal}
            onClose={() => {setShowModal(false)}}
          />
        )}

</>
  );
}
export default ItsMe;
