const path = require(`path`)

const GATSBY_FILE_SYSTEM_NAMES = {
  blogs: "blogs",
  customPages: "custom-pages",
  images: "images",
  pages: "pages",
}

async function createPages({ graphql, actions, getNode }) {
  const { createPage } = actions
  const {
    data: {
      allMarkdownRemark: { edges: allMarkdownRemarkNodes },
    },
  } = await graphql(`
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

  const {
    data: {
      allFile: { edges: allCustomPagesNodes },
    },
  } = await graphql(`
    query allCustomPages {
      allFile(filter: { sourceInstanceName: { eq: "custom-pages" } }) {
        edges {
          node {
            name
          }
        }
      }
    }
  `)

  allMarkdownRemarkNodes.forEach(({ node }) => {
    const {
      fields: { slug },
      parent: { id: parentId },
    } = node
    const markdownNode = getNode(parentId)
    const { sourceInstanceName } = markdownNode

    switch (sourceInstanceName) {
      case GATSBY_FILE_SYSTEM_NAMES.blogs:
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

  allCustomPagesNodes.forEach(({ node }) => {
    const { name } = node
    switch (name) {
      case `blog`:
        const limit = 10

        createPage({
          path: `/${name}`,
          component: path.resolve(`./src/custom-pages/${name}.tsx`),
          context: {
            limit: limit,
          },
        })
        break
      default:
        createPage({
          path: `/${name}`,
          component: path.resolve(`./src/custom-pages/${name}.tsx`),
        })
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

    let slug, sourceInstanceNameValue
    switch (sourceInstanceName) {
      case GATSBY_FILE_SYSTEM_NAMES.blogs:
        slug = `/blogs/${markdownNode.name}/`
        sourceInstanceNameValue = GATSBY_FILE_SYSTEM_NAMES.blogs
        break
      default:
        break
    }

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
    createNodeField({
      node,
      name: `sourceInstanceName`,
      value: sourceInstanceNameValue,
    })
  }
}

module.exports = {
  createPages,
  onCreateNode,
}
