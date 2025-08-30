import { loginElements } from "./login.element";

export class loginMethods{
    static insertUserName(userName){
        loginElements.texboxes.userName.invoke('val',userName)
    }
    static insertPassword(password){
        loginElements.texboxes.password.invoke('val',password)
    }
    static clickOnLoginButton(){
        loginElements.buttons.login.click()
    }

    static login(username,password){
        this.insertUserName(username)
        this.insertPassword(password)
        this.clickOnLoginButton()
    }
}