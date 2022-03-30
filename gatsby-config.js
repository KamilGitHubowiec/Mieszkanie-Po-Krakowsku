module.exports = {
  siteMetadata: {
    title: 'Mieszkanie Po Krakowsku',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    `gatsby-plugin-sharp`,
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Roboto: 100, 300 400, 500, 700, 900`, `Lato: 100, 300 400, 700, 900`],
      }
    }
  ]
}
