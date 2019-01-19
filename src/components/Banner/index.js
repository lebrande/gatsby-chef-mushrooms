import React from 'react';
import Img from 'gatsby-image';

import { scrollTo } from '../../lib/scrollTo';

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
      <button
        className="banner__button"
        onClick={() => {
          scrollTo('#content');
        }}
      >
        Zobacz produkty
      </button>
    </div>
  </div>
);

export default Banner;
