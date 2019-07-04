import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

const Head = props => {
  const { postNode, pathname, article, data } = props
  const { buildTime, config } = data.site
  const URL = `${config.siteUrl}${pathname}`
  const isSnippets = URL === `${URL}/snippets`

  let title
  let description
  let image

  if (article) {
    let postImage
    if (!postNode.frontmatter.banner) {
      postImage = ''
    } else {
      postImage = postNode.frontmatter.banner.childImageSharp.fluid.src
    }
    title = `${postNode.frontmatter.title} – ${config.siteShortName}`
    if (!postNode.frontmatter.description) {
      description = `${postNode.excerpt}`
    } else {
      description = `${postNode.frontmatter.description}`
    }
    image = `${config.siteUrl}${postImage}`
  } else {
    title = config.siteTitle
    description = config.siteDescription
  }

  const organizationCreator = input => ({
    '@context': 'http://schema.org',
    '@id': `${config.siteUrl}/#${input}`,
    '@type': 'Organization',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
      addressLocality: '',
      postalCode: '',
    },
    name: config.siteTitle,
    alternateName: config.siteShortName,
    description: config.siteDescription,
    url: URL,
    email: 'hello@viatutorial.com',
    founder: 'Krunal Shah',
    foundingDate: '2019-04-01',
    foundingLocation: 'India',
    // image: {
    //   '@type': 'ImageObject',
    //   url: config.siteLogo,
    //   height: '512',
    //   width: '512',
    // },
    // logo: {
    //   '@type': 'ImageObject',
    //   url: config.siteLogoSmall,
    //   height: '60',
    //   width: '60',
    // },
    sameAs: [
      'https://github.com/imkrunal',
      'https://www.instagram.com/krunal7091',
      'https://www.behance.net/rizegfx',
      'https://twitter.com/krunal7091',
    ],
  })

  const schemaOrgWebPage = {
    '@context': 'http://schema.org',
    '@type': isSnippets ? 'Snippets' : 'WebPage',
    url: URL,
    headline: config.siteTitle,
    mainEntityOfPage: URL,
    description: config.siteDescription,
    name: config.siteTitle,
    author: {
      '@id': `${config.siteUrl}/#identity`,
    },
    copyrightHolder: {
      '@id': `${config.siteUrl}/#identity`,
    },
    copyrightYear: '2017',
    creator: {
      '@id': `${config.siteUrl}/#creator`,
    },
    publisher: {
      '@id': `${config.siteUrl}/#creator`,
    },
    datePublished: '2019-04-01',
    dateModified: buildTime,
    image: {
      '@type': 'ImageObject',
      url: image,
    },
  }

  let schemaArticle = null

  if (article) {
    schemaArticle = {
      '@context': 'http://schema.org',
      '@type': 'Article',
      author: {
        '@id': `${config.siteUrl}/#identity`,
      },
      copyrightHolder: {
        '@id': `${config.siteUrl}/#identity`,
      },
      copyrightYear: postNode.first_publication_date,
      creator: {
        '@id': `${config.siteUrl}/#creator`,
      },
      publisher: {
        '@id': `${config.siteUrl}/#creator`,
      },
      datePublished: postNode.first_publication_date,
      dateModified: postNode.last_publication_date,
      description,
      headline: title,
      url: URL,
      name: title,
      image: {
        '@type': 'ImageObject',
        url: image,
      },
      mainEntityOfPage: URL,
    }
  }

  const breadcrumb = {
    '@context': 'http://schema.org',
    '@type': 'BreadcrumbList',
    description: 'Breadcrumbs list',
    name: 'Breadcrumbs',
  }

  return (
    <Helmet>
      <html lang="en-US" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      {/* OG DATA */}
      <meta property="og:site_name" content={config.facebook} />
      <meta property="og:url" content={URL} />
      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={description} />
      <meta property="og:see_also" content="https://github.com/imkrunal" />
      <meta
        property="og:see_also"
        content="https://www.instagram.com/krunal7091"
      />
      <meta property="og:see_also" content="https://www.behance.net/rizegfx" />
      <meta property="og:see_also" content="https://twitter.com/krunal7091" />
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={config.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={description} />
      {!article && (
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgWebPage)}
        </script>
      )}
      {article && (
        <script type="application/ld+json">
          {JSON.stringify(schemaArticle)}
        </script>
      )}
      <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
      <script type="application/ld+json">
        {JSON.stringify(organizationCreator('identity'))}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(organizationCreator('creator'))}
      </script>
    </Helmet>
  )
}

const SEO = props => (
  <StaticQuery
    query={querySEO}
    render={data => <Head {...props} data={data} />}
  />
)

export default SEO

Head.propTypes = {
  pathname: PropTypes.string.isRequired,
  data: PropTypes.any.isRequired,
  postNode: PropTypes.object,
  article: PropTypes.bool,
}

Head.defaultProps = {
  postNode: null,
  article: false,
}

const querySEO = graphql`
  query SEO {
    site {
      buildTime(formatString: "YYYY-MM-DD")
      config: siteMetadata {
        siteTitle
        siteDescription
        siteShortName
        siteUrl
        twitter
        facebook
      }
    }
  }
`
