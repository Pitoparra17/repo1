export class productDetailElements{
    static get buttons(){
        return{
            get addToCart(){
                return cy.contains('a', 'Add to cart')
            }
        }
    }
}