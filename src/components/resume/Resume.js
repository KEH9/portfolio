import './Resume.css';
import React, { Component } from 'react';
import simpleParallax from 'simple-parallax-js';
import paraimage from './img/whistler.jpg';
import myPhoto from './img/face.png';
import Skills from './sections/Skills';
import OtherITSkills from './sections/OtherItSkills';
import PastJobs from './sections/PastJobs';
import Education from './sections/Education';
import PersonalStatement from './sections/PersonalStatement';
import Hobbies from './sections/Hobbies';
import Personal from './sections/Personal';
import Contacts from './sections/Contacts';


class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      widthWithoutScroll: props.widthWithoutScroll,
      headerShift: props.headerShift,
    };
  }


  componentWillMount() {
  }


  componentDidMount() {
    document.title = 'Resume';

    const parallaxHeightCalc = (document.body.offsetWidth * 0.713190511489993);
    const marginShift = (document.body.offsetWidth * 0.037);
    const headerShift = -(Math.round(parallaxHeightCalc) - Math.round(marginShift));
    this.setState({
      widthWithoutScroll: `${document.body.offsetWidth}px`,
      headerShift: `${headerShift}px`,
    });
    const images = document.querySelectorAll('.parallax');
    // eslint-disable-next-line new-cap, no-new
    new simpleParallax(images, {
      delay: 0,
      transition: 'ease',
      orientation: 'down',
      scale: 1.6,
      overfow: true,
    });
  }


  render() {
    return (

      <div className="wrapper">


        <img src={paraimage}
          className="parallax"
          style={{ width: this.state.widthWithoutScroll }}
          alt="Innokentiy Kuznetsov"
        />

        <div className="header-left" style={{ marginTop: this.state.headerShift }}>
          <img src={myPhoto} alt="me" className="my-photo" />
          <div className="personal-info first">Languages:</div>
          <div className="personal-info">Russian</div>
          <div className="personal-info end-block">English</div>
          <div className="personal-info">Birthdate:</div>
          <div className="personal-info last-info">2 january 1980</div>

          <div className="header-button contacts">Contacts</div>
        </div>


        <div className="header-right" style={{ marginTop: this.state.headerShift }}>
          <div className="innokentiy-kuznetsov">Innokentiy Kuznetsov</div>
          <div className="frontend">Front-end software developer</div>
          <div className="button-container">
            <div className="header-button snake">Cozy snake game</div>
            <div className="header-button pdf">Download resume PDF</div>
          </div>

        </div>

        <div className="resume-rightzzz">

          <div className="resume-main">
            <div>{this.state.headerShift}</div>
            <Personal />
            <Skills />
            <OtherITSkills />
            <PastJobs />
            <Education />
            <PersonalStatement />
            <Hobbies />
            <Contacts />
          </div>

        </div>


      </div>

    );
  }
}

export default Resume;
