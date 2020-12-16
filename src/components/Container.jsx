import * as React from 'react'
import PropTypes from 'prop-types'
import { Flex } from '@chakra-ui/react'

const Container = ({ children, ...props }) => {
  return (
    <Flex
      flexGrow={1}
      direction="column"
      maxWidth={1280}
      marginX="auto"
      paddingX={4}
      {...props}
    >
      {children}
    </Flex>
  )
}

Container.propTypes = {
  children: PropTypes.node,
}

export default Container
