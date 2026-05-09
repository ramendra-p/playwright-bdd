Feature: User Authentication

  Background:
    Given I am on the login page

  @smoke @regression
  Scenario Outline: Login with various user personas
    When I login with username "<username>" and password "<password>"
    Then I should see the inventory page

    Examples:

      | username                | password     |
      | standard_user           | secret_sauce |
      | problem_user            | secret_sauce |
      | performance_glitch_user | secret_sauce |