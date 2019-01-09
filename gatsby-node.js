const path = require('path');

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const productTemplate = path.resolve('./src/templates/product.js');
    resolve(
      graphql(`{
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                path
              }
            }
          }
        }
      }`).then((result) => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          const path = node.frontmatter.path;
          createPage({
            path,
            component: productTemplate,
            context: {
              pathSlug: path,
            },
          });
        });
      }),
    );
  });
};
