Feature: Add request
  As a propagator
  I want to add a request

  Scenario: Add a valid request
    Given I'm in the homepage
    And I'm not logged in
    And I log in as "propagator" with password "password"
    When I click the "Requests" dropdown
    And I click the requests "List" dropdown-item
    And I click the request Add button
    And I fill the form with
      | FIELD    | VALUE       |
      | amount   | 10          |
      | weight   | 20          |
      | location | Lleida      |
    And I click the Submit button
    Then The request is created

  