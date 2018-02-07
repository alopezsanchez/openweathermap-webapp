const { given, when, then } = require('cypress-cucumber-preprocessor');

given('I open the Open Weather Map page', () => {
  cy.visit('/');
});

when(`I click {string} card`, city => {
  cy.contains(city.name).click();
});

then(`I see {string} forecast`, city => {
  cy.get(`Evolution of forecasts in ${city}`);
});
