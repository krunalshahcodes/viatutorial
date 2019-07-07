import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import { css } from '@emotion/core'
import { bpMaxMD } from '../utils/breakpoints'
import { Layout, Container, SEO, PostMeta, Tags, PrevNext } from '../components'

const Post = ({ data, location, pageContext }) => {
  const post = data.mdx

  return (
    <Layout pathname={location.pathname} customSEO>
      <SEO postNode={post} pathname={location.pathname} article />
      <Container>
        <div
          css={css`
            display: flex;
            ${bpMaxMD} {
              flex-direction: column;
            }
          `}
        >
          <article
            css={css`
              flex: 0 70%;
              ${bpMaxMD} {
                flex: 1;
              }
            `}
          >
            <h1
              css={css`
                ${bpMaxMD} {
                  font-size: 1.7rem;
                  font-weight: 900;
                }
              `}
            >
              {post.frontmatter.title}
            </h1>
            <PostMeta author={post.frontmatter.author} date={post.frontmatter.date} />
            {post.frontmatter.banner && (
              <Img
                css={css`
                  margin-bottom: 1rem;
                `}
                fluid={post.frontmatter.banner.childImageSharp.fluid}
                alt={post.frontmatter.title}
              />
            )}
            <MDXRenderer>{post.code.body}</MDXRenderer>
            <Tags tags={post.frontmatter.tags} />
            <PrevNext pageContext={pageContext} />
          </article>
        </div>
      </Container>
    </Layout>
  )
}

export default Post

Post.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.shape({
      code: PropTypes.object.isRequired,
      fields: PropTypes.shape({
        slug: PropTypes.string.isRequired,
      }).isRequired,
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        banner: PropTypes.object,
        date: PropTypes.string,
        tags: PropTypes.array,
        author: PropTypes.shape({
          id: PropTypes.string.isRequired,
          avatar: PropTypes.object.isRequired,
          fields: PropTypes.shape({
            slug: PropTypes.string.isRequired,
          }).isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      tableOfContents
      code {
        body
      }
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
        author {
          id
          bio
          fields {
            slug
          }
          avatar {
            childImageSharp {
              fixed(
                width: 50
                height: 50
                quality: 80
                traceSVG: { turdSize: 10, background: "#f6f2f8", color: "#e0d6eb" }
              ) {
                ...GatsbyImageSharpFixed_tracedSVG
              }
            }
          }
        }
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
