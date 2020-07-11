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
        <div className="personal-info first"><a href="tel:+79089164787">+79089164787</a></div>
        <div className="personal-info"><a href="mailto:innokkuz@protonmail.com">send e-mail</a></div>
        <div className="personal-info"><a href="https://www.facebook.com/innokentiy.kuznetsov.12">facebook</a></div>
        <div className="personal-info last-info"><a href="https://github.com/KEH9/">github</a></div>

      </div>


      <div className="header-right">
        <div className="innokentiy-kuznetsov">Innokentiy Kuznetsov</div>
        <div className="frontend">Web software developer</div>
        <div className="header-button-container">
          <NavLink to="/game" className="header-button snake">Cozy snake game</NavLink>
          <div className="header-button pdf">Download resume PDF</div>
        </div>
      </div>
    </div>

  );
}
