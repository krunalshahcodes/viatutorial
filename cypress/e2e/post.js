import config from '../../config/website'

const PostTitle = 'How To Install and Configure Nginx on Ubuntu 16.04'
const PostDescription = 'In this tutorial you will learn how to install and configure Nginx web server on Ubuntu 16.04.'

describe('Post', () => {
  beforeEach(() => {
    cy.visit('/tutorials/how-to-install-and-configure-nginx-on-ubuntu-16-04/')
  })

  it('SEO: Post title', () => {
    cy.get('head title').should('contain', `${PostTitle}`)
  })
  it('SEO: Post description', () => {
    cy.get('head meta[name="description"]').should('have.attr', 'content', `${PostDescription}`)
  })

  // OG Meta
  it('OG Meta: Post title', () => {
    cy.get('head meta[property="og:title"').should('have.attr', 'content', `${PostTitle} – ${config.siteShortName}`)
  })
  it('OG Meta: Post description', () => {
    cy.get('head meta[property="og:description"').should('have.attr', 'content', `${PostDescription}`)
  })
  it('OG Meta: Alt image', () => {
    cy.get('head meta[property="og:image:alt"').should('have.attr', 'content', `${PostDescription}`)
  })

  // Twitter
  it('Twitter Card: Post title', () => {
    cy.get('head meta[name="twitter:title"').should('have.attr', 'content', `${PostTitle} – ${config.siteShortName}`)
  })
  it('Twitter Card: Post description', () => {
    cy.get('head meta[name="twitter:description"').should('have.attr', 'content', `${PostDescription}`)
  })
  it('Twitter Card: Alt image', () => {
    cy.get('head meta[name="twitter:image:alt"').should('have.attr', 'content', `${PostDescription}`)
  })
})
