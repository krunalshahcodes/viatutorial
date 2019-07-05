import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { css } from '@emotion/core'
import { bpMaxSM } from '../utils/breakpoints'
import PostMeta from './PostMeta'

const PostsList = ({ post }) => (
  <article
    css={css`
      display: flex;
      flex-direction: row;
      align-items: center;
      margin: 2rem 0rem;
      background: #ffffff;
      border: 1px solid rgba(0, 0, 0, 0.05);
      box-shadow: 0 2px 4px rgba(3, 27, 78, 0.06);
      border-radius: 0.2rem;
      ${bpMaxSM} {
        flex-direction: column;
      }
    `}
  >
    <div
      css={css`
        display: flex;
        flex-direction: column;
        padding: 1rem;
        flex: 1;
      `}
    >
      <Link to={post.fields.slug}>
        <h3
          css={css`
            color: #484848;
            margin-bottom: 1rem;
          `}
        >
          {post.frontmatter.title}
        </h3>
      </Link>
      <p>{post.frontmatter.description ? post.frontmatter.description : post.excerpt}</p>
      <PostMeta author={post.frontmatter.author} date={post.frontmatter.date} />
      <Link to={post.fields.slug}>Read More</Link>
    </div>
    {post.frontmatter.banner && (
      <Link
        to={post.fields.slug}
        css={css`
          flex: 0 40%;
          margin: 1rem;
          border-radius: 0.2rem;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          ${bpMaxSM} {
            display: none;
          }
        `}
      >
        <Img fluid={post.frontmatter.banner.childImageSharp.fluid} alt={post.frontmatter.title} />
      </Link>
    )}
  </article>
)

export default PostsList

PostsList.propTypes = {
  post: PropTypes.shape({
    excerpt: PropTypes.string.isRequired,
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }).isRequired,
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      banner: PropTypes.object,
      date: PropTypes.string,
      author: PropTypes.shape({
        id: PropTypes.string.isRequired,
        avatar: PropTypes.object.isRequired,
        fields: PropTypes.shape({
          slug: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}
