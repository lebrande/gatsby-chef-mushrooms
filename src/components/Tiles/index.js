import React from 'react';
import Tile from './Tile';

const Tiles = ({
  tiles,
  images,
}) => (
  <section className="tiles">
    {tiles.map(({ image, ...props }, index) => (
      <Tile
        {...props}
        key={index}
        image={images.find(({ 
          node: {
            relativePath,
          }
        }) => {
          return relativePath === image;
        })}
      />
    ))}
  </section>
);

export default Tiles;