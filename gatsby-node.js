const path = require('path');
const compose = require('lodash/fp/compose');
const _findFp = require('lodash/fp/find');
const _getFp = require('lodash/fp/get');

const getImagePath = (relativePath) => compose(
  _getFp('node.relativePath'),
  _findFp({ node: { relativePath } }),
  _getFp('data.images.edges'),
);

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const productTemplate = path.resolve('./src/templates/product/product.js');
    resolve(
      graphql(`{
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                path
                image
              }
            }
          }
        }
        images: allFile(filter: { relativePath: { regex: "/jpg$/" } }) {
          edges {
            node {
              relativePath
            }
          }
        }
      }`).then((result) => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          const imagePath = getImagePath(node.frontmatter.image)(result);
          const path = node.frontmatter.path;

          createPage({
            path,
            component: productTemplate,
            context: {
              pathSlug: path,
              imagePath,
            },
          });
        });
      }),
    );
  });
};
