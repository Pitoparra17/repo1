export class signUpElements{
    static get textboxes(){
        return{
            get userName(){
                return cy.get('input#sign-username')                
            },
            get password(){
                return cy.get('input#sign-password')                
            }
        }
    }
    static get buttons(){
        return{
            get close(){
                return cy.contains('button', 'Close').eq(1)                
            },
            get signUp(){
                return cy.contains('button', 'Sign up')                
            }
        }
    }
}