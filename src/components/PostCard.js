import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
import { useTheme } from '../../config/theme'
import { bpMaxSM, bpMaxMD } from '../utils/breakpoints'

const PostCard = ({ post }) => {
  const theme = useTheme()

  return (
    <article
      css={css`
        margin-bottom: 2rem;
        border-radius: 0.2rem;
        flex-basis: calc(99.9% * 1 / 3 - 2rem);
        max-width: calc(99.9% * 1 / 3 - 2rem);
        width: calc(99.9% * 1 / 3 - 2rem);
        background: ${theme.colors.card_bg};
        box-shadow: ${theme.colors.card_shadow};
        ${bpMaxMD} {
          flex-basis: calc(99.9% * 1 / 2 - 1rem);
          max-width: calc(99.9% * 1 / 2 - 1rem);
          width: calc(99.9% * 1 / 2 - 1rem);
        }
        ${bpMaxSM} {
          flex-basis: 100%;
          max-width: 100%;
          width: 100%;
        }
      `}
    >
      <Link
        to={post.fields.slug}
        css={css`
          padding: 1rem;
          display: block;
        `}
      >
        <h3
          css={css`
            font-size: 1.25rem;
            margin-bottom: 0.5rem;
            color: ${theme.colors.card_title};
          `}
        >
          {post.frontmatter.title}
        </h3>
        <p
          css={css`
            color: ${theme.colors.body_text};
          `}
        >
          {post.frontmatter.description}
        </p>
      </Link>
    </article>
  )
}

export default PostCard

PostCard.propTypes = {
  post: PropTypes.shape({
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }).isRequired,
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
    }).isRequired,
  }).isRequired,
}
