Feature: A Coruna Forecast

  I want to see A Coruna forecast

  Scenario: Opening A Coruna forecast
    Given I open the Open Weather Map page
    When I click "A Coruna" card
    Then I see "A Coruna" forecast
