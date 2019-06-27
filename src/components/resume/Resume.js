import './Resume.css';
import React, { Component } from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import paraimage from './img/whistler.jpg';
import Skills from './sections/Skills';
import OtherITSkills from './sections/OtherItSkills';
import PastJobs from './sections/PastJobs';
import Education from './sections/Education';
import PersonalStatement from './sections/PersonalStatement';
import Hobbies from './sections/Hobbies';
import Personal from './sections/Personal';
import Contacts from './sections/Contacts';


const Paratext = () => (
  <div className="paratext"> Front-end software developer </div>
);

const ParallaxImage = () => (
  <ParallaxBanner
    className="your-class"
    layers={[
      {
        image: paraimage,
        amount: 0.7,
      },
      {
        children: <Paratext />,
        amount: 0.1,
      },
    ]}
    style={{
      height: '600px',
    }}
  />
);

class Resume extends Component {
  componentDidMount() {
    document.title = 'Resume';
  }


  render() {
    return (

      <div className="wrapper">

        <ParallaxImage />

        <div className="resume">

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
