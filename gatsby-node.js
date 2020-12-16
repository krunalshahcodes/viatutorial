/* eslint-disable array-callback-return */
const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const { data, errors } = await graphql(`
    query {
      tutorials: allMdx(
        filter: { fileAbsolutePath: { regex: "//tutorials//" } }
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
            fileAbsolutePath
          }
        }
      }
    }
  `)

  if (errors) {
    return reporter.panicOnBuild(new Error(errors))
  }

  const { tutorials } = data

  const tutorialTemplate = path.resolve(`src/templates/tutorial.js`)
  tutorials.edges.map(({ node }) => {
    const slug = node.frontmatter.slug
    createPage({
      path: path.join('tutorials', slug),
      component: tutorialTemplate,
      context: {
        slug: slug,
      },
    })
  })
}
