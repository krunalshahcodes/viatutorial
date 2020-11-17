import React from 'react'
import Navigation from './Navigation'
import Footer from './Footer'
import SEO from './SEO'

const Layout = ({ children, pathname, customSEO }) => {
  return (
    <>
      {!customSEO && <SEO pathname={pathname} />}
      <Navigation />
      {children}
      <Footer />
    </>
  )
}

export default Layout
