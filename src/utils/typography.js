import Typography from 'typography'
import '../fonts/fonts.css'

export const fonts = {
  light: 'Avenir Light',
  regular: 'Avenir Medium',
  semibold: 'Avenir Book',
  bold: 'Avenir Heavy',
}

const typography = new Typography({
  title: 'Viatutorial',
  baseFontSize: '18px',
  baseLineHeight: 1.55,
  includeNormalize: false,
  headerFontFamily: [
    fonts.bold,
    'Ubuntu',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica',
    'Arial',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
  ],
  bodyFontFamily: [
    fonts.regular,
    'Ubuntu',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica',
    'Arial',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
  ],
  scaleRatio: 2.441,
  headerWeight: 700,
  overrideStyles: () => ({
    img: {
      marginBottom: 0,
    },
  }),
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
