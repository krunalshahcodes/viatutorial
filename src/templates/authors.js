import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { css } from '@emotion/core'
import { bpMaxMD } from '../utils/breakpoints'
import { Layout, Container, PostsList } from '../components'

const Authors = ({ data, location }) => {
  const author = data.authorYaml
  const post = data.allMdx.edges

  return (
    <Layout pathname={location.pathname}>
      <Container>
        <div
          css={css`
            display: flex;
            align-items: center;
            margin-bottom: 2rem;
            ${bpMaxMD} {
              flex-direction: column;
              margin-bottom: 0rem;
            }
          `}
        >
          <Img
            css={css`
              border-radius: 50%;
              margin-right: 1rem;
              margin-left: 1rem;
            `}
            fixed={author.avatar.childImageSharp.fixed}
            alt={author.id}
          />
          <div
            css={css`
              ${bpMaxMD} {
                text-align: center;
              }
            `}
          >
            <h1
              css={css`
                ${bpMaxMD} {
                  font-size: 1.5rem;
                }
              `}
            >
              {author.id}
            </h1>
            {author.bio && <p>{author.bio}</p>}
          </div>
        </div>

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
            {post.map(({ node }) => (
              <PostsList key={node.id} post={node} />
            ))}
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default Authors

Authors.propTypes = {
  data: PropTypes.shape({
    authorYaml: PropTypes.shape({
      id: PropTypes.string.isRequired,
      avatar: PropTypes.object.isRequired,
      bio: PropTypes.string,
    }).isRequired,
    allMdx: PropTypes.object.isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        siteTitle
        siteShortName
      }
    }
    authorYaml(fields: { slug: { eq: $slug } }) {
      id
      bio
      twitter
      avatar {
        childImageSharp {
          fixed(
            width: 150
            height: 150
            quality: 80
            traceSVG: { turdSize: 10, background: "#f6f2f8", color: "#e0d6eb" }
          ) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
      fields {
        slug
      }
    }
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
