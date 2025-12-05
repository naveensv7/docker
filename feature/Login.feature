Feature: This is to check login functionality

  Background: User should be in Login page

  Scenario: Validate the Login credentials
    Given User Should be in "https://practicetestautomation.com/practice-test-login/"
    Given user enters username
    And Enters the password
    Then User Should click on Login btn
    Then User Should logged in
