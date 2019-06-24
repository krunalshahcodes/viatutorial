import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import { Layout, Container, PostCard } from '../components'

const PostsList = ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout pathname={location.pathname}>
      <Container>
        <h1>All Tutorials</h1>
        <div
          css={css`
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
          `}
        >
          {posts.map(({ node }) => (
            <PostCard key={node.id} post={node} />
          ))}
        </div>
      </Container>
    </Layout>
  )
}

export default PostsList

PostsList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.object.isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query PostsListQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { released: { eq: true } } }
      limit: 10
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            description
            tags
          }
        }
      }
    }
  }
`
