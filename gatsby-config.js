module.exports = {
  siteMetadata: {
    title: 'Mieszkanie Po Krakowsku',
    author: 'Kamil Góralewicz'
    
  },
  plugins: [
    'gatsby-plugin-react-helmer',
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
    }
  ]
}

  // {
  //   resolve: 'gatsby-source-filesystem',
  //   options: {
  //     name: 'src',
  //     path: `${__dirname}/src/`
  //   }
  // },
  // 'gatsby-plugin-sharp',
  // {
  //   resolve: 'gatsby-transformer-remark',
  //   options: {
  //     plugins: [
  //       'gatsby-remark-relative-images',
  //       {
  //         resolve: 'gatsby-remark-images',
  //         options: {
  //           linkImagesToOriginal: false
  //         }
  //       }
  //     ]
  //   }
  // }