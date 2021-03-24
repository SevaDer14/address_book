describe("user can create a contact", () => {
    it("checks if user can access Address Book", () => {
        cy.visit('/')
        cy.get('h1').should('contain.text', 'Address Book')
    }),
    it('checks for necessary entries', () => {
        cy.get('#firstName').type('Seva')
        cy.get('#lastName').type('Deriushkin')
        cy.get('#email').type('vsevolod.deriushkin@gmail.com')
        cy.get('#mobilePhone').type('0701234567')
        cy.get('#notes').type('cool dude')
        cy.get('#add').click()
    })
})