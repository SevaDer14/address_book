describe('user canvisibility of new contact form', () => {
    before(() => {
        cy.visit('/')
    })

    it('by clicking "Add Contact" button', () => {
        
        cy.get('#newContactForm').should('not.be.visible')
        cy.get('#addContact').click()
        cy.get('#newContactForm').should('be.visible')
        cy.get('#addContact').click()
        cy.get('#newContactForm').should('not.be.visible')
    })
})