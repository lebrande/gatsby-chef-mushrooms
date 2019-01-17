import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const ProductItem = ({
  path,
  title,
  image,
}) => (
  <section className="product-item">
    <div className="product-item__wrapper">
      <Link 
        to="/"
        className="product-item__img-link"
      >
        <Img
          {...image.node.childImageSharp}
          style={{ display: 'block' }}
        />
      </Link>
      <div className="product-item__content">
        <header className="product-header">
          <h1 className="product-title">{title}</h1>
        </header>
        <ul className="actions">
          <li>
            <Link to={path} className="product-item__button">
              Czytaj więcej
            </Link>
          </li>
          <li>
            <button className="product-item__button">
              zapytaj o ofertę
            </button>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default ProductItem;
