import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Landing from './pages/landing';
import AboutMe from './pages/aboutme';
import Experiences from './pages/experiences';

import Arrow from './images/arrow.png';
import ArrowUp from './images/arrowup.png'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render () {

    return (
      <div>
        <div id="Landing">
          <Landing className="landing_anim"/>
          
          <a href="#About_Me">
            <img src={Arrow} alt="arrow" className="downArrow"/>
          </a>
        </div>

        <div id="About_Me">
          <Container fluid className="aboutme_page">
            <Row className="h-100 bg1">
              <Col className="my-0 about_page1">
                <a href="#Landing" className="about_arrowu">
                  <img src={ArrowUp} alt="arrowup" className="upArrow" height="13"/>
                </a>
                <h1 className="about_font bg3">ABOUT ME</h1>
                <a href="#Experiences" className="about_arrowd">
                  <img src={Arrow} alt="arrow" className="downArrow"/>
                </a>
              </Col>
              <AboutMe/>
            </Row>
          </Container>
        </div>

        <div id="Experiences">
          <Container fluid className="experiences_page">
            <Row className="h-100 bg1">
              <Experiences/>
              <Col className="my-0">
                <a href="#About_Me" className="about_arrowu">
                  <img src={ArrowUp} alt="arrowup" className="upArrow" height="13"/>
                </a>
                <h1 className="about_font2">
                  PROJECTS<br/>&<br/>EXPERIENCES
                </h1>
              </Col>
            </Row>
          </Container>
        </div>

      </div>  
    );
  }
}

export default App;
