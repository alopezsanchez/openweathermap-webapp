import cities from '../fixtures/cities.json';

describe('Application structure', () => {
  it('should assert that <title> is correct', () => {
    cy.visit('/');

    cy.title().should('equal', 'Open weather app');
  });

  it('should display a page title', () => {
    cy.get('.ow-cities-list-title span');
  });

  describe('City card', () => {
    cities.forEach(city => {
      describe(`${city.name} card`, () => {
        beforeEach(() => {
          cy.visit('/');
        });
        it('should contains the name of the city', () => {
          cy.contains(city.name);
        });

        it('should contains a link to the city forecast detail', () => {
          cy.get(`.ow-city-card-link[href="/cities/${city.id}"]`);
        });

        it(`should go to ${city.name} forecast`, () => {
          cy.contains(city.name).click();
        });
      });
    });
  });
});
