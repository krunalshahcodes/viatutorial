/* eslint-disable no-shadow */
const path = require(`path`)
const _ = require(`lodash`)
const slash = require(`slash`)
const slugify = require(`slugify`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const moment = require(`moment`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve(`src/templates/post.js`)
    const coursesListTemplate = path.resolve(`src/templates/post.js`)
    const tutorialsListTemplate = path.resolve(`src/templates/post.js`)
    const tagTemplate = path.resolve(`src/templates/post.js`)
    const authorPageTemplate = path.resolve(`src/templates/post.js`)

    graphql(`
      query {
        allMdx(
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
        allAuthorYaml {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        return reject(result.errors)
      }

      const allPosts = _.filter(result.data.allMdx.edges, edge => {
        const slug = _.get(edge, `node.fields.slug`)
        const draft = _.get(edge, `node.frontmatter.draft`)
        if (!slug) return undefined
        if (_.includes(slug, `/courses/`) && !draft) {
          return edge
        }
        if (_.includes(slug, `/tutorials/`) && !draft) {
          return edge
        }
        return undefined
      })

      const allRealeasedPosts = allPosts.filter(post => _.get(post, `node.fields.released`))

      const releasedCourses = allRealeasedPosts.filter(post => {
        const slug = _.get(post, `node.fields.slug`)
        if (_.includes(slug, `/courses/`)) {
          return post
        }
        return undefined
      })

      const releasedTutorials = allRealeasedPosts.filter(post => {
        const slug = _.get(post, `node.fields.slug`)
        if (_.includes(slug, `/tutorials/`)) {
          return post
        }
        return undefined
      })

      const postsPerPage = 8

      // Create cources-list pages.
      const numCoursesPages = Math.ceil(releasedCourses.length / postsPerPage)
      Array.from({
        length: numCoursesPages,
      }).forEach((_, i) => {
        createPage({
          path: i === 0 ? `/courses` : `/courses/page/${i + 1}`,
          component: slash(coursesListTemplate),
          context: {
            limit: postsPerPage,
            skip: i * postsPerPage,
            numCoursesPages,
            currentPage: i + 1,
          },
        })
      })

      // Create tutorial-list pages.
      const numTutorialPages = Math.ceil(releasedTutorials.length / postsPerPage)
      Array.from({
        length: numTutorialPages,
      }).forEach((_, i) => {
        createPage({
          path: i === 0 ? `/tutorials` : `/tutorials/page/${i + 1}`,
          component: slash(tutorialsListTemplate),
          context: {
            limit: postsPerPage,
            skip: i * postsPerPage,
            numTutorialPages,
            currentPage: i + 1,
          },
        })
      })

      // Create snippets-post pages.
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

        const makeSlugTag = tag => _.kebabCase(tag.toLowerCase())

        const tagGroups = _(allRealeasedPosts)
          .map(post => _.get(post, `node.frontmatter.tags`))
          .filter()
          .flatten()
          .uniq()
          .groupBy(makeSlugTag)

        tagGroups.forEach((tags, tagSlug) => {
          createPage({
            path: `/tags/${tagSlug}/`,
            component: tagTemplate,
            context: {
              tags,
            },
          })
        })
      })

      // Create pages for contributpors
      result.data.allAuthorYaml.edges.forEach(edge => {
        createPage({
          path: `${edge.node.fields.slug}`,
          component: slash(authorPageTemplate),
          context: {
            slug: edge.node.fields.slug,
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
  if (node.internal.type === `Mdx`) {
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
  } else if (node.internal.type === `AuthorYaml`) {
    slug = `/authors/${slugify(node.id, {
      lower: true,
    })}/`
    createNodeField({ name: `slug`, node, value: slug })
  }
}
