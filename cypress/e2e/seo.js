import config from '../../config/website'

describe('SEO', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('Contains Genral Title Tag', () => {
    cy.get('head title').should('contain', config.siteTitle)
  })
  it('Contains General Description', () => {
    cy.get('head meta[name="description"]').should('have.attr', 'content', config.siteDescription)
  })
  // it('Contains General og:url', () => {
  //   cy.get('head meta[property="og:url"').should('have.attr', 'content', config.siteUrl)
  // })
})
