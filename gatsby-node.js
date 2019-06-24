/* eslint-disable no-shadow */
const path = require(`path`)
const slash = require(`slash`)
const _ = require(`lodash`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const moment = require(`moment`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve(`src/templates/post.js`)
    const postsList = path.resolve(`src/templates/posts-list.js`)

    graphql(`
      query {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date, fields___slug] }
          limit: 10000
          filter: { fileAbsolutePath: { ne: null } }
        ) {
          edges {
            node {
              fields {
                slug
                released
              }
              frontmatter {
                title
                tags
              }
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        return reject(result.errors)
      }

      const allPosts = _.filter(result.data.allMarkdownRemark.edges, edge => {
        const slug = _.get(edge, `node.fields.slug`)
        const draft = _.get(edge, `node.frontmatter.draft`)
        if (!slug) return undefined
        if (_.includes(slug, `/`) && !draft) {
          return edge
        }
        return undefined
      })

      const allRealeasedPosts = allPosts.filter(post => _.get(post, `node.fields.released`))

      const postsPerPage = 8
      const numPages = Math.ceil(allRealeasedPosts.length / postsPerPage)

      // Create list pages.
      Array.from({
        length: numPages,
      }).forEach((_, i) => {
        createPage({
          path: i === 0 ? `/` : `/page/${i + 1}`,
          component: slash(postsList),
          context: {
            limit: postsPerPage,
            skip: i * postsPerPage,
            numPages,
            currentPage: i + 1,
          },
        })
      })

      // Create post pages.
      allPosts.forEach((edge, index) => {
        let next = index === 0 ? null : allPosts[index - 1].node
        if (next && !_.get(next, `fields.released`)) next = null

        const prev = index === allPosts.length - 1 ? null : allPosts[index + 1].node

        createPage({
          path: `${edge.node.fields.slug}`, // required
          component: slash(postTemplate),
          context: {
            slug: edge.node.fields.slug,
            prev,
            next,
          },
        })
      })
      return resolve()
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  let slug
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    // Create Field Slug
    slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      name: 'slug',
      node,
      value: slug,
    })

    // Create Field Released
    let released = false
    const date = _.get(node, `frontmatter.date`)
    if (date) {
      released = moment.utc().isSameOrAfter(moment.utc(date))
    }
    createNodeField({ node, name: `released`, value: released })

    // Create Field Github Edit Link
    createNodeField({
      name: 'editLink',
      node,
      value: `https://github.com/imkrunal/viatutorial/edit/master${node.fileAbsolutePath.replace(__dirname, '')}`,
    })
  }
}
