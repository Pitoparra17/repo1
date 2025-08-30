export class loginElements{
    static get texboxes(){
        return{
            get userName(){
                return cy.get('input#loginusername')
            },
            get password(){
                return cy.get('input#loginpassword').click()
            }
        }
    }
    static get buttons(){
        return{
            get close (){
                return cy.get('div[id="logInModal"] button').eq(1)
            },
            get login(){
                return cy.contains('button', 'Log in').click()
            }
        }
    }
}
