import { commonPageElement } from "./common.element";
import { commonPageData } from "./comun.data";

export class commonPageMethod{
    static navigateToDemoBlaze(){
        cy.visit(commonPageData.Url)
    }
    static clickOnContactOption(){
        commonPageElement.topMenu.contact.click()
       }
    static clickOnAboutUsOption(){
        commonPageElement.topMenu.aboutUs.click()
       }
    static clickOnCartOption(){
        commonPageElement.topMenu.cart.click()
       }
    static clickOnLogInOption(){
        commonPageElement.topMenu.logIn.click()
       }
    static clickOnSingUpOption(){
        commonPageElement.topMenu.singUp.click()
       }
}