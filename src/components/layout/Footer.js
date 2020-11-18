import React from 'react'
import { Link } from 'gatsby'
import { Text, Link as ChakraLink } from '@chakra-ui/react'
import Container from './Container'

const Footer = () => {
  return (
    <Container align="center" justify="center" paddingY={4} textAlign="center">
      <Text>Code snippets licensed under MIT, unless otherwise noted.</Text>
      <Text>
        &copy; 2020{' '}
        <ChakraLink as={Link} to="/">
          Via Tutorial
        </ChakraLink>
        . All Rights Reserved.
      </Text>
    </Container>
  )
}

export default Footer
