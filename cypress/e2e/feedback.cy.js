import { faker } from '@faker-js/faker'; 
import feedbackPage from '../support/pages/FeedbackPage';
import user from '../fixtures/user.json';

user.comment = faker.number.bigInt({ length: 161 });
user.captcha = faker.number.bigInt({ length: 1 });


it.only('long comment', () => {  

    feedbackPage.feedbackVisit();
    cy.get('#comment').type(user.comment)
    

 
  })


it('wrong captcha', () => {  

    accountCreatePage.registerUserWithValidCredentials(user);

    accountLoginPage.loginAccount(user);
 
  }) 