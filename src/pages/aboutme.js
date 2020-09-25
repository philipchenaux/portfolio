import React from 'react';
import Col from 'react-bootstrap/Col';

import '../App.css';

import CV from '../images/cv.png'
import LinkedIn from '../images/linkedin.png'
import Github from '../images/github.png'
import Strava from '../images/strava.png'

class AboutMe extends React.Component {
    constructor(props) {
        super(props);
        this.state =  {
            main:'ABOUT ME'
        };

    }

    render() {
        return (
            <Col className="bg2 about_page2">
                <div sm={6} className="section my-5">
                    <h2 className="about_header">education</h2>
                    <h3 className="about_subtitle mx-3">
                        UNIVERSITY OF CHICAGO
                    </h3>
                    <p className="about_text mx-3">
                        Chicago, IL
                        <br/>
                        BS in Computer Science and Mathematics
                        <br/>
                        Expected Grduation: June 2023
                        <br/>
                        Cumulative GPA: 3.95, (Dean's List 2020)
                    </p>
                    <h3 className="about_subtitle mx-3">
                        GERMAN SWISS INTERNATIONAL SCHOOL
                    </h3>
                    <p className="about_text mx-3">
                        Hong Kong S.A.R
                        <br/>
                        International Baccalaureate Diploma Program
                        <br/>
                        Graduation: June 2019
                        <br/>
                        IB Score: 45/45, (Top 0.41%)
                    </p>
                </div>

                <div sm={6} className="section my-5">
                    <h2 className="about_header">skills</h2>
                    <h3 className="about_subtitle mx-3">
                        PROGRAMMING LANGUAGES
                    </h3>
                    <p className="about_text mx-3">
                        In order of proficiency:
                        <br/>
                        <b>C</b> - used to code a range of programs that demonstrate an  understanding of comptuer systems
                        <br/>
                        <b>Python</b> - used to code programs of practical use using machine learning libraries as well
                        <br/>
                        <b>Javascript</b> - used for fullstack web-development
                        <br/>
                        <b>Typed/Racket</b> - used as an introductory language to code Backgammon
                    </p>
                    <h3 className="about_subtitle mx-3">
                        FRAMEWORKS
                    </h3>
                    <p className="about_text mx-3">
                        <b>React.js</b> to build websites such as this
                        <br/>
                        <b>Flask</b> and <b>Django</b> for backend implementation
                        <br/>
                        <b>Bootstrap</b> and <b>Bootsrap React</b> for CSS styling
                        <br/>
                        <b>Python libraries</b> used across a range of Python projects
                    </p>
                    <h3 className="about_subtitle mx-3">
                        OTHER TECHNICAL SKILLS
                    </h3>
                    <p className="about_text mx-3">
                        <b>Markup:</b> HTML5, CSS, LATEX, microsoft word/excel/powerpoint
                        <br/>
                        <b>Version Control:</b> Git, svn
                        <br/>
                        <b>IDE:</b> vim, vscode, pycharm, jupyter notebook, google collab
                        <br/>
                        <b>Tools:</b> BeautifulSoup, ChromeDriver, TravisCI, HerokuApp, CMake, MatPlotLib
                    </p>
                    <h3 className="about_subtitle mx-3">
                        LANGUAGE PROFICIENCIES
                    </h3>
                    <p className="about_text mx-3">
                        <b>English:</b> native proficiency
                        <br/>
                        <b>German:</b> speaking, reading, and writing proficiency
                        <br/>
                        <b>Japanese:</b> speaking proficiency
                        <br/>
                        <b>Mandarin:</b> speaking proficiency
                    </p>
                </div>
                <div sm={6} className="section my-5">
                    <h2 className="about_header">links</h2>
                    <p className="about_text mx-3">
                        <a href="https://uchicago.box.com/s/1ysfmhd33oo0y95cefv62n7z4ubwycwe">
                            <img src={CV} alt="cv" className="cv" height="70"/>
                        </a>
                        <a href="https://www.linkedin.com/in/philipchenaux/">
                            <img src={LinkedIn} alt="linkedin" className="linkedin" height="70"/>
                        </a>
                        <a href="https://github.com/philipchenaux">
                            <img src={Github} alt="github" className="github" height="70"/>
                        </a>
                        <a href="https://www.strava.com/athletes/18799309">
                            <img src={Strava} alt="strava" className="strava" height="70"/>
                        </a>
                    </p>
                </div>
            </Col>

        )
    }
}

export default AboutMe;