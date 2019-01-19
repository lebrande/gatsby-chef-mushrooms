import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import Banner from '../components/Banner';
import Contact from '../components/Contact';
import Products from '../components/Products';
import Content from '../components/Content';
import Footer from '../components/Footer';
import Tiles from '../components/Tiles';

import '../assets/scss/main.scss';

const Layout = ({ 
  data: { 
    site: { 
      siteMetadata: {
        title,
        description,
        homePageBoxes,
      },
    },
    allMarkdownRemark: {
      edges: postEdges,
    },
    logo: {
      childImageSharp: logoImageSharp,
    },
    heroImage: {
      childImageSharp: heroImageSharp,
    },
    allFile: {
      edges: imageEdges,
    },
    boxImages: {
      edges: boxImageEdges,
    }, 
  }
}) => (
  <Fragment>
    <Helmet defaultTitle={title} titleTemplate={`%s | ${title}`}>
      <html lang="pl" />
      <meta name="docsearch:version" content="2.0" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
      />

      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
    <Banner
      logoImageSharp={logoImageSharp}
      heroImageSharp={heroImageSharp}
    />
    <Tiles
      tiles={homePageBoxes}
      images={boxImageEdges}
    />
    <Content />
    <Products
      products={postEdges}
      images={imageEdges}
    />
    <Contact />
    <Footer />
  </Fragment>
);

export default Layout;

export const query = graphql`
  query HomePageQuery {
    logo: file(relativePath: { eq: "logo/premium-mushrooms-opacity.png" }) {
      childImageSharp {
        fluid(maxWidth: 540) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    heroImage: file(relativePath: { eq: "hero/banner-hero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    boxImages: allFile(filter: { relativePath: { regex: "/jpg$/" } }) {
      edges {
        node {
          name
          relativePath
          childImageSharp {
            fluid(maxWidth: 400, maxHeight: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      totalCount
    }
    allFile(filter: { relativePath: { regex: "/jpg$/" } }) {
      edges {
        node {
          name
          relativePath
          childImageSharp {
            fluid(maxWidth: 300, maxHeight: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      totalCount
    }
    site {
      siteMetadata {
        title,
        description,
        homePageBoxes {
          title
          content
          link
          features
          image
        }
      } 
    }
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            path
            image
          }
        }
      }
    }
  }
`;
