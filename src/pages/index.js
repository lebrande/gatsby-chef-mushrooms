import React from 'react';
import { graphql } from 'gatsby';

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
  <div>
    <Banner
      logoImageSharp={logoImageSharp}
      heroImageSharp={heroImageSharp}
    />
    <div id="main">
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
    </div>
  </div>
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
            fluid(maxWidth: 400) {
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
            fixed(width: 300, height: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
      totalCount
    }
    site {
      siteMetadata {
        title
        description
        homePageBoxes {
          title
          content
          link
          features
          image
        }
        homeTextBlock {
          title
          content
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
