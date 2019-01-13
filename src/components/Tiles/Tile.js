import React from 'react';
import Stars from '../Stars';
import Header from '../Header';

const Tile = ({ title, features, content }) => (
  <article
    key={title}
    style={{ backgroundImage: '' }}
  >
    <Header>
      <h3>{features && features.includes('stars') ? <Stars /> : title}</h3>
      <p>{content}</p>
    </Header>
  </article>
);

export default Tile;
