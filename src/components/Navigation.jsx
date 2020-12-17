import * as React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import {
  Box,
  Button,
  Flex,
  Link as ChakraLink,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import { RiMenuFill, RiMoonFill, RiSunFill } from 'react-icons/ri'
import Container from './Container'

export const MenuItem = ({ to, children, ...props }) => (
  <ChakraLink
    as={Link}
    to={to}
    display="block"
    paddingX={{ base: 0, md: 3 }}
    paddingY={{ base: 2, md: 0 }}
    fontWeight="bold"
    boxShadow="none"
    fontSize={16}
    _hover={{
      color: 'green.500',
    }}
    _focus={{ outline: 'none' }}
    {...props}
  >
    {children}
  </ChakraLink>
)

MenuItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node,
}

const Navigation = ({ ...props }) => {
  const [show, setShow] = React.useState(false)
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Flex
      position="sticky"
      align="center"
      zIndex={99}
      backgroundColor={useColorModeValue('#ffffff', '#000000')}
      boxShadow="sm"
      {...props}
    >
      <Container>
        <Flex align="center" flexWrap="wrap">
          <ChakraLink
            as={Link}
            to="/"
            color="green.600"
            paddingY={4}
            fontSize={24}
            fontWeight="bold"
            marginRight={{ base: 0, md: 4 }}
            boxShadow="none"
            _hover={{}}
            _focus={{}}
          >
            Via Tutorial
          </ChakraLink>
          <Button
            display={{ base: 'block', md: 'none' }}
            marginLeft="auto"
            onClick={() => setShow(!show)}
          >
            <RiMenuFill />
          </Button>
          <Box
            display={{ base: show ? 'block' : 'none', md: 'flex' }}
            alignItems="center"
            width={{ base: 'full', md: 'auto' }}
            flexGrow={1}
            paddingBottom={{ base: 4, md: 0 }}
          >
            <MenuItem to="/">Start</MenuItem>
            <MenuItem to="/">Tags</MenuItem>
            <MenuItem to="/">Write For Us</MenuItem>
            <MenuItem to="/">Contact Us</MenuItem>
            <Button
              display={{ base: 'none', md: 'block' }}
              backgroundColor="transparent"
              _hover={{ backgroundColor: 'transparent' }}
              _focus={{ outline: 'none' }}
              onClick={toggleColorMode}
              marginLeft="auto"
            >
              {colorMode === 'light' ? <RiMoonFill /> : <RiSunFill />}
            </Button>
          </Box>
        </Flex>
      </Container>
    </Flex>
  )
}

export default Navigation
