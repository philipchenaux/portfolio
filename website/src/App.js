import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Landing from './pages/landing';
import AboutMe from './pages/aboutme';
import Projects from './pages/projects';
import Experiences from './pages/experiences';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render () {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          
          <Navbar className="" bg="transparent" expand="lg" onSelect={this.handleSelect}>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="m-auto">
                <Link className="nav-link" to="/">landing</Link>
                <Link className="nav-link" to="/about">about</Link>
                <Link className="nav-link" to="/projects">projects</Link>
                <Link className="nav-link" to="/experiences">experiences</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact component={Landing} />
          <Route path="/about" component={AboutMe} />
          <Route path="/projects" component={Projects} />
          <Route path="/experiences" component={Experiences} />

        </Container>
      </Router>
    );
  }
}

export default App;
