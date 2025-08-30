import { loginMethods } from "./pages/Login/login.methods"

describe('template spec', () => {
  it('passes', () => {

    cy.visit('https://demoblaze.com/')

    cy.get('a[data-target="#logInModal"]').click()

    loginMethods.login('userName','password')
    
    cy.wait(5000)
  })
})