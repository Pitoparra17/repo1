import { loginMethods } from "./pages/Login/login.methods"

describe('template spec', () => {
  it('passes', () => {

    const usuario = 'random01'
    const contrasena = 'random01'
    cy.visit('https://demoblaze.com/')

    cy.get('a[data-target="#logInModal"]').click()

    loginMethods.login(usuario,contrasena)
    //cy.contains('button', 'Log in').click()
    cy.get('a#nameofuser').should('contain.text',usuario)
    cy.wait(5000)
  })
})