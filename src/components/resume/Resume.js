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

    // calculating height of the left panel
    const lastHeaderElement = document.getElementsByClassName('last-info')[0];
    const LastInfoBottom = lastHeaderElement.getBoundingClientRect().bottom;
    const headerLeftElement = document.getElementsByClassName('header-left')[0];
    const headerLeftTop = headerLeftElement.getBoundingClientRect().top;
    const headerLeftLeft = headerLeftElement.getBoundingClientRect().left;
    const headerLeftRight = headerLeftElement.getBoundingClientRect().right;
    const headerLeftWidth = headerLeftRight - headerLeftLeft;
    const headerLeftHeight = headerLeftWidth * 1.476489028213166; // 1.476 is my photo raito

    headerLeftElement.style.height = `${headerLeftHeight + LastInfoBottom - headerLeftTop}px`;
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
