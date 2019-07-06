import config from '../../config/website'

describe('Home', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  // SEO
  it('SEO: Site title', () => {
    cy.get('head title').should('contain', `${config.siteTitle}`)
  })
  it('SEO: Site description', () => {
    cy.get('head meta[name="description"]').should('have.attr', 'content', `${config.siteDescription}`)
  })

  // OG Meta
  it('OG Meta: Post title', () => {
    cy.get('head meta[property="og:title"').should('have.attr', 'content', `${config.siteTitle}`)
  })
  it('OG Meta: Post description', () => {
    cy.get('head meta[property="og:description"').should('have.attr', 'content', `${config.siteDescription}`)
  })
  it('OG Meta: Alt image', () => {
    cy.get('head meta[property="og:image:alt"').should('have.attr', 'content', `${config.siteDescription}`)
  })

  // Twitter
  it('Twitter Card: Post title', () => {
    cy.get('head meta[name="twitter:title"').should('have.attr', 'content', `${config.siteTitle}`)
  })
  it('Twitter Card: Post description', () => {
    cy.get('head meta[name="twitter:description"').should('have.attr', 'content', `${config.siteDescription}`)
  })
  it('Twitter Card: Alt image', () => {
    cy.get('head meta[name="twitter:image:alt"').should('have.attr', 'content', `${config.siteDescription}`)
  })
})
