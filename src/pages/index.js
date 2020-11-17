import React from 'react'
import { Container, Layout } from '../components'

const Homepage = ({ location }) => {
  return (
    <Layout pathname={location.pathname}>
      <Container>Home</Container>
    </Layout>
  )
}

export default Homepage
