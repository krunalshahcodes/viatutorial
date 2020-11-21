import React from 'react'
import { graphql } from 'gatsby'
import { Container, Layout, PostList } from '../components'
import { Flex, Heading } from '@chakra-ui/react'

const Homepage = ({ data, location }) => {
  return (
    <Layout pathname={location.pathname}>
      <Container>
        <Flex direction={{ base: 'column', md: 'row' }}>
          <Flex direction="column" flex={0.7}>
            <Heading
              as="h3"
              fontSize={18}
              textTransform="uppercase"
              marginBottom={4}
            >
              Latest Tutorials
            </Heading>
            {data.allMdx.edges.map(({ node }) => (
              <PostList key={node.id} post={node} />
            ))}
          </Flex>
          <Flex flex={0.3}></Flex>
        </Flex>
      </Container>
    </Layout>
  )
}

export default Homepage

export const pageQuery = graphql`
  query IndexQuery {
    allMdx(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { published: { ne: false } } }
    ) {
      edges {
        node {
          id
          fields {
            title
            slug
            description
            date(fromNow: true)
            banner {
              childImageSharp {
                fluid(maxWidth: 200, maxHeight: 113) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          timeToRead
        }
      }
    }
  }
`
