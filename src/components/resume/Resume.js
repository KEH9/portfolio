import './style/Resume.css';
import './style/Header.css';
import './style/Footer.css';
import React, { Component } from 'react';
import simpleParallax from 'simple-parallax-js';

import Header from './sections/Header';
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

        <Header />

        <div className="resume-right">
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
