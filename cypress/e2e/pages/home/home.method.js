import { homeElement } from "./home.element";

export class homeMethod{
    static clickOnPhonesOption(){
        homeElement.categoriesMenu.phones.click()
    }
    static clickOnLaptopsOption(){
        homeElement.categoriesMenu.laptops.click()
    }
    static clickOnMonitorsOption(){
        homeElement.categoriesMenu.monitors.click()
    }
    static clickOnProductLink(productName){
        homeElement.product(productName).click()
    }
}