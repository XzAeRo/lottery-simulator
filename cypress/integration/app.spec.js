describe('Navigation', () => {
    it('validates home page', () => {
        // go to index
        cy.visit('http://localhost:3000/')

        cy.get('h1').contains("Welcome")
    })
})