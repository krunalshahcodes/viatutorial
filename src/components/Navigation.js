import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { useTheme } from '../../config/theme'
import ThemeToggler from './ThemeToggler'
import Container from './Container'
import { bpMaxSM } from '../utils/breakpoints'

const NavLink = styled(Link)`
  color: #b2becd;
  padding: 1rem;
  &.active,
  &:hover,
  &:focus {
    color: #ffffff;
  }
`

const Navigation = () => {
  const theme = useTheme()
  return (
    <div
      css={css`
        background: ${theme.colors.nav_bg};
        display: flex;
        align-items: center;
        ${bpMaxSM} {
          padding: 1rem;
        }
      `}
    >
      <Container noVerticalPadding>
        <div
          css={css`
            display: flex;
            align-items: center;
            justify-content: space-between;
          `}
        >
          <Link
            to="/"
            aria-label="go to homepage"
            css={css`
              color: ${theme.colors.white};
              font-size: 1.25rem;
              &:hover,
              &:focus {
                color: ${theme.colors.white};
              }
            `}
          >
            ViaTutorial
          </Link>
          <div
            css={css`
              display: flex;
              ${bpMaxSM} {
                display: none;
              }
            `}
          >
            <NavLink to="/" activeClassName="active">
              Home
            </NavLink>
            <NavLink to="/tags" activeClassName="active">
              Tags
            </NavLink>
          </div>
          <ThemeToggler
            css={css`
              background: ${theme.colors.link_hover};
            `}
            toggleTheme={theme.toggleTheme}
            themeName={theme.themeName}
          />
        </div>
      </Container>
    </div>
  )
}

export default Navigation
