const config = require('./config/website')

module.exports = {
  siteMetadata: {
    siteTitle: config.siteTitle,
    siteDescription: config.siteDescription,
    siteShortName: config.siteShortName,
    siteUrl: config.siteUrl,
    twitter: config.twitter,
    facebook: config.facebook,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
  ],
}
