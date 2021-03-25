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
        cy.get('#submit').click()
    }),
    it('checks the contact list', () => {
        cy.get('#contactList').should('contain','Seva')
        cy.get('#contactList').should('contain','Deriushkin')
        cy.get('#contactList').should('contain','vsevolod.deriushkin@gmail.com')
        cy.get('#contactList').should('contain','0701234567')
        cy.get('#contactList').should('contain','cool dude')
    })
})