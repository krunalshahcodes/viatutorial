const _ = require(`lodash`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const moment = require(`moment`)

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
  }
}
