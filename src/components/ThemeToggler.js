import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { useTheme } from '../../config/theme'

const DarkMode = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
`

const DefaultMode = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
`

const ThemeToggler = ({ toggleTheme, themeName }) => {
  const theme = useTheme()
  return (
    <button
      type="button"
      css={{
        borderRadius: '50%',
        width: '2.375rem',
        height: '2.375rem',
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
        borderStyle: 'solid',
        borderWidth: '1px',
        color: theme.colors.white,
        background: theme.colors.headerBg,
        '@media (hover: hover)': {
          ':hover': {
            background: theme.themeName === 'default' ? theme.colors.text : theme.colors.primary,
          },
        },
      }}
      aria-label={themeName === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={() => toggleTheme(themeName === 'dark' ? 'default' : 'dark')}
    >
      {themeName === 'dark' ? <DefaultMode title="Switch to light mode" /> : <DarkMode title="Switch to dark mode" />}
    </button>
  )
}
export default ThemeToggler

ThemeToggler.propTypes = {
  themeName: PropTypes.string,
  toggleTheme: PropTypes.func.isRequired,
}
ThemeToggler.defaultProps = {
  themeName: 'default',
}
