import { cartMethod } from "./pages/cart/cart.method"
import { homeMethod } from "./pages/home/home.method"
import { loginMethods } from "./pages/Login/login.methods"
import { productDetailMethod } from "./pages/producDetail/product.detail.method"

describe('template spec', () => {
  it('passes', () => {

    const usuario = 'random01'
    const contrasena = 'random01'
    cy.visit('https://demoblaze.com/')

    cy.get('a[data-target="#logInModal"]').click()

    loginMethods.login(usuario,contrasena)
  
    cy.get('a#nameofuser').should('contain.text',usuario)

    homeMethod.clickOnProductLink('Samsung galaxy s6')
    productDetailMethod.clickOnAddToCartButton()
    cy.wait(5000)

    cy.get('a#cartur').click()
    cartMethod.clickOnDeletLink('Samsung galaxy s6')
    cy.wait(5000)
  })
})