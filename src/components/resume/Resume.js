import './Resume.css';
import React, { Component } from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
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


const Paratext = () => (
  <div className="paratext"> Front-end software developer </div>
);

const ParallaxImage = () => (
  <ParallaxBanner
    className="your-class"
    layers={[
      {
        image: paraimage,
        amount: 0.3,
      },
      {
        children: <Paratext />,
        amount: 0.1,
      },
    ]}
    style={{
      height: '800px',
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


        <div className="resume-left">
          <img src={myPhoto} alt="me" className="my-photo" />
        </div>

        <div className="resume-right">
          <div className="innokentiy-kuznetsov">Innokentiy Kuznetsov</div>
        </div>

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
