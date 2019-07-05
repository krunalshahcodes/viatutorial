import React from 'react'
import PropTypes from 'prop-types'
import { Layout, Container } from '../components'

const Index = ({ location }) => (
  <Layout pathname={location.pathname}>
    <Container>Book unique places to stay and things to do.</Container>
  </Layout>
)

export default Index

Index.propTypes = {
  location: PropTypes.object.isRequired,
}
