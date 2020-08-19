/* eslint-disable max-len */
import React from 'react';
import myPhoto from '../img/face-square.png';

export default function Header() {
  return (

    <div>
      <div className="header-text">
        <div className="innokentiy-kuznetsov-mobile">Innokentiy Kuznetsov</div>
        <div className="frontend-mobile">Web software developer</div>
      </div>

      <div className="header-photo">
        <img src={myPhoto} alt="me" className="my-photo-mobile" />
      </div>

    </div>

  );
}
