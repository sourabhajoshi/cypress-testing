describe("visit all pages", () => {
  it("visit home page", () => {
    cy.visit('/')
    cy.get("[data-cy=title]").should("contain", "Home Page")
  })

  it("visit about page", () => {
    cy.visit('/about')
    cy.get("[data-cy=title]").should("contain", "About Page")
    cy.contains("p", "This is a simple about page.").should("be.visible")
  })

  const pages = [
    {url:"/contact", title:"Contact Page"},
    {url:"/product", title:"Product Page"},
    {url:"/product/10", title:"Product Details Page"},
  ]

  pages.forEach(page=>{
    it(`visit ${page.url}`, ()=>{
      cy.visit(page.url)
      cy.get("[data-cy=title]").should("contain", page.title)
    })
  })
})
