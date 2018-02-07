Feature: Pontevedra Forecast

  I want to see Pontevedra forecast

  Scenario: See Pontevedra forecast
    Given The Open Weather Map page opened
    When I click "Pontevedra" card
    Then I see "Pontevedra" forecast
    And I see "Temperature" chart
    And I see "Humidity" chart
    And I see "Precipitations" chart
