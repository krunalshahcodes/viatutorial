import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl'
import { Box } from '@chakra-ui/react'

const RE = /{([\d,-]+)}/

const calculateLinesToHighlight = (meta) => {
  if (RE.test(meta)) {
    const lineNumbers = RE.exec(meta)[1]
      .split(',')
      .map((v) => v.split('-').map((y) => parseInt(y, 10)))
    return (index) => {
      const lineNumber = index + 1
      const inRange = lineNumbers.some(([start, end]) =>
        end ? lineNumber >= start && lineNumber <= end : lineNumber === start,
      )
      return inRange
    }
  } else {
    return () => false
  }
}

const Code = ({ codeString, language, metastring }) => {
  const shouldHighlightLine = calculateLinesToHighlight(metastring)

  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Box overflow="auto" marginBottom={4}>
          <Box
            as="pre"
            className={className}
            style={style}
            float="left"
            minWidth="100%"
            overflow="initial"
            paddingX={6}
            paddingY={4}
            borderRadius="md"
          >
            {tokens.map((line, i) => (
              <Box
                key={i}
                {...getLineProps({
                  line,
                  key: i,
                  className: shouldHighlightLine(i) ? 'highlight-line' : '',
                })}
              >
                <Box
                  as="span"
                  display="inline-block"
                  width={8}
                  userSelect="none"
                  opacity={0.3}
                >
                  {i + 1}
                </Box>
                {line.map((token, key) => (
                  <Box as="span" key={key} {...getTokenProps({ token, key })} />
                ))}
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </Highlight>
  )
}

export default Code
