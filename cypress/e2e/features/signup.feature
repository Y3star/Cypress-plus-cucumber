Feature: Sign Up page

    Feature Sign Up page will work depending on the user credentials.

    Background:
        Given User open site telnyx.com and close cookies window and click to Sign Up
    Scenario: Success Sign Up
        When A user enters the email "fake@gmail.com",the full name "Albo Tedjin", the password "123871Qw!qw!",clicks on check box and clicks on the create account
        Then All fields are valid on sign up page then screenshot page
    Scenario: Incorrect Email Sign Up
        When The user enters incorrect data and clicks the create account button
            | email          | fullname | password     |
            | fake gmail.com | Not Fake | 112233QwZx!z |
        Then The error message email "Please enter a valid email address." is displayed on page sign up
    Scenario: Incorrect Full Name Sign Up
        When The user enters incorrect data and clicks the create account button
            | email          | fullname | password     |
            | fake@gmail.com |          | 112233QwZx!z |
        Then The error message full name "This field is required." is displayed on page sign up
    Scenario: Incorrect Password Sign Up
        When The user enters incorrect data and clicks the create account button
            | email          | fullname | password |
            | fake@gmail.com | Not Fake | 11       |
        Then The error message password is displayed on page sign up
            | error message                          |
            | Be at least 12 characters long         |
            | Contain at least one number            |
            | Contain at least one symbol            |
            | Contain at least one upper-case letter |
