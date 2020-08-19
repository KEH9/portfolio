import './style/Header.css';
import './style/HeaderMobile.css';
import './style/Resume.css';
import './style/ResumeMobile.css';
import './style/Footer.css';
import React, { Component } from 'react';
import simpleParallax from 'simple-parallax-js';
import { isMobileOnly } from 'react-device-detect';


import HeaderActual from './sections/HeaderActual';
import PersonalInfo from './sections/PersonalInfo';
import Skills from './sections/Skills';
import OtherITSkills from './sections/OtherItSkills';
import PastJobs from './sections/PastJobs';
import Education from './sections/Education';
import PersonalStatement from './sections/PersonalStatement';
import Hobbies from './sections/Hobbies';
import Contacts from './sections/Contacts';
import Footer from './sections/Footer';


class Resume extends Component {
  componentWillMount() {
  }

  componentDidMount() {
    document.title = 'Resume';

    if (isMobileOnly) {
      document.getElementsByClassName('resume-right')[0].classList.add('mobile');
      document.getElementsByClassName('footer')[0].classList.add('mobile');
    }

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

        <HeaderActual />

        <div className="resume-right">
          <PersonalInfo />
          <Skills />
          <OtherITSkills />
          <PastJobs />
          <Education />
          <PersonalStatement />
          <Hobbies />
          <Contacts />
        </div>

        <Footer />

      </div>

    );
  }
}

export default Resume;
