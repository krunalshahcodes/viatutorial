import React from 'react'
import { Link } from 'gatsby'
import Image from 'gatsby-image'
import {
  Flex,
  Heading,
  Text,
  Link as ChakraLink,
  Image as ChakraImage,
  Box,
} from '@chakra-ui/react'

const PostList = ({ post }) => {
  return (
    <Flex
      align={{ base: 'start', md: 'center' }}
      marginBottom={4}
      paddingRight={8}
    >
      <Flex direction="column" flex={0.7} paddingRight={2}>
        <ChakraLink as={Link} to={post.fields.slug} _hover={{}}>
          <Heading
            as="h3"
            fontSize={{ base: 16, md: 20 }}
            lineHeight={1.5}
            fontWeight="bold"
          >
            {post.fields.title}
          </Heading>
          <Text as="p" marginBottom={2}>
            {post.fields.description}
          </Text>
          <Flex color="gray.500">
            <Box>{post.fields.date}</Box>
            <Box marginX={2}>&middot;</Box>
            <Box>{post.timeToRead} min read</Box>
          </Flex>
        </ChakraLink>
      </Flex>
      <Flex direction="column" flex={0.3}>
        <ChakraLink as={Link} to={post.fields.slug} _hover={{}}>
          <ChakraImage
            as={Image}
            fluid={post.fields.banner.childImageSharp.fluid}
            alt={post.fields.title}
            borderRadius="md"
          />
        </ChakraLink>
      </Flex>
    </Flex>
  )
}

export default PostList
