const path = require(`path`)

const SOURCE_FILE_SYSTEM_NAMES = {
  blogs: "blogs",
  pages: "pages",
}

async function createPages({ graphql, actions, getNode }) {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            parent {
              id
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const {
      fields: { slug },
      parent: { id: parentId },
    } = node
    const markdownNode = getNode(parentId)
    const { sourceInstanceName } = markdownNode

    switch (sourceInstanceName) {
      case SOURCE_FILE_SYSTEM_NAMES.blogs:
        createPage({
          path: slug,
          component: path.resolve(`./src/templates/blog-post.tsx`),
          context: {
            slug: slug,
          },
        })
        break
      default:
        break
    }
  })
}

function onCreateNode({ node, getNode, actions }) {
  const {
    internal: { type },
    parent: parentId,
  } = node
  const { createNodeField } = actions

  if (type === `MarkdownRemark`) {
    const markdownNode = getNode(parentId)
    const { sourceInstanceName } = markdownNode

    switch (sourceInstanceName) {
      case SOURCE_FILE_SYSTEM_NAMES.blogs:
        const slug = `/blogs/${markdownNode.name}/`

        createNodeField({
          node,
          name: `slug`,
          value: slug,
        })
        break
      default:
        break
    }
  }
}

module.exports = {
  createPages,
  onCreateNode,
}
