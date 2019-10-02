/* eslint-disable max-len */
import React from 'react';
import footer from '../img/footer.jpg';

export default function Header() {
  return (
    <div className="footer">
      <img src={footer} alt="footer" className="footer-picture" />
      <div className="footer-right">
        <div className="footer-button-container">
          <div className="footer-button snake">Cozy snake game</div>
          <div className="footer-button pdf">Download resume PDF</div>
        </div>
      </div>
    </div>


  );
}
