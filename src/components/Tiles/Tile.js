import React from 'react';
import Img from 'gatsby-image';

import Stars from '../Stars';
import Header from '../Header';

const Tile = ({
  reverse,
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
    <article
      className="tile"
      style={reverse ? { flexDirection: 'row-reverse' } : {}}
    >
      <div className="tile__content">
        <div className="tile__header">
          <Header>
            <h3
              className="tile__title"
            >
              {features && features.includes('stars') ? <Stars /> : (title || '')}
            </h3>
            <p>{content || ''}</p>
          </Header>
        </div>
      </div>
      <div className="tile__image">
        <Img {...childImageSharp} />
      </div>
    </article>
  );
}

export default Tile;
