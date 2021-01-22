const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const estatePageTemplate = path.resolve('./src/templates/EstatePageTemplate.js')
  const res = await graphql(`
    query {
      allContentfulNieruchomosc {
        edges {
          node {
            id
            miasto
            ulica
          }
        }
      }
    }
  `)

  res.data.allContentfulNieruchomosc.edges.forEach(edge => {
    createPage({
      component: estatePageTemplate, // Path to the component
      path: `/nieruchomosc/${edge.node.id}/${edge.node.miasto}/${edge.node.ulica}`, // Path where should someone access the page
      context: {
        // Creates arguments that can be queried in graphql
        id: edge.node.id,
      },
    })
  })
}
