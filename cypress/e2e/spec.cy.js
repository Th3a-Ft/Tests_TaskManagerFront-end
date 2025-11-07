describe('My First Test', () => {
    it('Visits TaskManager App', () => {
        cy.visit('http://localhost:8081')
        cy.contains('Welcome')git add
    })
})