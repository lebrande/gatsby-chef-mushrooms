import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import Header from '../components/Header';

import Banner from '../components/Banner';
import Contact from '../components/Contact';
import Products from '../components/Products';
import Content from '../components/Content';
import Footer from '../components/Footer';

import Stars from '../components/Stars';

import '../assets/scss/main.scss';

const Article = ({ title, features, content, index }) => (
  <article
    key={title}
    style={{ backgroundImage: '' }}
  >
    <header className="major">
      <h3>{features && features.includes('stars') ? <Stars /> : title}</h3>
      <p>{content}</p>
    </header>
  </article>
);

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
      edges,
    },
    file: {
      childImageSharp: {
        fixed,
      },
    },
  }
}) => {
  const products = edges.map(
    (e) => e.node,
  );

  return (
    <div>
      <Header
        title={title}
        description={description}
      />
      <ul>
        {edges.map(({ 
          node: {
            frontmatter: {
              title,
              path,
            },
          },
        }) => (
          <div key={path}>
            <h3>{title}</h3>
            <Link to={path}>read more</Link>
          </div>
        ))}
      </ul>
      <Banner title={title} subtitle={description} />

      <div id="main">
        <Img fixed={fixed} />
        <section id="one" className="tiles">
          {homePageBoxes.map((props, index) => <Article
            {...props}
            key={index}
            index={index}
          />)}
        </section>
        <Content />
        <Products products={products} />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;

export const query = graphql`
  query HomePageQuery {
    file(relativePath: { eq: "wroclawski-bazar-smakoszy.jpg" }) {
      name
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
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
          }
        }
      }
    }
  }
`;
