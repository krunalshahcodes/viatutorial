import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import { bpMaxMD } from '../utils/breakpoints'
import { Layout, Container, PostsList } from '../components'
import config from '../../config/website'

const Tags = ({ data, location, pageContext }) => {
  const { tags } = pageContext
  const posts = data.allMdx.edges
  return (
    <Layout pathname={location.pathname}>
      <Helmet title={`${tags} - ${config.siteShortName}`} />
      <Container>
        <h1
          css={css`
            font-size: 1.7rem;
          `}
        >
          {tags}
        </h1>
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
        </div>
      </Container>
    </Layout>
  )
}

export default Tags

Tags.propTypes = {
  pageContext: PropTypes.object.isRequired,
  data: PropTypes.shape({
    allMdx: PropTypes.object.isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query($tags: [String]) {
    site {
      siteMetadata {
        siteTitle
        siteShortName
      }
    }
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date, fields___slug], order: DESC }
      filter: { frontmatter: { tags: { in: $tags } }, fields: { released: { eq: true } } }
    ) {
      totalCount
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
