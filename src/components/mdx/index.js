/* eslint-disable react/display-name */
import * as React from 'react'
import Title from './Title'
import SubTitle from './SubTitle'
import Paragraph from './Paragraph'
import List from './List'
import Code from './Code'

export default {
  wrapper: ({ children }) => children,
  h1: (props) => <Title {...props} />,
  h2: (props) => <SubTitle {...props} />,
  p: (props) => <Paragraph {...props} />,
  ul: (props) => <List {...props} />,
  pre: (preProps) => {
    const props = preToCodeBlock(preProps)
    if (props) {
      return <Code {...props} />
    } else {
      return <pre {...preProps} />
    }
  },
}

const preToCodeBlock = (preProps) => {
  if (
    preProps.children &&
    preProps.children.props &&
    preProps.children.props.mdxType === 'code'
  ) {
    const {
      children: codeString,
      className = '',
      ...props
    } = preProps.children.props

    const matches = className.match(/language-(?<lang>.*)/)

    return {
      codeString: codeString.trim(),
      className,
      language:
        matches && matches.groups && matches.groups.lang
          ? matches.groups.lang
          : '',
      ...props,
    }
  }
}
