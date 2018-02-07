Feature: Ourense Forecast

  I want to see Ourense forecast

  Scenario: See Ourense forecast
    Given The Open Weather Map page opened
    When I click "Ourense" card
    Then I see "Ourense" forecast
    And I see "Temperature" chart
    And I see "Humidity" chart
    And I see "Precipitations" chart
