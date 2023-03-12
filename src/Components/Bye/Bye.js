import React, { useState, useEffect } from "react";
import './Bye.css';
import Modal from '../Modal/Modal';

function Bye() {
    const [isLoading, setIsLoading] = useState(true);
    const [shutUp, setShutUp] = useState(false);
    const [showChillMsg, setShowChillMsg] = useState(false);
    const [message, setMessage] = useState(null);
    const [insult, setInsult] = useState(null);
    const [memeUrl, setMemeUrl] = useState(null);
    const [showModal, setShowModal] = useState(true);
    const [title, setTitle] = useState("I won't say it's a shame we never met, but did you know...");

  const fetchInsult = async (insulto) => {
    const response = await fetch('https://insult.mattbas.org/api/en/insult.json')
      .then((response) => response.json())
      .then((insultData) => {
        if(insulto){
            setInsult(insultData.insult)
        } else {
            const firstChar = insultData.insult.charAt(0).toLowerCase();
            const restOfString = insultData.insult.slice(1);
            const result = firstChar + restOfString;
            setMessage(result);
        }
      });
  };

  const fetchCompliment = async () => {
    const response = await fetch('https://complimentr.com/api')
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.compliment);
      });
  };

  const fetchMeme = async () => {
    const response = await fetch('https://meme-api.com/gimme')
      .then((response) => response.json())
      .then((data) => {
        setMemeUrl(data.url);
      });
  };
  
  useEffect(() => {  
    if (isLoading) {
        void(memeUrl == null ? fetchMeme() : null);
        fetch("https://uselessfacts.jsph.pl/api/v2/facts/random")
            .then((response) => response.json())
            .then((factData) => {
                setMessage(factData.text);
                const lastChar = factData.text.slice(-1);
                if (lastChar === "." || lastChar === "!" || lastChar === "?") {
                const newText = factData.text.slice(0, -1) + '?';
                setMessage(newText);
                }
            });
    }
    setIsLoading(false);
  }, [isLoading]);
  

  const randomFact = () => {
    setTitle("I won't say it's a shame we never met, but did you know...");
    setMessage("...")
    setIsLoading(true);    
  };

  const randomJoke = () => {    
    setTitle("Or maybe I should just say...");
    setMessage("...")
    const functions = [fetchCompliment, fetchCompliment, fetchInsult, fetchInsult, fetchInsult];
    const randomIndex = Math.floor(Math.random() * functions.length);
    const randomFunction = functions[randomIndex];
    randomFunction();
  };

  const handleClick = (bool) => {
    if(!bool){
        setTitle("I'm chill, I just want you to know");
        fetchCompliment();
        fetchInsult(true);
        setShowChillMsg(true);
    } else{
        fetchMeme();
        fetchInsult(true);
    }
    void(insult == null ? fetchInsult(true) : null);
    setShutUp(bool);
  };


  if (shutUp){   
    return(
        <div className="section section-nervous">
            <div className="content">
                <h1 className="nervous-mssg">{insult}*</h1>
                <button onClick={() => handleClick(false)} className="chill-btn">
                   Chill...
                </button>
                <p className="declaration">*I've never said this, I promise</p>
            </div>
        </div>
    )
  } else if (showChillMsg) {
    return(
            <div className="section section-chill">
                <div className="content">
                    <p>Ok, I'm chilling</p>
                    <p>Here you have a meme, click on it to chill</p> 
                    <img onClick={() => {setShowChillMsg(false); setShowModal(false);}} src={memeUrl} alt="A meme" />
                </div>
            </div>
    )
  }
  
  return (
    <div className="section section-bye">
        <div className="content">
          <h1 className="playg-title"><span>The Playground</span></h1>
          <h3 className="title"><span>{title}</span></h3>
            <div className="fact">
                <p>{message}</p>
            </div>
            <div className="main">
                <div className="up">
                    <button onClick={randomFact} className="card-roulette card1">
                        <p>I knew, you stupid</p>
                    </button>
                    <button onClick={randomJoke} className="card-roulette card2">
                        <p>I'm nice</p>
                    </button>
                </div>
                <div className="down">
                    <button onClick={() => {window.location.href = '/who-am-I'}} className="card-roulette card3">
                        <p>I will go on</p>
                    </button>
                    <button onClick={() => handleClick(true)} className="card-roulette card4">
                        <p>Just SHUT UP!</p>
                    </button>
                </div>
            </div>
          <p className="item black-txt">Bored of using your brain? Use <span className="url-txt" onClick={() => {window.location.href = '/but-first'}}>your fingers instead!</span></p>
          <button onClick={() => {window.location.href = '/real-bye'}} className="for-real-btn">
            FOR REAL, I WANT TO LEAVE!
          </button>
        </div>


        {showModal && (
          <Modal
            title="Welcome to The Playground"
            message="The reason you were sent here is to reflect on the decisions you've made. Take some time to clear your mind while you're here. Remember to choose wisely."
            show={showModal}
            onClose={() => {setShowModal(false)}}
          />
        )}
    </div>
  );
}

export default Bye;
