/* eslint-disable react/prop-types */
/* eslint react/display-name:0, consistent-return:0 */
import React from 'react'

import Title from './Title'
import Subtitle from './Subtitle'
import SmallTitle from './Smalltitle'
import Paragraph from './Paragraph'
import List from './List'
import Code from './Code'

export default {
  wrapper: ({ children }) => <>{children}</>,
  h1: props => <Title {...props} />,
  h2: props => <Subtitle {...props} />,
  h3: props => <SmallTitle {...props} />,
  p: props => <Paragraph {...props} />,
  ul: props => <List {...props} />,
  pre: preProps => {
    const props = preToCodeBlock(preProps)
    // if there's a codeString and some props, we passed the test
    if (props) {
      return <Code {...props} />
    }
    // it's possible to have a pre without a code in it
    return <pre {...preProps} />
  },
}

// lifted this from mdx-utils
// it doesn't compile it's code and this busted IE, so I'm just vendoring it.
function preToCodeBlock(preProps) {
  if (
    // children is code element
    preProps.children &&
    // code props
    preProps.children.props &&
    // if children is actually a <code>
    preProps.children.props.mdxType === 'code'
  ) {
    // we have a <pre><code> situation
    const { children: codeString, className = '', ...props } = preProps.children.props

    const matches = className.match(/language-(?<lang>.*)/)

    return {
      codeString: codeString.trim(),
      className,
      language: matches && matches.groups && matches.groups.lang ? matches.groups.lang : '',
      ...props,
    }
  }
}
