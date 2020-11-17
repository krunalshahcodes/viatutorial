import React, { useState } from 'react'
import { Link } from 'gatsby'
import { Box, Flex, IconButton, Link as ChakraLink } from '@chakra-ui/react'
import { RiMenuFill } from 'react-icons/ri'
import Container from './Container'

const MenuItem = ({ children, to, ...props }) => (
  <ChakraLink
    as={Link}
    to={to}
    display="block"
    paddingX={{ base: 0, md: 3 }}
    paddingY={2}
    _hover={{}}
    {...props}
  >
    {children}
  </ChakraLink>
)

const Navigation = () => {
  const [show, setShow] = useState(false)

  return (
    <Container>
      <Flex
        direction="row"
        align="center"
        justify="space-between"
        wrap="wrap"
        paddingY={8}
      >
        <ChakraLink
          as={Link}
          to="/"
          display="block"
          flexGrow={1}
          fontSize={24}
          fontWeight="bold"
          _hover={{}}
          _focus={{ boxShadow: 'none' }}
        >
          Via Tutorial
        </ChakraLink>
        <Box display={{ base: 'block', md: 'none' }}>
          <IconButton
            aria-label="Menu"
            icon={<RiMenuFill />}
            onClick={() => setShow(!show)}
          />
        </Box>
        <Box
          backgroundColor={{ base: 'gray.50', md: 'white' }}
          borderRadius={4}
          display={{ base: show ? 'block' : 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          padding={{ base: 4, md: 0 }}
          marginTop={{ base: 4, md: 0 }}
        >
          <MenuItem to="/tutorials">Tutorials</MenuItem>
          <MenuItem to="/courses">Courses</MenuItem>
          <MenuItem to="/snippets">Snippets</MenuItem>
          <MenuItem to="/categories">Categories</MenuItem>
          <MenuItem to="/tags">Tags</MenuItem>
          <MenuItem to="/contact-us">Contact Us</MenuItem>
        </Box>
      </Flex>
    </Container>
  )
}

export default Navigation
