import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { css } from '@emotion/core'

const PrevNext = ({ pageContext }) => {
  const { next, prev } = pageContext
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 2rem;
      `}
    >
      <div
        css={css`
          flex: 1;
          text-align: left;
        `}
      >
        {prev && (
          <Link to={prev.fields.slug}>
            <p
              css={css`
                margin: 0;
              `}
            >
              Previous
            </p>
            {prev.frontmatter.title}
          </Link>
        )}
      </div>
      <div
        css={css`
          flex: 1;
          text-align: right;
        `}
      >
        {next && (
          <Link to={next.fields.slug}>
            <p
              css={css`
                margin: 0;
              `}
            >
              Next
            </p>
            {next.frontmatter.title}
          </Link>
        )}
      </div>
    </div>
  )
}

export default PrevNext

PrevNext.propTypes = {
  pageContext: PropTypes.object.isRequired,
}
