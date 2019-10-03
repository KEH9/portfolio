/* eslint-disable max-len */
import React from 'react';
import { NavLink } from 'react-router-dom';
import paraimageSmall from '../img/header.jpg';
import paraimageMiddle from '../img/header@2x.jpg';
import paraimageLarge from '../img/header@3x.jpg';
import myPhoto from '../img/face.png';

export default function Header() {
  return (

    <div>

      <picture>
        <source media="(min-width: 1800px)" srcSet={paraimageLarge} />
        <source media="(min-width: 900px)" srcSet={paraimageMiddle} />
        <img src={paraimageSmall} alt="header" className="parallax" />
      </picture>

      <div className="header-left">

        <img src={myPhoto} alt="me" className="my-photo" />
        <div className="personal-info first">Languages:</div>
        <div className="personal-info">Russian</div>
        <div className="personal-info end-block">English (IELTS)</div>
        <div className="personal-info">Birthdate:</div>
        <div className="personal-info last-info">2 january 1980</div>

        <div className="header-button contacts">Contacts</div>
      </div>


      <div className="header-right">
        <div className="innokentiy-kuznetsov">Innokentiy Kuznetsov</div>
        <div className="frontend">Front-end software developer</div>
        <div className="header-button-container">
          <NavLink to="/game" className="header-button snake">Cozy snake game</NavLink>
          <div className="header-button pdf">Download resume PDF</div>
        </div>
      </div>
    </div>

  );
}
