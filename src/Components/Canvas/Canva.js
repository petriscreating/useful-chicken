import React, { useState } from "react";
import { Container } from 'react-bootstrap';
import CanvasPaint from 'react-canvas-paint';

export default function Canva() {
    const [showModal, setShowModal] = useState(false);
      const urls = ['/who-am-I', '/bye', '/real-bye', '/you-made-it'];

    var randomColor = require('randomcolor');
    var randomWords = require('random-words');

    const download = () => {
      const canvas = document.getElementsByTagName("canvas")[0];
      const url = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = randomWords() + '-' + randomWords() + '-' + randomWords() + '.png';
      link.href = url;
      link.click();
    }

    return (
    <div className="section section-dark sctn-canva">
       <Container fluid className="section-content">
            <CanvasPaint
            width={300}
            height={500}
            colors={[randomColor({ hue: 'purple' }), randomColor({ hue: 'yellow' }), randomColor({ hue: 'blue' }), randomColor({ hue: 'green' }),
                randomColor({ hue: 'red', luminosity: 'bright' }), randomColor({ hue: 'pink', luminosity: 'dark' }), randomColor({ hue: 'orange' }), '#000000']}
            />
            <button className="for-real-btn confetti-btn" onClick={() => download()}>Download</button>
            <button className="for-real-btn confetti-btn" onClick={() => setShowModal(true)}>Help</button>

    {showModal && (
      <div className="modal-overlay">
        <div className="modal">
            <div className='content-modal'>
                <span className="close-modal" onClick={() => {setShowModal(false)}}>&times;</span>
                <p className='message-modal'>
                    <span className="canva-info">
                        Unfortunatly, I can't receive the masterpiece you'll create, but you can always email it to&nbsp;
                        <span className="url-email" onClick={() => window.location = 'mailto:maria.alamo.cedillo@gmail.com'}>bannedpetri@gmail.com</span>&nbsp;(my 
                        manager'll get it for me). If you get bored, you can&nbsp;	
                        <span className="url-txt" onClick={() => window.location.href = urls[Math.floor(Math.random() * urls.length)]}>go somewhere else</span>. Or if 
                        you think we started with the wrong foot, <span className="url-txt" onClick={() => window.location.href = '/'}>do respawn</span>
                    </span>
                </p>
            </div>
        </div>
      </div>
    )}


        </Container>
    </div>
    );
  
}

