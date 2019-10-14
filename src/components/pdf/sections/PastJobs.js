/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import Slash from '../img/Slash.png';

export default class PastJobs extends Component {
  componentDidMount() {
  }

  toggleView(e) {
    const jobName = e.target;
    const jobWrapper = jobName.nextSibling;
    if (jobWrapper.classList.contains('hide-it')) {
      jobWrapper.classList.remove('hide-it');
    } else {
      jobWrapper.classList.add('hide-it');
    }
    if (jobName.classList.contains('opened')) {
      jobName.classList.remove('opened');
      jobName.classList.add('closed');
    } else {
      jobName.classList.remove('closed');
      jobName.classList.add('opened');
    }
  }


  hideWrapper() {
  }


  render() {
    return (

      <div className="past-jobs">

        <div className="page-break">&nbsp;</div>
        <h1>Past Jobs</h1>

        <div className="paragraph">
          <h3>2016 <img src={Slash} alt="/" className="slash" /> present time</h3>
          <div>
            <span className="job">Front-end developing studies.</span>
          </div>
        </div>

        <div className="paragraph">
          <h3>2012 <img src={Slash} alt="/" className="slash" /> 2018</h3>
          <div>
            <span className="job">Private entrepreneur.</span>
          </div>
        </div>

        <div className="paragraph">
          <h3>2010 <img src={Slash} alt="/" className="slash" /> 2012</h3>
          <div>
            <span className="job opened" onClick={this.toggleView.bind(this)}>
              Wurth-Eurasien
            </span>
            <span className="job-wrapper">
              <span className="position">Position:  Project manager</span>
              <p>
              General objectives of the project: delivery, distribution, installation and
              servicing of the car diagnostic system “WOW (Wurth Online World) Snooper”
              which includes soft and hardware components.
              </p>
              <p>
              Side project: The creation of th geographic information system for internal
              use only. The purpose of the geoinformational system is to output data
              of sales and customers from “1C” (Russian Axapta) to the high-resolution
              map of the cities. The data can be displayed by different ways and colors
              depend on the parameters. I used OpenOffice.org Basic to create it.
              </p>
            </span>
          </div>
        </div>


        <div className="paragraph">
          <h3>2009 <img src={Slash} alt="/" className="slash" /> 2010</h3>
          <div>
            <span className="job opened" onClick={this.toggleView.bind(this)}>
              Vitamin-Plus
            </span>
            <span className="position">Position:  Specialist for the software integration</span>
            <p>
                - 1C based software integration and improvement (integration with the front office
                software, writing code for automatic creation of the documents, calculations,
                printing forms, reports, etc. for a wide range of configurations);
            </p>

            <p>
                - The shop equipment installation, adjustment and software integration
                (trading terminals, magnetic card readers, barcode scanners etc.)
            </p>

          </div>
        </div>


        <div className="paragraph">

          <h3>2007 <img src={Slash} alt="/" className="slash" /> 2009</h3>
          <div>
            <span className="job opened" onClick={this.toggleView.bind(this)}>
              Center for Informational and Finance Technologies (CIFT)
            </span>

            <span className="job-wrapper">
              <span className="position"> Position: Project manager</span>

              <p>
                - Organization of the work group for software integration; negotiations with
                the customer, negotiations level till the minister of the region;
                preparation of project and contract documentation ; promotion of the software.
              </p>
              <p>
                During this work I was awarded the silver mark of the Ministry of Finance of
                the Republic Sakha (Yakutia) for achievements in state finance digitalization.
              </p>
              <span className="position">Position: Specialist for the software integration</span>
              <p>
                - Setting up and integration of software system (SS) Sapphire.
                This package is designed to automate the planning and forecasting
                of the budget in financial institutions of the regions of Russian
                Federation and municipalities (state finances). Setting up and integration
                includes: analysis of business processes for budget execution; engineering
                databases and configuration the SS for storing and processing information,
                including uploading data from external sources, and building
                reports (based on analysis and customer requirements);
                Configuring the SS is carried out both by internal languages, and
                using VBA for MS Office.
              </p>
              <p>
                - Forming requirements specification for platform developers.
              </p>
              <p>
                - Training of customer employees working with SS.
              </p>
            </span>
          </div>
        </div>


        <div className="paragraph">

          <h3>2006 <img src={Slash} alt="/" className="slash" /> 2007</h3>
          <div>
            <span className="job opened" onClick={this.toggleView.bind(this)}>
              The Network of Pharmacies «Atoll-Pharm» /
              The Network of Pharmacies «36,6»
            </span>

            <span className="job-wrapper">
              <span className="position">Position: Budgeting specialist</span>
            </span>

          </div>
        </div>


        <div className="paragraph">
          <h3>2002 <img src={Slash} alt="/" className="slash" /> 2006</h3>
          <div>
            <span className="job opened" onClick={this.toggleView.bind(this)}>
              Finance-Budget department of City Ekaterinburg
            </span>
            <span className="job-wrapper">
              <span className="position"> Position:  Leading Specialist of the <br />
                division for the budget revenues analysis and forecasting
              </span>
            </span>
          </div>

        </div>


        <div className="paragraph">

          <h3 className="last">2000 <img src={Slash} alt="/" className="slash" /> 2001</h3>
          <div className="last">
            <span className="job opened" onClick={this.toggleView.bind(this)}>
              PG «UralInvestEnergo»
            </span>
            <span className="job-wrapper">
              <span className="position">Position: Analyst in the Finance Department</span>
            </span>
          </div>
        </div>


      </div>
    );
  }
}
