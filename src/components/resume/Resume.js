import './style/Resume.css';
import './style/Header.css';
import React, { Component } from 'react';
import simpleParallax from 'simple-parallax-js';

import Header from './sections/Header';
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

        <Header
          widthWithoutScroll={this.state.widthWithoutScroll}
          headerShift={this.state.headerShift}
        />

        <div className="resume-rightzzz">

          <div className="resume-main">
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
