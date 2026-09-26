Feature: Validate Display Employees Using GET Http Method

  Scenario: Verify display Employees using GET HTTP Method
    Given I execute authentication using authenticate POST HTTP Method
    When I execute GET Employees using GET HTTP Method
    When I find the all Employees response
    Then I find 200 status Code