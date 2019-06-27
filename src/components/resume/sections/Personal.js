/* eslint-disable max-len */
import React from 'react';
import photo from '../img/photo.bmp';

export default function Personal() {
  return (
    <div className="personal">

      <div className="photo-holder">
        <img className="photo" src={photo} alt="me" />

        <div className="personal-holder">

          <p>
            Innokentiy Kuznetsov
          </p>

          <p>
            Birth date 02.01.1980
          </p>

          <p>
            Languages: Russian, English (IELTS AM, score 6,5)
          </p>

        </div>

      </div>


    </div>

  );
}
