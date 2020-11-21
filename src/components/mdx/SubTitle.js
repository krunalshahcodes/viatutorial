import React from 'react'
import { Heading } from '@chakra-ui/react'

const SubTitle = ({ children }) => (
  <Heading as="h2" fontSize={20} marginBottom={1}>
    {children}
  </Heading>
)

export default SubTitle
