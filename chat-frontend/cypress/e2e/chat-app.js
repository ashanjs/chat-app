describe('chat-app', () => {
  it('login to chat app', () => {
    cy.visit('/')
    cy.get('.mb-1 > input').type('john.doe@gmail.com')
    cy.get('.mb-2 > input').type('secret')
    cy.get('button').click()
    cy.get('#profile-menu > :nth-child(2)').click()
    cy.get('#profile-options > :nth-child(2)').click()
  })
})