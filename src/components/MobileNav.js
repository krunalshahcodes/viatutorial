import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { bpMaxMD } from '../utils/breakpoints'

const NavLink = styled(Link)`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 0.725rem;
  padding: 0.5rem 2rem;
  display: block;
  color: #484848;
  &:hover,
  &:focus,
  &.active {
    color: #ff5a5f;
    svg {
      fill: #ff5a5f;
    }
  }
  svg {
    fill: #484848;
  }
`

const MobileNav = () => (
  <div
    css={css`
      display: none;
      ${bpMaxMD} {
        display: flex;
        justify-content: space-around;
        position: fixed;
        width: 100%;
        bottom: 0;
        background: #ffffff;
        border-top: 1px solid #e4e4e4;
      }
    `}
  >
    <NavLink to="/" activeClassName="active">
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" viewBox="0 0 24 24">
        <path d="M9,19V13H11L13,13H15V19H18V10.91L12,4.91L6,10.91V19H9M12,2.09L21.91,12H20V21H13V15H11V21H4V12H2.09L12,2.09Z" />
      </svg>
      <div>Home</div>
    </NavLink>
    <NavLink to="/tutorials" activeClassName="active">
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" viewBox="0 0 24 24">
        <path d="M5,3C3.89,3 3,3.89 3,5V19C3,20.11 3.89,21 5,21H19C20.11,21 21,20.11 21,19V5C21,3.89 20.11,3 19,3H5M5,5H19V19H5V5M7,7V9H17V7H7M7,11V13H17V11H7M7,15V17H14V15H7Z" />
      </svg>
      <div>Tutorials</div>
    </NavLink>
    <NavLink to="/tags" activeClassName="active">
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" viewBox="0 0 24 24">
        <path d="M5.5,7A1.5,1.5 0 0,0 7,5.5A1.5,1.5 0 0,0 5.5,4A1.5,1.5 0 0,0 4,5.5A1.5,1.5 0 0,0 5.5,7M21.41,11.58C21.77,11.94 22,12.44 22,13C22,13.55 21.78,14.05 21.41,14.41L14.41,21.41C14.05,21.77 13.55,22 13,22C12.45,22 11.95,21.77 11.58,21.41L2.59,12.41C2.22,12.05 2,11.55 2,11V4C2,2.89 2.89,2 4,2H11C11.55,2 12.05,2.22 12.41,2.58L21.41,11.58M13,20L20,13L11.5,4.5L4.5,11.5L13,20Z" />
      </svg>
      <div>Tags</div>
    </NavLink>
  </div>
)

export default MobileNav
