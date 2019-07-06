import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import { bpMaxSM, bpMaxMD } from '../utils/breakpoints'

const Container = ({ maxWidth, noHorizontalPadding, noVerticalPadding, children, ...restProps }) => (
  <div
    css={css`
      width: 100%;
      margin: 0 auto;
      max-width: ${maxWidth + (noHorizontalPadding ? 0 : 64)}px;
      padding: ${noVerticalPadding ? 0 : '32'}px ${noHorizontalPadding ? 0 : '32'}px;
      ${bpMaxSM} {
        padding: ${noVerticalPadding ? 0 : '16'}px ${noHorizontalPadding ? 0 : '16'}px;
      }
      ${bpMaxMD} {
        margin-bottom: 80px;
      }
    `}
    {...restProps}
  >
    {children}
  </div>
)

export default Container

Container.defaultProps = {
  maxWidth: 1280,
  noHorizontalPadding: false,
  noVerticalPadding: false,
}

Container.propTypes = {
  maxWidth: PropTypes.number,
  noHorizontalPadding: PropTypes.bool,
  noVerticalPadding: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
}
