import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { css } from '@emotion/core'

const PostMeta = ({ author, date }) => (
  <div
    css={css`
      display: flex;
      align-items: center;
      padding: 0.875rem 0rem;
    `}
  >
    <Link
      to={author.fields.slug}
      css={css`
        display: flex;
      `}
    >
      <Img
        css={css`
          border-radius: 50px;
          margin-right: 0.5rem;
          margin-bottom: 0;
        `}
        fixed={author.avatar.childImageSharp.fixed}
        alt={author.id}
      />
    </Link>
    <div>
      <Link
        to={author.fields.slug}
        css={css`
          color: #484848;
          font-size: 0.875rem;
          margin-right: 0.3rem;
          &:hover {
            color: #484848;
          }
        `}
      >
        {author.id}
      </Link>
    </div>
    <p
      css={css`
        font-size: 0.875rem;
      `}
    >
      on {date}
    </p>
  </div>
)

export default PostMeta

PostMeta.propTypes = {
  author: PropTypes.shape({
    id: PropTypes.string.isRequired,
    avatar: PropTypes.object.isRequired,
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  date: PropTypes.string.isRequired,
}
