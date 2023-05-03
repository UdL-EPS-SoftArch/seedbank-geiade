Feature: Add take
  As a propagator
  I want to add a take

  Scenario: Add a valid take
    Given I'm in the homepage
    And I'm not logged in
    And I log in as "propagator" with password "password"
    When I click the "Takes" dropdown
    And I click the "List" take-dropdown
    And I click the Add take button
    And I fill the form with
      | FIELD    | VALUE       |
      | amount   | 5           |
      | weight   | 15          |
      | location | Barcelona   |
    And I click the Submit button
    Then The take is created

  Scenario: Add a take with invalid amount
    Given I'm in the homepage
    And I'm not logged in
    And I log in as "propagator" with password "password"
    When I click the "Takes" dropdown
    And I click the "List" take-dropdown
    And I click the Add take button
    And I fill the form with
      | FIELD    | VALUE       |
      | amount   | xx          |
      | weight   | 15          |
      | location | Barcelona   |
    Then The "Submit" button is disabled
    And I see input field feedback message "An amount is required and must be a number"

  Scenario: Add a Take with invalid weight
    Given I'm in the homepage
    And I'm not logged in
    And I log in as "propagator" with password "password"
    When I click the "Takes" dropdown
    And I click the "List" take-dropdown
    And I click the Add take button
    And I fill the form with
      | FIELD    | VALUE       |
      | amount   | 5           |
      | weight   | xx          |
      | location | Barcelona   |
    Then The "Submit" button is disabled
    And I see input field feedback message "A weight is required and must be a number"

  Scenario: Add a take with invalid location
    Given I'm in the homepage
    And I'm not logged in
    And I log in as "propagator" with password "password"
    When I click the "Takes" dropdown
    And I click the "List" take-dropdown
    And I click the Add take button
    And I fill the form with
      | FIELD    | VALUE       |
      | amount   | 5           |
      | weight   | 15          |
      | location | B           |
    And I click the Submit button
    Then I see error message "Take location: la longitud debe estar entre 2 y 30"

  Scenario: Add a Take as a user that is not a propagator
    Given I'm in the homepage
    And I'm not logged in
    And I log in as "demo" with password "password"
    When I click the "Takes" dropdown
    And I click the "List" take-dropdown
    And I click the Add take button
    And I fill the form with
      | FIELD    | VALUE       |
      | amount   | 5           |
      | weight   | 15          |
      | location | Barcelona   |
    And I click the Submit button
    Then I see error message "Take by: no debe ser nulo"