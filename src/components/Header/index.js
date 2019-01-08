import React, { Fragment } from 'react';
import { StaticQuery, graphql } from 'gatsby';

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            description
          } 
        }
      }
    `}
    render={({
      site: {
        siteMetadata: {
          title,
          description,
        },
      },
    }) => (
      <Fragment>
        <h1>
          {title}
        </h1>
        <p>{description}</p>
      </Fragment>
    )}
  />
);

export default Header;
