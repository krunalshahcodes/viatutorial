import React from 'react'
import Image from 'gatsby-image'
import { Box, Flex, Heading, Image as ChakraImage } from '@chakra-ui/react'
import { MDXProvider } from '@mdx-js/react'
import mdxComponents from '../mdx'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const PostDetail = ({ post }) => {
  return (
    <Flex direction="column" marginBottom={8} paddingRight={8}>
      <Heading as="h1" fontSize={{ base: 24, md: 30 }}>
        {post.fields.title}
      </Heading>
      <Flex color="gray.500" marginBottom={4}>
        <Box>{post.fields.date}</Box>
        <Box marginX={2}>&middot;</Box>
        <Box>{post.timeToRead} min read</Box>
      </Flex>
      {post.fields.banner && (
        <ChakraImage
          as={Image}
          fluid={post.fields.banner.childImageSharp.fluid}
          alt={post.fields.title}
          borderRadius="md"
          marginBottom={4}
        />
      )}
      <MDXProvider components={mdxComponents}>
        <MDXRenderer>{post.body}</MDXRenderer>
      </MDXProvider>
    </Flex>
  )
}

export default PostDetail
