module.exports = {
  siteMetadata: {
    title: 'Chef Mushrooms',
    description: 'Chef Mushrooms description',
  },
  plugins: [
    'gatsby-transformer-remark',    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
  ],
}
