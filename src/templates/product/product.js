import React, { Fragment } from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

const Template = ({
  data: {
    markdownRemark: {
      frontmatter: {
        title,
      },
      html,
    },
    productImage: {
      childImageSharp: productImage,
    },
    logo: {
      childImageSharp: logo,
    }
  },
}) => (
  <Fragment>
    <div className="product">
      <div className="product__logo-wrapper">
        <Link to="/" className="product__logo">
          <Img {...logo} />
        </Link>
      </div>
      <div className="product__images">
        <div
          className="product__image"
          style={{
            backgroundImage: `url("${productImage.fluid.src}")`,
          }}
        />
      </div>
      <div className="product__content-image">
        <Img {...productImage} />
      </div>
      <div className="product__content">
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
      <div className="product__contact">
        <Contact />
        <Footer />
      </div>
    </div>
  </Fragment>
);

export default Template;

export const query = graphql`
  query(
    $pathSlug: String!
    $imagePath: String!
  ) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
      }
    }
    productImage: file(relativePath: { eq: $imagePath }) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    logo: file(relativePath: { eq: "logo/premium-mushrooms-opacity.png" }) {
      childImageSharp {
        fluid(maxWidth: 540) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
