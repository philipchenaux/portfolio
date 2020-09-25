import React from 'react';
import Col from 'react-bootstrap/Col';

import '../App.css'

import TransitionGrid from'../components/transitions';

class Experiences extends React.Component {

    render() {
        return (
            <Col className="bg2">
                <div className="experience">
                    <TransitionGrid/>
                </div>
            </Col>      
        )
    }
}

export default Experiences;