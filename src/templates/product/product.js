import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

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
      childImageSharp,
    },
  },
}) => (
  <Fragment>
    <div className="product">
      <div className="product__images">
        <div
          className="product__image"
          style={{
            backgroundImage: `url("${childImageSharp.fluid.src}")`,
          }}
        />
      </div>
      <div className="product__content-image">
        <Img {...childImageSharp} />
      </div>
      <div className="product__content">
        <div className="contact__method">
          <span className="icon alt fa-envelope" />
          <h3>
            <a href="mailto:jakub@lebrande.pl">jakub@lebrande.pl</a>
          </h3>
        </div>
        <div className="contact__method">
          <span className="icon alt fa-phone" />
          <h3>+48 731 044 940</h3>
        </div>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
      <div className="product__contact">
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
  }
`;
