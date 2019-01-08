import React from 'react';
import { graphql, Link } from 'gatsby';

import Header from '../components/Header';

const Layout = ({ 
  data: { 
    site: { 
      siteMetadata: {
        title,
        description,
      },
    },
    allMarkdownRemark: {
      edges,
    },
  }
}) => (
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
  </div>
);

export default Layout;

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
        description
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
