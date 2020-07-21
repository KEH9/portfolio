/* eslint-disable max-len */
import React from 'react';
import { NavLink } from 'react-router-dom';
import footerSmall from '../img/footer.jpg';
import footerMiddle from '../img/footer@2x.jpg';
import footerLarge from '../img/footer@3x.jpg';

export default function Header() {
  return (
    <div className="footer">

      <picture>
        <source media="(min-width: 1800px)" srcSet={footerLarge} />
        <source media="(min-width: 900px)" srcSet={footerMiddle} />
        <img src={footerSmall} alt="footer" className="footer-picture" />
      </picture>

      <div className="footer-button-container">
        <NavLink to="/game" className="footer-button snake">Cozy snake game</NavLink>

        <a className="footer-button pdf" href="resume.pdf" download>
            Resume PDF
        </a>

        <a className="footer-button odt" href="resume.odt" download>
            Resume ODT
        </a>

      </div>
    </div>


  );
}
