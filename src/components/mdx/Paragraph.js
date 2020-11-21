import React from 'react'
import { Text } from '@chakra-ui/react'

const Paragraph = ({ children }) => (
  <Text fontSize={16} marginBottom={3}>
    {children}
  </Text>
)

export default Paragraph
