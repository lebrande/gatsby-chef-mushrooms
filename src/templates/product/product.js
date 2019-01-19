import React, { Fragment } from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { Helmet } from 'react-helmet';

import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

const Template = ({
  data: {
    markdownRemark: {
      frontmatter: {
        title,
        metaTitle,
        metaDescription,
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
    <Helmet defaultTitle={title} titleTemplate={`%s | ${title}`}>
      <html lang="pl" />
      <meta name="docsearch:version" content="2.0" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
      />

      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
    </Helmet>
    <div className="product">
      <div className="product__logo">
        <Link to="/">
          <Img {...logo} />
        </Link>
      </div>
      <div className="product__images">
        <Img {...productImage} />
      </div>
      <div className="product__content-wrapper">
        <div className="product__content">
          <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
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
        metaTitle
        metaDescription
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
