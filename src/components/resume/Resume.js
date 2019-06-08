import './Resume.css';
import React, { Component } from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import paraimage from './img/whistler.jpg';

const Paratext = () => (
  <div className="paratext"> Frontend Software Developer </div>
);

const ParallaxImage = () => (
  <ParallaxBanner
    className="your-class"
    layers={[
      {
        image: paraimage,
        amount: 0.7,
      },
      {
        children: <Paratext />,
        amount: 0.1,
      },
    ]}
    style={{
      height: '600px',
    }}
  />
);

class Resume extends Component {
  componentDidMount() {
    document.title = 'Resume';
  }


  render() {
    return (

      <div>

        <ParallaxImage />

        <div className="header">
          <h1>Header</h1>
          <p>My supercool header</p>
        </div>

        <div className="text">
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
          <p>
          khgkqreg kjw;r g rgk ger erg r kje jk ekj ekb ek bkje bkj;qe bke b ebk e;kb e;kt bkje;
          </p>
        </div>

      </div>

    );
  }
}

export default Resume;
