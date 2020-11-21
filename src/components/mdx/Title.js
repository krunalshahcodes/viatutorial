import React from 'react'
import { Heading } from '@chakra-ui/react'

const Title = ({ children }) => (
  <Heading as="h1" fontSize={24} marginBottom={2}>
    {children}
  </Heading>
)

export default Title
