Feature: Login to Calvin Klein website
    As a user
    I want to be able to login to the website
    So that I can access my account and make purchases

    Scenario: Login with valid credentials
        Given I am on the Calvin Klein homepage
        When I click on the "My Account" link
        And I enter valid email and password
        And I click on the "Sign In" button
        Then I should be logged in





Feature: The Calvin Klein web site

  Scenario Outline: As a user, I can log into the secure area

    Given I am on the login page
    When I login with <username> and <password>
    Then I should see a flash message saying <message>

    Examples:
      | username | password            | message                        |
      | tomsmith | SuperSecretPassword! | You logged into a secure area! |
      | foobar   | barfoo               | Your username is invalid!      |
