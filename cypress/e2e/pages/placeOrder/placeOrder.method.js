import { placeOrderElement } from "./placeOrder.element";

export class placeOrderMethod{
    //rellenar formulario de compra
    static insertName(name){
        placeOrderElement.textBoxes.name.invoke('val',name)
    }
    static insertCountry(country){
        placeOrderElement.textBoxes.conutry.invoke('val',country)
    }
    static insertCity(city){
        placeOrderElement.textBoxes.city.invoke('val',city)
    }
    static insertCreditCard(creditCard){
        placeOrderElement.textBoxes.creditCard.invoke('val',creditCard)
    }
    static insertCity(month){
        placeOrderElement.textBoxes.month.invoke('val',month)
    }
    static insertCity(year){
        placeOrderElement.textBoxes.year.invoke('val',year)
    }
    //botones de formulario
    static clickOnCloseButton(){
        placeOrderElement.buttons.close.click()
    }
    static clickOnPurchaseButton(){
        placeOrderElement.buttons.purchase.click()
    }

    static clickOnCloseButton(){
        placeOrderElement.buttons.close.click()
    }
}