class PlaceOrder  {
    newOrder() {
        cy.get('.ng-star-inserted').should('contain', 'All Products')
      cy.get('.mat-grid-tile.ng-star-inserted').first().find('button').click();
      cy.contains('.mat-button-wrapper', ' Your Basket').click();
      cy.get('#checkoutButton').click();

      cy.get('[aria-label="Add a new address"]').click();
  
      cy.log('country')
      cy.get('[data-placeholder="Please provide a country."]').type(user.country)
  
      cy.log('name')
      cy.get('[data-placeholder="Please provide a name."]').type(user.name)
  
      cy.log('mobile ')
      cy.get('[data-placeholder="Please provide a mobile number."]').type(user.mobileNumber)
  
      cy.log('zip')
      cy.get('[data-placeholder="Please provide a ZIP code."]').type(user.zipCode)
  
      cy.log('address')
      cy.get('#address').type(user.address)
  
      cy.log('city')
      cy.get('[data-placeholder="Please provide a city."]').type(user.city)
  
      cy.log('state')
      cy.get('[data-placeholder="Please provide a state."]').type(user.state)
  
      cy.log('submitButton')
      cy.get('#submitButton').click()
  
      cy.log('выбор адреса')
      cy.get('.mat-radio-inner-circle.mat-radio-inner-circle').click();

      cy.log('submitButton                  ???')
      cy.get('.btn-next').click();
     
      cy.log('delivery speed')
      cy.get('#mat-radio-41').click()

      cy.log('submitButton')
      cy.get('app-delivery-method button.mat-focus-indicator.btn.nextButton.mat-button.mat-raised-button.mat-button-base.mat-primary mat-icon+span').click();
      
      cy.log('delivery speed')
      cy.get('#mat-expansion-panel-header-0').click()
      
      cy.log('name')
      cy.get('#mat-input-14').type(user.name)
      
      cy.log('card')
      cy.get('#mat-input-15').type(user.cardNumber)
  
      cy.log('month')
      cy.get('#mat-input-16').select('1')
      
      cy.log('year')
      cy.get('#mat-input-17').select('2083')
       
      cy.get('#submitButton  span.mat-button-wrapper').click()
  
      cy.get('#mat-radio-44').click();
  
      cy.get('mat-card button+button mat-icon+span').click();
  
      cy.get('#checkoutButton').click()
      
      cy.get('.confirmation').should('contain', 'Thank you for your purchase!')
    }

}
export default new PlaceOrder();