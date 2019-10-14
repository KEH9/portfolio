import './style/ResumePdf.css';
import './style/HeaderPdf.css';
import React, { Component } from 'react';

import Header from './sections/Header';
import Skills from '../resume/sections/Skills';
import OtherITSkills from '../resume/sections/OtherItSkills';
import PastJobs from './sections/PastJobs';
import Education from '../resume/sections/Education';
import PersonalStatement from '../resume/sections/PersonalStatement';
import Hobbies from '../resume/sections/Hobbies';
import Contacts from '../resume/sections/Contacts';


class Resume extends Component {
  componentWillMount() {
  }

  componentDidMount() {
    document.title = 'Pdf';
  }


  render() {
    return (

      <div className="wrapper-pdf">

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


      </div>

    );
  }
}

export default Resume;
