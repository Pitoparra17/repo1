import { confirmElement } from "./confirm.element";

export class confirmMethod{
    static clickOnOkButton(){
        confirmElement.buttons.ok.click()
    }
    static veryfyGreenCheckMarkIsDisplay(){
        confirmElement.icons.greenChekMark.should('exist')
    }
}