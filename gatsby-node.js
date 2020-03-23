const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

async function createPages({ graphql, actions }) {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.tsx`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}

function onCreateNode({ node, getNode, actions }) {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const markdownNode = getNode(node.parent)

    if (markdownNode.sourceInstanceName == `blogs`) {
      const slug = `/blogs/${markdownNode.name}/`

      createNodeField({
        node,
        name: `slug`,
        value: slug,
      })
    }
  }
}

module.exports = {
  createPages,
  onCreateNode,
}
