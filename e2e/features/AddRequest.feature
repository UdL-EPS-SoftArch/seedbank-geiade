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

  Scenario: Add a request with invalid amount
    Given I'm in the homepage
    And I'm not logged in
    And I log in as "propagator" with password "password"
    When I click the "Requests" dropdown
    And I click the requests "List" dropdown-item
    And I click the request Add button
    And I fill the form with
      | FIELD    | VALUE       |
      | amount   | a           |
      | weight   | 20          |
      | location | Lleida      |
    Then The "Submit" button is disabled
    And I see input field feedback message "An amount is required and must be a number"

  Scenario: Add a request with invalid weight
    Given I'm in the homepage
    And I'm not logged in
    And I log in as "propagator" with password "password"
    When I click the "Requests" dropdown
    And I click the requests "List" dropdown-item
    And I click the request Add button
    And I fill the form with
      | FIELD    | VALUE       |
      | amount   | 21          |
      | weight   | a           |
      | location | Lleida      |
    Then The "Submit" button is disabled
    And I see input field feedback message "A weight is required and must be a number"

  Scenario: Add a request with invalid location
    Given I'm in the homepage
    And I'm not logged in
    And I log in as "propagator" with password "password"
    When I click the "Requests" dropdown
    And I click the requests "List" dropdown-item
    And I click the request Add button
    And I fill the form with
      | FIELD    | VALUE       |
      | amount   | 20          |
      | weight   | 20          |
      | location | L           |
    And I click the Submit button
    Then I see error message "Request location: length must be between 2 and 30"

  Scenario: Add a request as a user that is not a propagator
    Given I'm in the homepage
    And I'm not logged in
    And I log in as "demo" with password "password"
    When I click the "Requests" dropdown
    And I click the requests "List" dropdown-item
    And I click the request Add button
    And I fill the form with
      | FIELD    | VALUE       |
      | amount   | 20          |
      | weight   | 20          |
      | location | Lleida           |
    And I click the Submit button
    Then I see error message "by is marked non-null but is null"