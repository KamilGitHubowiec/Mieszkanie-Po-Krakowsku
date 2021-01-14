module.exports = {
  siteMetadata: {
    title: 'Mieszkanie Po Krakowsku',
    author: 'Kamil Góralewicz'
    
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN  
      }
    },
    'gatsby-transformer-sharp',
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-plugin-sass'
  ]
}
