import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { css } from '@emotion/core'
import { bpMaxSM, bpMaxMD } from '../utils/breakpoints'
import { useTheme } from '../../config/theme'

const PostDetails = ({ post }) => {
  const theme = useTheme()

  return (
    <article
      css={css`
        background: ${theme.colors.card_bg};
        box-shadow: ${theme.colors.card_shadow};
        border-radius: 0.2rem;
        flex-basis: calc(99.9% * 3 / 4 - 2rem);
        max-width: calc(99.9% * 3 / 4 - 2rem);
        width: calc(99.9% * 3 / 4 - 2rem);
        ${bpMaxMD} {
          flex-basis: 100%;
          max-width: 100%;
          width: 100%;
        }
        ${bpMaxSM} {
          flex-basis: 100%;
          max-width: 100%;
          width: 100%;
        }
        h1,
        h2,
        h3,
        h4,
        ul,
        p {
          padding: 0rem 2rem;
        }
      `}
    >
      {post.frontmatter.banner && (
        <Img fluid={post.frontmatter.banner.childImageSharp.fluid} alt={post.frontmatter.title} />
      )}
      <h1
        css={css`
          margin-top: 1rem;
        `}
      >
        {post.frontmatter.title}
      </h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  )
}

export default PostDetails

PostDetails.propTypes = {
  post: PropTypes.shape({
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }).isRequired,
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      banner: PropTypes.object,
    }).isRequired,
    html: PropTypes.string,
  }).isRequired,
}
