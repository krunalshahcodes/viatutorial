import { createTheming } from '@callstack/react-theme-provider'

const colors = {
  white: '#ffffff',
  black: '#000000',
}

const themes = {
  default: {
    themeName: 'default',
    colors: {
      body_bg: '#EDEFF4',
      body_text: '#24292e',
      body_title: '#24292e',
      link: '#368554',
      link_hover: '#296A43',
      nav_bg: '#368554',
      nav_text: '#fffff',
      card_bg: '#ffffff',
      card_shadow: 'rgba(102, 119, 136, 0.03) 0px 6px 8px, rgba(102, 119, 136, 0.3) 0px 1px 2px',
      card_title: '#24292e',
      ...colors,
    },
  },
  dark: {
    themeName: 'dark',
    colors: {
      body_bg: '#12181A',
      body_text: '#b2becd',
      body_title: '#ffffff',
      link: '#368554',
      link_hover: '#296A43',
      nav_bg: '#2A2E34',
      nav_text: '#b2becd',
      card_bg: '#2A2E34',
      card_shadow: '0 4px 8px rgba(0,0,0,0.38)',
      card_title: '#ffffff',
      ...colors,
    },
  },
}

const { ThemeProvider, useTheme } = createTheming(themes.LIGHT)

export { ThemeProvider, useTheme, themes }
