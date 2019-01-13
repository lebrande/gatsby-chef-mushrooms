import React from 'react';
import Link from 'gatsby-link';
import ProductItem from '../ProductItem';

const Products = ({ products, images }) => {
  return (
    <section id="products" className="products">
      {/* {console.log({ images, products })} */}
      {products.map(({ frontmatter: { title, path, image } }) => (
        <ProductItem 
          key={path}
          title={title}
          image={images.find(({ relativePath }) => {
            // console.log({ relativePath, image });
            return relativePath === image;
          })}
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
};

export default Products;
