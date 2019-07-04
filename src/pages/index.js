import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from '../components'

const Index = ({ location }) => <Layout pathname={location.pathname}>Hello World</Layout>

export default Index

Index.propTypes = {
  location: PropTypes.object.isRequired,
}
