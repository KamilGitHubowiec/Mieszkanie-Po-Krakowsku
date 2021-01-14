const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions 
  const blogPageTemplate = path.resolve('./src/templates/BlogPageTemplate.js')
  const res = await graphql(`
    query {
      allContentfulNieruchomosc {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  res.data.allContentfulNieruchomosc.edges.forEach((edge) => {
    createPage({
      component: blogPageTemplate, // Path to the component
      path: `/nieruchomosc/${edge.node.slug}`, // Path where should someone access the page
      context: { // It gives access to the additional data
        slug: edge.node.slug
      }
    })
  })
}

// + '/' + edge.node.miasto + '/' + edge.node.ulica