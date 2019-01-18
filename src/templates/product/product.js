import React from 'react';
import { graphql } from 'gatsby';

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
  <div className="product">
    <div className="product__images">
      <div
        className="product__image"
        style={{
          backgroundImage: `url("${childImageSharp.fluid.src}")`,
        }}
      />
    </div>
    <div className="product__content">
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  </div>
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
