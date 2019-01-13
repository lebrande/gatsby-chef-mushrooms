import React from 'react';
import Tile from './Tile';

const Tiles = ({ tiles }) => (
  <section id="one" className="tiles">
    {tiles.map((props, index) => <Tile
      {...props}
      key={index}
    />)}
  </section>
);

export default Tiles;