import React from 'react';
import Link from 'gatsby-link';
import ProductItem from '../ProductItem';

const Products = ({ products }) => {
  return (
    <section id="products" className="products">
      {products.map(({ frontmatter: { title, path } }) => (
        <ProductItem key={path} title={title}>
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
};

export default Products;
