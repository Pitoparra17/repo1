export class cartElement {
    static get buttons(){
        return{
            get placeOrder(){
                return cy.get('button[data-toggle="modal"]')
            }
        }
    }
    static get links(){
        return{
            delete(producName){
                return cy.contains('td',producName).closest('tr').find('a')
            }
        }
    }
}
