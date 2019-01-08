module.exports = {
  siteMetadata: {
    title: 'Chef Mushrooms',
    description: 'Chef Mushrooms description',
  },
  plugins: [  
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'mushrooms',
        path: `${__dirname}/src/mushrooms`,
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
