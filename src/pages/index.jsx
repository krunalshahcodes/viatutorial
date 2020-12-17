import * as React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Container, LargePost, NormalPost, Layout } from '../components'
import { Grid } from '@chakra-ui/react'

const Home = ({ data }) => {
  const { tutorials } = data

  return (
    <Layout>
      <Container>
        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
          gap={8}
          paddingY={8}
        >
          {tutorials.edges.map(({ node }, index) => {
            if (index === 0) {
              return <LargePost key={node.id} post={node} />
            }
            return <NormalPost key={node.id} post={node} />
          })}
        </Grid>
      </Container>
    </Layout>
  )
}

Home.propTypes = {
  data: PropTypes.object,
}

export default Home

export const query = graphql`
  query {
    tutorials: allMdx(
      filter: { fileAbsolutePath: { regex: "//tutorials//" } }
      limit: 10
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMM DD YYYY")
            slug
            banner {
              id
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
                fixedFluid: fluid(maxHeight: 250) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          excerpt(pruneLength: 250)
          timeToRead
        }
      }
    }
  }
`
