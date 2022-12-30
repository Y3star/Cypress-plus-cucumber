Feature: Login page

    Feature Login page will work depending on the user credentials.

    Background:
        Given User open site telnyx.com and close cookies window and click to Log In
    Scenario: Success Login
        When A user enters the email "fake@gmail.com", the password "150871Qw!qw!",clicks on check box and clicks on the login button
        Then All fields are valid on login page then screenshot page
    Scenario: Incorrect Email Login
        When The user enters incorrect data and clicks the login button
            | email    | password      |
            | fake gma | 152345qw!w231 |
        Then The error message email "Please enter a valid email address." is displayed on login page
    Scenario: Incorrect Password Login
        When The user enters incorrect data and clicks the login button
            | email          | password     |
            | fake@gmail.com | 12           |
        Then The error message password "That email and password combination is not valid, or your browser could not be authenticated via recaptcha. Please try again." is displayed on login page