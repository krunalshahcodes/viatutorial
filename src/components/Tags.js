import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'
import { css } from '@emotion/core'

const Tags = ({ tags }) => {
  if (!tags) return null

  const tagLinks = tags.map(tag => (
    <Link
      key={tag}
      to={`/tags/${kebabCase(tag)}/`}
      css={css`
        background: #484848;
        margin: 0.5rem 0.5rem 0.5rem 0rem;
        padding: 0.3rem 0.875rem;
        border-radius: 0.2rem;
        color: #ffffff;
        &:hover,
        &:focus {
          color: #ffffff;
        }
      `}
    >
      {tag}
    </Link>
  ))

  return tagLinks
}

export default Tags

Tags.propTypes = {
  tags: PropTypes.array.isRequired,
}
