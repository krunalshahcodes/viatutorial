import * as React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Container, Layout } from '../components'

const Tutorial = ({ data }) => {
  return (
    <Layout>
      <Container>{data.tutorial.frontmatter.title}</Container>
    </Layout>
  )
}

Tutorial.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Tutorial

export const query = graphql`
  query tutorialQuery($slug: String) {
    tutorial: mdx(frontmatter: { slug: { eq: $slug } }) {
      id
      frontmatter {
        title
      }
    }
  }
`
