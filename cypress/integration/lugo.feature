Feature: Lugo Forecast

  I want to see Lugo forecast

  Scenario: See Lugo forecast
    Given The Open Weather Map page opened
    When I click "Lugo" card
    Then I see "Lugo" forecast
    And I see "Temperature" chart
    And I see "Humidity" chart
    And I see "Precipitations" chart
