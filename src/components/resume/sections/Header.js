/* eslint-disable max-len */
import React from 'react';
import paraimage from '../img/whistler.jpg';
import myPhoto from '../img/face.png';

export default function Header(props) {
  return (

    <div>

      <img src={paraimage}
        className="parallax"
        style={{ width: props.widthWithoutScroll }}
        alt="Innokentiy Kuznetsov"
      />

      <div className="header-left" style={{ marginTop: props.headerShift }}>
        <img src={myPhoto} alt="me" className="my-photo" />
        <div className="personal-info first">Languages:</div>
        <div className="personal-info">Russian</div>
        <div className="personal-info end-block">English</div>
        <div className="personal-info">Birthdate:</div>
        <div className="personal-info last-info">2 january 1980</div>

        <div className="header-button contacts">Contacts</div>
      </div>


      <div className="header-right" style={{ marginTop: props.headerShift }}>
        <div className="innokentiy-kuznetsov">Innokentiy Kuznetsov</div>
        <div className="frontend">Front-end software developer</div>
        <div className="button-container">
          <div className="header-button snake">Cozy snake game</div>
          <div className="header-button pdf">Download resume PDF</div>
        </div>
      </div>
    </div>

  );
}
