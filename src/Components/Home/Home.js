import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './Home.css';


export default function Home() {
  var myCompliment = require('cheer-me-up');

  const complimentMe = () => {
    const compliment = myCompliment.getCompliment();
    const firstChar = compliment.charAt(0).toLowerCase();
    const restOfString = compliment.slice(1);
    const result = firstChar + restOfString;
    return firstChar + restOfString;
  };

  return (
    <div className="section section-dark">
      <Container fluid className="section-content">

        <h1>Hello stranger</h1>
        <p>I must say; {complimentMe()}</p>

        <h2>To continue, confirm you are interested to know more</h2>

          <Row className="button-choice click-me">
            <div className="item button-parrot">
              <button onClick={() => {window.location.href = '/who-am-I'}} className="proceed-button click-me-btn">Yes please!
                <div className="parrot"></div>
                <div className="parrot"></div>
                <div className="parrot"></div>
                <div className="parrot"></div>
                <div className="parrot"></div>
                <div className="parrot"></div>
              </button>
            </div>
          </Row>
          <h2>Or...</h2>

          <Col className="button-choice">
            <div className="background-button">
              <button onClick={() => {window.location.href = '/bye'}} className="emg-button">
                ABORT!
              </button>
            </div>
          </Col>
          
          
      </Container>
    </div>
  );
}
