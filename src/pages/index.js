import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import { bpMaxMD } from '../utils/breakpoints'
import { Layout, Container, PostsList, Sidebar } from '../components'

const Index = ({ data, location }) => {
  const posts = data.allMdx.edges
  return (
    <Layout pathname={location.pathname}>
      <Container>
        <h2>Latest Stories</h2>
        <div
          css={css`
            display: flex;
            flex-direction: row;
            ${bpMaxMD} {
              flex-direction: column;
            }
          `}
        >
          <div
            css={css`
              flex: 0 70%;
            `}
          >
            {posts.map(({ node: post }) => (
              <PostsList key={post.id} post={post} />
            ))}
          </div>
          <Sidebar />
        </div>
      </Container>
    </Layout>
  )
}

export default Index

Index.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.shape({
    allMdx: PropTypes.object.isRequired,
  }).isRequired,
}

export const pageQuery = graphql`
  query IndexQuery {
    allMdx(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { released: { eq: true } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 190)
          id
          fields {
            slug
            released
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
            tags
            banner {
              childImageSharp {
                fluid(quality: 80) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            author {
              id
              fields {
                slug
              }
              avatar {
                childImageSharp {
                  fixed(height: 32, width: 32) {
                    ...GatsbyImageSharpFixed_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
