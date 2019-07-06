import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { css } from '@emotion/core'
import { Layout, Container } from '../components'
import alien from '../assets/alien.svg'
import config from '../../config/website'

const NotFound = ({ location }) => (
  <Layout pathname={location.pathname}>
    <Helmet title={`404 - ${config.siteShortName}`} />
    <Container>
      <div
        css={css`
          display: flex;
          flex: 1;
          align-items: center;
          flex-direction: column;
          justify-content: center;
          text-align: center;
        `}
      >
        <img
          css={css`
            max-width: 500px;
          `}
          src={alien}
          alt="404"
        />
        <h1>Opps..</h1>
        <p>Aliens abducted our developer before he creates this page.</p>
      </div>
    </Container>
  </Layout>
)

export default NotFound

NotFound.propTypes = {
  location: PropTypes.object.isRequired,
}
