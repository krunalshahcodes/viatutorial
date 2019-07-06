import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { bpMaxSM } from '../utils/breakpoints'

const NavLink = styled(Link)`
  font-size: 0.872rem;
  padding: 1rem;
  display: block;
  color: #484848;
  &:hover,
  &:focus,
  &.active {
    color: #ff5a5f;
  }
`

const Navigation = () => (
  <nav
    css={css`
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0rem 1rem;
      border-bottom: 1px solid #e4e4e4;
      ${bpMaxSM} {
        padding: 1rem;
      }
    `}
  >
    <Link
      to="/"
      css={css`
        font-weight: 700;
      `}
    >
      Via Tutorial
    </Link>
    <div
      css={css`
        display: flex;
        align-items: center;
        flex: 1;
        justify-content: flex-end;
        ${bpMaxSM} {
          display: none;
        }
      `}
    >
      <NavLink to="/" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/tutorials" activeClassName="active">
        Tutorials
      </NavLink>
      <NavLink to="/tags" activeClassName="active">
        Tags
      </NavLink>
    </div>
  </nav>
)

export default Navigation
