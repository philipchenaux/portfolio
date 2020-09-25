import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../App.css';
import TransitionGrid from'../components/transitions';

class Projects extends React.Component {

    render() {
        return (
            <Container fluid className="projects_page">
                <Row className="h-100 bg1">
                    <Col className="bg2">
                        <h1 className="about_font">
                            
                        </h1>
                    </Col>
                    <Col className="my-auto">
                        <h1 className="about_font">
                            PROJECTS 
                            <br/>
                            &
                            <br/>
                            EXPERIENCES
                        </h1>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Projects;