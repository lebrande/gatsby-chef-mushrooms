module.exports = {
  siteMetadata: {
    siteUrl: 'https://dobregrzybki.pl',
    title: 'Chef Mushrooms - Premium Products',
    description: 'Współpracujemy z profesjonalistami z branży gastronomicznej. Wszystkie produkty pochodzą z naszych lokalnych plantacji grzybów uprawnych.',
    homePageBoxes: [
      {
        title: 'Ocena na Facebooku',
        content: 'Ocena na Facebooku',
        features: ['stars'],
        image: 'other/boczniaki-danie.jpg',
      },
      {
        title: '2297 Obserwujących na Instagramie',
        content: 'Wzbudamy ciekawość',
        image: 'other/risotto-z-boczniakami-krolewskimi.jpg',
      },  
      {
        title: 'Lokalny producent grzybów',
        content: 'Najlepsze produkty na wyciągnięcie ręki.',
        image: 'other/oferta-dla-gastronomii.jpg',
      },
      {
        title: 'Licencjonowany grzyboznawca',
        content: 'Jesteśmy profesjonalistami',
        image: 'other/boczniak-cytrynowy-swiezy.jpg',
      },
      {
        title: '12 Gatunków grzybów uprawnych',
        content: 'Dostępne przez cały rok',
        link: 'products',
        image: 'other/gatunki-grzybow-uprawnych.jpg',
      },
      {
        title: 'Współpracujemy z restauracjami',
        content: 'Zobacz naszą ofertę dla gastronomii',
        link: 'products',
        image: 'other/ramen-z-grzybami.jpg',
      },
    ],
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
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    'gatsby-transformer-remark', 
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
  ],
}
