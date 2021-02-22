describe('chat-app', () => {
  it('login to chat app', () => {
    cy.visit('/')
    cy.findByPlaceholderText('Email').type('john.doe@gmail.com')
    cy.findByPlaceholderText('Password').type('secret')
    cy.findByRole('button').click()
  })
})
