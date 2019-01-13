import React from 'react';
import Img from 'gatsby-image';

const Banner = ({
  logoImageSharp,
  heroImageSharp,
}) => (
  <div
    className="banner"
    style={{
      backgroundImage: `url("${heroImageSharp.fluid.src}")`,
    }}
  > 
    <div className="banner__logo">
      <Img
        {...logoImageSharp}
      />
    </div>
    <div className="banner__cta">
      <a href="#products" className="banner__button next scrolly">
        Zobacz produkty
      </a>
    </div>
  </div>
);

export default Banner;
