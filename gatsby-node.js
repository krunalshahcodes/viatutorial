const config = require('./src/common/config')
const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')

const createPosts = (createPage, edges) => {
  edges.forEach(({ node }, i) => {
    const prev = i === 0 ? null : edges[i - 1].node
    const next = i === edges.length - 1 ? null : edges[i + 1].node
    const pagePath = node.fields.slug
    console.table(node)
    createPage({
      path: pagePath,
      component: path.resolve(`./src/templates/tutorials.js`),
      context: {
        id: node.id,
        slug: node.slug,
        prev,
        next,
      },
    })
  })
}

const createTutorialPages = ({ data, actions }) => {
  if (!data.edges.length) {
    throw new Error('There are no posts!')
  }

  const { edges } = data
  const { createPage } = actions
  createPosts(createPage, edges)
  return null
}

const createPages = async ({ graphql, actions }) => {
  const { data, errors } = await graphql(
    `
      fragment PostDetails on Mdx {
        fileAbsolutePath
        id
        parent {
          ... on File {
            name
            sourceInstanceName
          }
        }
        excerpt(pruneLength: 250)
        fields {
          title
          slug
          description
          date
        }
      }
      query {
        tutorials: allMdx(
          filter: {
            frontmatter: { published: { ne: false } }
            fileAbsolutePath: { regex: "//content/tutorials//" }
          }
          sort: { order: DESC, fields: [frontmatter___date] }
        ) {
          edges {
            node {
              ...PostDetails
            }
          }
        }
      }
    `,
  )

  if (errors) {
    return Promise.reject(errors)
  }

  const { tutorials } = data

  createTutorialPages({
    path: '/tutorials',
    data: tutorials,
    actions,
  })
}

const onCreateNode = (...args) => {
  if (args[0].node.internal.type === `Mdx`) {
    onCreateMdxNode(...args)
  }
}

const onCreateMdxNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  const slug = createFilePath({ node, getNode, basePath: `pages` })

  createNodeField({
    name: 'id',
    node,
    value: node.id,
  })

  createNodeField({
    name: 'published',
    node,
    value: node.frontmatter.published,
  })

  createNodeField({
    name: 'title',
    node,
    value: node.frontmatter.title,
  })

  createNodeField({
    name: 'author',
    node,
    value: node.frontmatter.author || 'Krunal Shah',
  })

  createNodeField({
    name: 'description',
    node,
    value: node.frontmatter.description,
  })

  createNodeField({
    name: 'slug',
    node,
    value: slug,
  })

  const productionUrl = new URL(config.siteUrl)
  productionUrl.pathname = slug

  createNodeField({
    name: 'productionUrl',
    node,
    value: productionUrl.toString(),
  })

  createNodeField({
    name: 'date',
    node,
    value: node.frontmatter.date ? node.frontmatter.date.split(' ')[0] : '',
  })

  createNodeField({
    name: 'banner',
    node,
    value: node.frontmatter.banner,
  })

  createNodeField({
    name: 'editLink',
    node,
    value: `https://github.com/imkrunal/viatutorial/edit/master${node.fileAbsolutePath.replace(
      __dirname,
      '',
    )}`,
  })

  createNodeField({
    name: 'historyLink',
    node,
    value: `https://github.com/imkrunal/viatutorial/commits/master${node.fileAbsolutePath.replace(
      __dirname,
      '',
    )}`,
  })
}

module.exports = { createPages, onCreateNode }
