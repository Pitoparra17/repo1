import { signUpElements } from "./signup.element";

export class signUpMethods{
    static insertUserName(userName){
        signUpElements.textboxes.userName.invoke('val',userName)
    }
    static insertPassword(password){
        signUpElements.textboxes.password.invoke('val',password)
    }
    static clickOnSignUpButton(){
        signUpElements.buttons.signUp.clic()
    }
    static signUp(userName,password){
        this.insertUserName(userName)
        this.insertPassword(password)
        this.clickOnSignUpButton()
    }
}