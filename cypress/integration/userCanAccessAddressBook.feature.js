describe("user can access Address Book", () => {
    it("checks if user can access Address Book", () => {
        cy.visit('/')
        cy.get('h1').should('contain.text', 'Address Book')
    })
})