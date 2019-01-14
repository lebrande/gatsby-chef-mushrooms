import React from 'react';
import Tile from './Tile';

const Tiles = ({
  tiles,
  images,
}) => (
  <section id="one" className="tiles">
    {tiles.map(({ image, ...props }, index) => <Tile
      {...props}
      key={index}
      reverse={index%2}
      image={images.find(({ 
        node: {
          relativePath,
        }
      }) => {
        return relativePath === image;
      })}
    />)}
  </section>
);

export default Tiles;