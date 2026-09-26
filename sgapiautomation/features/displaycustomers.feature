Feature: Validate Display Customers Using GET Http Method

  Scenario: Verify display Cucustomers using GET HTTP Method
    Given I execute authentication using authenticate POST HTTP Method
    When I execute GET Customers using GET HTTP Method
    When I find the all customers response
    Then I find 200 status Code