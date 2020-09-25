import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import LandingCard from '../components/landing_parallax';
import '../App.css'

class Landing extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: 'hi, i am philip chenaux-repond',
            welcome: 'welcome to my website'
        }
      }

    render() {
        return ( 
            <Container fluid className="landing_page">
                <Row className="h-100 row_width mx-5">
                    <Col sm={12} className="w-100">
                        <LandingCard/>
                        <h1 className="landing_font">
                            this website was made using the React.js framework (more details in the projects section)
                        </h1>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Landing;