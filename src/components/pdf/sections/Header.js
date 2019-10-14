/* eslint-disable max-len */
import React from 'react';
import myPhoto from '../img/facePdf.jpg';

export default function Header() {
  return (

    <div className="pdf">
      <div className="innokentiy-kuznetsov">Innokentiy Kuznetsov</div>
      <div className="frontend">Front-end software developer</div>

      <div className="header-pdf">
        <img src={myPhoto} alt="me" className="my-photo" />
        <div className="pdf-info">Language: Russian, English <br /> Birthdate: 2 january 1980 </div>

      </div>

    </div>

  );
}
