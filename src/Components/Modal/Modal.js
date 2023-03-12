import React, { useState } from 'react';
import './Modal.css';

function Modal(props) {
  const [showModal, setShowModal] = useState(props.show);

  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <>
      {showModal && (
        <div className="modal-overlay">
        <div className="modal">
            <div className='content-modal'>
                <div className='header-modal'><span className="close-modal" onClick={closeModal}>&times;</span></div>
                <h2 className='title-modal'>{props.title}</h2>
                <p className='message-modal'>{props.message}</p>
            </div>
        </div>
      </div>
    )}
    </>
  );
}

export default Modal;
