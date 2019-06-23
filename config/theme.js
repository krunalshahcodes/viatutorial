import { createTheming } from '@callstack/react-theme-provider'

const themes = {
  default: {
    themeName: 'default',
    colors: {
      body_bg: '#EDEFF4',
      body_text: '#24292e',
      body_title: '#24292e',
      link: '#368554',
      link_hover: '#296A43',
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
    },
  },
}

const { ThemeProvider, useTheme } = createTheming(themes.LIGHT)

export { ThemeProvider, useTheme, themes }
