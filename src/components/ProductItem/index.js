import React from 'react';
import Link from 'gatsby-link';

const ProductItem = ({
  children,
  title,
}) => (
  <section className="product-item">
    <div className="product-item__wrapper">
      <Link 
        to="/"
        className="product-item__img-link"
      >
        {title}
      </Link>
      <div className="product-item__content">
        <header className="product-header">
          <h1 className="product-title">{title}</h1>
        </header>
        {children}
      </div>
    </div>
  </section>
);

export default ProductItem;
