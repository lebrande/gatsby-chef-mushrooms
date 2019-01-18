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
        to={path}
        className="product-item__img-link"
      >
        <Img
          {...image.node.childImageSharp}
          style={{ display: 'block' }}
        />
      </Link>
      <div className="product-item__content">
        <Link to={path}>
          <h3 className="product-item__title">
            {title}
          </h3>
        </Link>
        <div>
          <Link to={path} className="product-item__button">
            Czytaj więcej
          </Link>
          <button className="product-item__button">
            zapytaj o ofertę
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default ProductItem;
