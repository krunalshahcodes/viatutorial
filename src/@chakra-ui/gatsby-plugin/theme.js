import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const theme = extendTheme({
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
  },
  styles: {
    global: props => ({
      'html,body': {
        backgroundColor: mode('#ffffff', '#121212')(props),
        color: mode('#212529', '#acacac')(props),
      },
      'h1,h2,h3,h5,h5,h6': {
        color: mode('#111111', '#ffffff')(props),
      },
    }),
  },
})

export default theme
