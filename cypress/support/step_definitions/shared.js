const { given, when, then } = require('cypress-cucumber-preprocessor');

given('The Open Weather Map page opened', () => {
  cy.visit('/');
});

when('I open the Open Weather Map page', () => {
  cy.visit('/');
});

when(`I click {string} card`, city => {
  cy.contains(city).click();
});

then(`I see {string} forecast`, city => {
  cy.contains('Daily forecast');
});

then(`I see {string} chart`, (chart) => {
  cy.contains(chart);
});

then('I see the list of cities', () => {
  cy.contains('A Coruna');
  cy.contains('Lugo');
  cy.contains('Ourense');
  cy.contains('Pontevedra');
});
