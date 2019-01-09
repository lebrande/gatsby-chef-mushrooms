module.exports = {
  siteMetadata: {
    title: 'Chef Mushrooms',
    description: 'Chef Mushrooms description',
  },
  plugins: [  
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'products',
        path: `${__dirname}/src/products`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    'gatsby-transformer-remark', 
  ],
}
