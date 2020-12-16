import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const theme = extendTheme({
  styles: {
    global: props => ({
      'html,body': {
        backgroundColor: mode('#ffffff', '#121212')(props),
      },
    }),
  },
})

export default theme
