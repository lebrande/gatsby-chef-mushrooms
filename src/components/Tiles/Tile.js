import React from 'react';
import Stars from '../Stars';

const Tile = ({ title, features, content }) => (
  <article
    key={title}
    style={{ backgroundImage: '' }}
  >
    <header className="major">
      <h3>{features && features.includes('stars') ? <Stars /> : title}</h3>
      <p>{content}</p>
    </header>
  </article>
);

export default Tile;
