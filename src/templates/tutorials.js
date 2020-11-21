import React from 'react'
import { graphql } from 'gatsby'
import { Flex } from '@chakra-ui/react'
import { Container, Layout, PostDetail, SEO } from '../components'

const Tutorials = ({ data, location }) => {
  return (
    <Layout pathname={location.pathname} customSEO>
      <SEO postNode={data.mdx} pathname={location.pathname} tutorial />
      <Container>
        <Flex direction={{ base: 'column', md: 'row' }}>
          <Flex direction="column" flex={0.7}>
            <PostDetail post={data.mdx} />
          </Flex>
          <Flex flex={0.3}></Flex>
        </Flex>
      </Container>
    </Layout>
  )
}

export default Tutorials

export const pageQuery = graphql`
  query TutorialQuery($id: String!) {
    mdx(fields: { id: { eq: $id } }) {
      id
      fields {
        title
        slug
        description
        date(fromNow: true)
        banner {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      timeToRead
      body
    }
  }
`
