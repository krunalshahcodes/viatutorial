import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'

import { Layout, Container, PostDetails } from '../components'

const Post = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const { prev, next } = pageContext

  return (
    <Layout pathname={location.pathname}>
      <Container>
        <div
          css={css`
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
          `}
        >
          <PostDetails post={post} prev={prev} next={next} />
        </div>
      </Container>
    </Layout>
  )
}

export default Post

Post.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      fields: PropTypes.shape({
        slug: PropTypes.string.isRequired,
      }).isRequired,
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }).isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      tableOfContents
      html
      wordCount {
        words
      }
      fields {
        slug
      }
      frontmatter {
        title
        date
        description
        tags
        banner {
          childImageSharp {
            fluid(quality: 80) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
