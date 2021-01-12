module.exports = {
  siteMetadata: {
    title: 'Mieszkanie Po Krakowsku',
    author: 'Kamil Góralewicz'
    
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark'
  ]
}
