import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import config from '../../config/website'
import { bpMaxMD } from '../utils/breakpoints'
import { Layout, Container, PostsList } from '../components'
import Sidebar from './sidebar'

const Tutorials = ({ data, location }) => {
  const posts = data.allMdx.edges
  return (
    <Layout pathname={location.pathname}>
      <Helmet title={`Tutorials - ${config.siteShortName}`} />
      <Container>
        <h1
          css={css`
            font-size: 1.7rem;
          `}
        >
          Tutorials
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
          <Sidebar />
        </div>
      </Container>
    </Layout>
  )
}

export default Tutorials

Tutorials.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.object.isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query TutorialsQuery($skip: Int!, $limit: Int!) {
    allMdx(
      limit: $limit
      skip: $skip
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { released: { eq: true } }, fileAbsolutePath: { regex: "/content.tutorials/" } }
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
