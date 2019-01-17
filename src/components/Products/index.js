import React from 'react';
import ProductItem from '../ProductItem';

const Products = ({ products, images }) => (
  <section id="products" className="products">
    {products.map(({ 
      node: {
        frontmatter: { 
          title, 
          path,
          image
        },
      },
    }) => (
      <ProductItem 
        key={path}
        path={path}
        title={title}
        image={images.find(({ 
          node: {
            relativePath,
          }
        }) => 
          relativePath === image
        )}
      />
    ))}
  </section>
);

export default Products;
