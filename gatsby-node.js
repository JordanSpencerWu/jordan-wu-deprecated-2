const path = require(`path`)

const GATSBY_FILE_SYSTEM_NAMES = {
  blogs: "blogs",
  books: "books",
  customPages: "custom-pages",
  images: "images",
  pages: "pages",
}

const RELATIVE_DIRECTORIES = {
  codeComplete: "2016/code-complete",
  electronicMusicAndSoundDesign: "2020/electronic-music-and-sound-design",
  introToAlgorithms: "2016/introduction-to-algorithms",
  synthSecrets: "2020/synth-secrets",
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

  const {
    data: {
      allMdx: { edges: allMdxNodes },
    },
  } = await graphql(`
    query allMdx {
      allMdx {
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

  allMarkdownRemarkNodes.forEach(({ node }) => {
    const {
      fields: { slug },
      parent: { id: parentId },
    } = node
    const markdownNode = getNode(parentId)
    const { sourceInstanceName, name } = markdownNode

    switch (sourceInstanceName) {
      case GATSBY_FILE_SYSTEM_NAMES.blogs:
        createPage({
          path: slug,
          component: path.resolve(`./src/templates/blog-post/index.tsx`),
          context: {
            slug: slug,
          },
        })
        break
      case GATSBY_FILE_SYSTEM_NAMES.books:
        switch (name) {
          case `code-complete`:
            createPage({
              path: slug,
              component: path.resolve(
                `./src/templates/book-note/code-complete.tsx`
              ),
              context: {
                slug: slug,
              },
            })
            break
          case `introduction-to-algorithms`:
            createPage({
              path: slug,
              component: path.resolve(
                `./src/templates/book-note/introduction-to-algorithms.tsx`
              ),
              context: {
                slug: slug,
              },
            })
            break
          case `electronic-music-and-sound-design`:
            createPage({
              path: slug,
              component: path.resolve(
                `./src/templates/book-note/electronic-music-and-sound-design.tsx`
              ),
              context: {
                slug: slug,
              },
            })
            break
          case `synth-secrets`:
            createPage({
              path: slug,
              component: path.resolve(
                `./src/templates/book-note/synth-secrets.tsx`
              ),
              context: {
                slug: slug,
              },
            })
            break
          default:
            createPage({
              path: slug,
              component: path.resolve(`./src/templates/book-note/index.tsx`),
              context: {
                slug: slug,
              },
            })
            break
        }
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

  allMdxNodes.forEach(({ node }) => {
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
          component: path.resolve(`./src/templates/blog-post/mdx.tsx`),
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
  let slug, sourceInstanceNameValue
  const {
    internal: { type },
    parent: parentId,
  } = node
  const { createNodeField } = actions

  if (type === `MarkdownRemark`) {
    const markdownNode = getNode(parentId)
    const { sourceInstanceName, name, relativeDirectory } = markdownNode

    switch (sourceInstanceName) {
      case GATSBY_FILE_SYSTEM_NAMES.blogs:
        slug = `/blogs/${name}/`
        sourceInstanceNameValue = GATSBY_FILE_SYSTEM_NAMES.blogs
        break
      case GATSBY_FILE_SYSTEM_NAMES.books:
        slug = getBookSlug(name, relativeDirectory)
        sourceInstanceNameValue = GATSBY_FILE_SYSTEM_NAMES.books
        break
      default:
        break
    }
  }

  if (type === `Mdx`) {
    const mdxNode = getNode(parentId)
    const { sourceInstanceName, name } = mdxNode

    switch (sourceInstanceName) {
      case GATSBY_FILE_SYSTEM_NAMES.blogs:
        slug = `/blogs/${name}/`
        sourceInstanceNameValue = GATSBY_FILE_SYSTEM_NAMES.blogs
        break
      default:
        break
    }
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

function getBookSlug(name, relativeDirectory) {
  switch (relativeDirectory) {
    case RELATIVE_DIRECTORIES.codeComplete:
      return `/books/code-complete/${name}/`
    case RELATIVE_DIRECTORIES.introToAlgorithms:
      return `/books/introduction-to-algorithms/${name}/`
    case RELATIVE_DIRECTORIES.electronicMusicAndSoundDesign:
      return `/books/electronic-music-and-sound-design/${name}/`
    case RELATIVE_DIRECTORIES.synthSecrets:
      return `/books/synth-secrets/${name}/`
    default:
      return `/books/${name}/`
  }
}

module.exports = {
  createPages,
  onCreateNode,
}
