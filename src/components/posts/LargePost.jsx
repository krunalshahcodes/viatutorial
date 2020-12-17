import * as React from 'react'
import PropTypes from 'prop-types'
import Image from 'gatsby-image'
import { Link } from 'gatsby'
import {
  Box,
  Flex,
  Heading,
  Text,
  Link as ChakraLink,
  Image as GatsbyImage,
  GridItem,
} from '@chakra-ui/react'
import { RiArrowRightLine } from 'react-icons/ri'

const LargePost = ({ post }) => {
  return (
    <GridItem colSpan={3}>
      <Flex direction={{ base: 'column', md: 'row' }} align={{ md: 'center' }}>
        <ChakraLink
          as={Link}
          to={`/tutorials/${post.frontmatter.slug}`}
          display="block"
          flex={{ md: 0.6 }}
          paddingRight={{ md: 8 }}
          marginBottom={{ base: 4, md: 0 }}
          _hover={{}}
        >
          <GatsbyImage
            as={Image}
            fluid={post.frontmatter.banner.childImageSharp.fluid}
            borderRadius="md"
          />
        </ChakraLink>
        <Box flex={0.4}>
          <Flex marginBottom={2} align="center">
            <Text paddingRight={2}>{post.frontmatter.date}</Text>
            &middot;
            <Text paddingLeft={2}>{post.timeToRead} min read</Text>
          </Flex>
          <ChakraLink
            as={Link}
            to={`/tutorials/${post.frontmatter.slug}`}
            display="block"
            _hover={{}}
          >
            <Heading as="h2" fontSize={{ base: 24, md: 32 }} marginBottom={2}>
              {post.frontmatter.title}
            </Heading>
          </ChakraLink>
          <ChakraLink
            as={Link}
            to={`/tutorials/${post.frontmatter.slug}`}
            display="block"
            marginBottom={4}
            _hover={{}}
          >
            <Text>{post.excerpt}</Text>
          </ChakraLink>
          <ChakraLink
            as={Link}
            to={`/tutorials/${post.frontmatter.slug}`}
            display="flex"
            alignItems="center"
            color="green.500"
            _hover={{}}
          >
            <Text as="span" marginRight={2}>
              Read More
            </Text>
            <RiArrowRightLine />
          </ChakraLink>
        </Box>
      </Flex>
    </GridItem>
  )
}

LargePost.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      banner: PropTypes.object.isRequired,
      date: PropTypes.string.isRequired,
    }).isRequired,
    excerpt: PropTypes.string.isRequired,
    timeToRead: PropTypes.number.isRequired,
  }),
}

export default LargePost
