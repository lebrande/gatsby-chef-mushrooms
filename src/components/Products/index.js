import React from 'react';
import Link from 'gatsby-link';
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
        title={title}
        image={images.find(({ 
          node: {
            relativePath,
          }
        }) => 
          relativePath === image
        )}
      >
        <ul className="actions">
          <li>
            <Link to={path} className="button">
              Czytaj więcej
            </Link>
          </li>
          <li>
            <button className="button">
              zapytaj o ofertę
            </button>
          </li>
        </ul>
      </ProductItem>
    ))}
  </section>
);

export default Products;
