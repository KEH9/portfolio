import './style/Resume.css';
import './style/Header.css';
import React, { Component } from 'react';
import simpleParallax from 'simple-parallax-js';
import footer from './img/footer.jpg';

import Header from './sections/Header';
import Skills from './sections/Skills';
import OtherITSkills from './sections/OtherItSkills';
import PastJobs from './sections/PastJobs';
import Education from './sections/Education';
import PersonalStatement from './sections/PersonalStatement';
import Hobbies from './sections/Hobbies';
import Contacts from './sections/Contacts';


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

        <div className="footer">
          <img src={footer} alt="footer" className="footer" />
        </div>


      </div>

    );
  }
}

export default Resume;
