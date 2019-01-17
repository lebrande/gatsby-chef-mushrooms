import React from 'react';
import Img from 'gatsby-image';

import Stars from '../Stars';

const Tile = ({
  title,
  features,
  content,
  image: {
    node: {
      childImageSharp,
    },
  },
}) => {
  return (
    <article className="tile">
      <div className="tile__content">
        <header className="tile__header">
          <h3 className="tile__title">
            {features && features.includes('stars') ? <Stars /> : (title || '')}
          </h3>
          <p className="tile__description">{content || ''}</p>
        </header>
      </div>
      <div className="tile__image">
        <Img
          {...childImageSharp}
          alt={title}
          title={title}
          style={{
            display: 'block',
          }}
        />
      </div>
    </article>
  );
}

export default Tile;
