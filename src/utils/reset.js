import { css } from '@emotion/core'

const reset = theme => {
  return css`
    body {
      background: ${theme.colors.body_bg};
      color: ${theme.colors.body_text};
    }
  `
}

export default reset
