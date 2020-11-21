import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'

const Head = ({ data, pathname, tutorial, postNode }) => {
  const { config } = data.site
  const URL = `${config.siteUrl}${pathname}`

  let title
  let description
  let image

  if (tutorial) {
    title = `${postNode.fields.title} – ${config.siteName}`
    description = postNode.fields.description
      ? postNode.fields.description
      : postNode.excerpt
    image = `${config.siteUrl}${
      postNode.fields.banner
        ? postNode.fields.banner.childImageSharp.fluid.src
        : ''
    }`
  } else {
    title = config.siteTitle
    description = config.siteDescription
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
      <meta property="og:type" content={tutorial ? 'article' : 'website'} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={description} />
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={config.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={description} />
    </Helmet>
  )
}

const SEO = (props) => (
  <StaticQuery
    query={querySEO}
    render={(data) => <Head {...props} data={data} />}
  />
)

export default SEO

const querySEO = graphql`
  query SEO {
    site {
      buildTime(formatString: "YYYY-MM-DD")
      config: siteMetadata {
        siteTitle
        siteDescription
        siteName
        siteUrl
        twitter
        facebook
      }
    }
  }
`
