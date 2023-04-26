Feature: Add donation
  As a donor
  I want to add a donation

  Scenario: Add a valid donation
    Given I'm in the homepage
    And I'm not logged in
    And I log in as "userdonor" with password "password"
    When I click the "Donations" dropdown
    And I click the "List" dropdown-item
    And I click the "Add" button
    And I fill the form with
      | FIELD    | VALUE       |
      | amount   | 10          |
      | weight   | 20          |
      | location | Lleida      |
    And I click the Submit button
    Then The donation is created

  Scenario: Add a donation with invalid amount
    Given I'm in the homepage
    And I'm not logged in
    And I log in as "userdonor" with password "password"
    When I click the "Donations" dropdown
    And I click the "List" dropdown-item
    And I click the "Add" button
    And I fill the form with
      | FIELD    | VALUE       |
      | amount   | a           |
      | weight   | 20          |
      | location | Lleida      |
    Then The "Submit" button is disabled
    And I see input field feedback message "An amount is required and must be a number"

  Scenario: Add a donation with invalid weight
    Given I'm in the homepage
    And I'm not logged in
    And I log in as "userdonor" with password "password"
    When I click the "Donations" dropdown
    And I click the "List" dropdown-item
    And I click the "Add" button
    And I fill the form with
      | FIELD    | VALUE       |
      | amount   | 21          |
      | weight   | a           |
      | location | Lleida      |
    Then The "Submit" button is disabled
    And I see input field feedback message "A weight is required and must be a number"