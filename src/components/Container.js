import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import { bpMaxSM } from '../utils/breakpoints'

const Container = ({ maxWidth, noHorizontalPadding, noVerticalPadding, children }) => (
  <div
    css={css`
      width: 100%;
      margin: 0 auto;
      max-width: ${maxWidth + (noHorizontalPadding ? 0 : 80)}px;
      padding: ${noVerticalPadding ? 0 : '40'}px ${noHorizontalPadding ? 0 : '40'}px;
      ${bpMaxSM} {
        padding: ${noVerticalPadding ? 0 : '20'}px ${noHorizontalPadding ? 0 : '20'}px;
      }
    `}
  >
    {children}
  </div>
)

export default Container

Container.propTypes = {
  maxWidth: PropTypes.number,
  noHorizontalPadding: PropTypes.bool,
  noVerticalPadding: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
}

Container.defaultProps = {
  maxWidth: 1280,
  noVerticalPadding: false,
  noHorizontalPadding: false,
}
