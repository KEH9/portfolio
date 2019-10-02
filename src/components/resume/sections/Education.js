/* eslint-disable max-len */
import React from 'react';
import cambridge from '../img/cambridge.jpg';
import urgeu from '../img/urgeu.jpg';

export default function Education() {
  return (
    <div className="education">

      <h1>Education</h1>

      <div className="paragraph underlining">
        <h3 className="last"><img src={cambridge} alt="Cambridge university" className="cambridge" /> </h3>
        <div className="last">
          <p>
            <span className="university">
              International English Language Testing System (IELTS) University of
              Cambridge ESOL Examinations.
            </span>
          </p>
          <p>
            Academic Module 6,5 overall band score.
          </p>
          <p>
            June 2005.
          </p>
        </div>
      </div>


      <div className="paragraph">
        <h3 className="last"><img src={urgeu} alt="UrGEU" className="urgeu" /></h3>
        <div className="last">
          <p>
            <span className="university">
              Ural State University of Economics.
            </span>
            <p>
                Degree &apos;Specialist&apos; (5 years education)
                in economics, specialization “Finance and Banking”.
            </p>
          </p>
          <p>
            During the education was awarded the Diploma &apos;For Achievements in Scientific Researches in 1999-2000.&apos;
          </p>
          <p>
            September 1997 - May 2002.
          </p>
        </div>
      </div>


    </div>

  );
}
