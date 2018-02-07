Feature: A Coruna Forecast

  I want to see A Coruna forecast

  Scenario: See A Coruna forecast
    Given The Open Weather Map page opened
    When I click "A Coruna" card
    Then I see "A Coruna" forecast
    And I see "Temperature" chart
    And I see "Humidity" chart
    And I see "Precipitations" chart

