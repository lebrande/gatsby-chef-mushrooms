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
  },
}) => (
  <div>
    <h1>{title}</h1>
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </div>
);

export default Template;

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
