import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import { css } from '@emotion/core'
import kebabCase from 'lodash/kebabCase'
import { Layout, Container } from '../components'
import config from '../../config/website'

const TagsPage = ({ data, location }) => {
  const { group } = data.allMdx
  return (
    <Layout pathname={location.pathname}>
      <Helmet title={`Tags - ${config.siteShortName}`} />
      <Container>
        <h1
          css={css`
            font-size: 1.7rem;
            margin-bottom: 1rem;
          `}
        >
          Tags
        </h1>
        <div
          css={css`
            display: flex;
            flex-wrap: wrap;
          `}
        >
          {group.map(tag => (
            <Link
              key={tag.fieldValue}
              to={`/tags/${kebabCase(tag.fieldValue)}/`}
              css={css`
                background: #484848;
                margin: 0.5rem 0.5rem 0.5rem 0rem;
                padding: 0.3rem 0.875rem;
                border-radius: 0.2rem;
                color: #ffffff;
                &:hover,
                &:focus {
                  color: #ffffff;
                }
              `}
            >
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          ))}
        </div>
      </Container>
    </Layout>
  )
}

export default TagsPage

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.object.isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        siteTitle
        siteShortName
      }
    }
    allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
