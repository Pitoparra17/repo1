import { loginElements } from "./login.element";

export class loginMethods{
    static insertUserName(userName){
        loginElements.texboxes.userName.type(userName)
    }
    static insertPassword(password){
        loginElements.texboxes.password.type(password)
    }
    static clickOnLoginButton(){
        loginElements.Buttons.login.click()
    }

    static login(username,password){
        this.insertUserName(username)
        this.insertPassword(password)
        this.clickOnLoginButton
    }
}