import React from 'react'
import { Flex } from '@chakra-ui/react'

const Container = ({ children, ...props }) => {
  return (
    <Flex
      direction="column"
      paddingX={4}
      maxWidth={1280}
      width="90%"
      marginX="auto"
      {...props}
    >
      {children}
    </Flex>
  )
}

export default Container
