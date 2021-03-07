/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
import React from 'react';

export default function PersonalInfo() {
  const ieltsOnClick = () => {
    const elementToScrollTo = document.getElementsByClassName('ielts')[0];
    elementToScrollTo.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="other-it-skills">

      <h1>Personal information</h1>

      <div className="paragraph">
        <h3>
          Languages
        </h3>
        <div>English <a className="anchor" onClick={ieltsOnClick}>(IELTS 6.5)</a>, Russian
        </div>
      </div>


      <div className="paragraph">
        <h3>
          Current location:
        </h3>
        <div>
          <a href="https://www.google.com/maps/place/Yekaterinburg,+Sverdlovsk+Oblast/@56.8115682,60.3372063,10z/data=!3m1!4b1!4m5!3m4!1s0x43c165eaa062db4b:0xd50243d7f7567f20!8m2!3d56.8430993!4d60.6454086">
          Ekaterinburg, Russia.
          </a>
        </div>
      </div>

    </div>

  );
}
