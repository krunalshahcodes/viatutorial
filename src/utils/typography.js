import Typography from 'typography'
import '../fonts/fonts.css'

const typography = new Typography({
  title: 'Viatutorial',
  baseFontSize: '18px',
  baseLineHeight: 1.45,
  includeNormalize: false,
  headerFontFamily: [
    'Circular',
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
    'Circular',
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

export default typography
export const { rhythm } = typography
