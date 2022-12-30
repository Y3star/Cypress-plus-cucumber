import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "@pages/LoginPage";
import { mainPage } from "@pages/MainPage";

Given(
    "User open site telnyx.com and close cookies window and click to Log In",
    () => {
        mainPage.goto();
        mainPage.clickLink(mainPage.logInBtn);
    }
);

When(
    "A user enters the email {string}, the password {string},clicks on check box and clicks on the login button",
    (email, password) => {
        loginPage.submitLogin(email, password);
    }
);

When("The user enters incorrect data and clicks the login button", (table) => {
    table.hashes().forEach((row) => {
        cy.log(row.email);
        cy.log(row.password);
        loginPage.submitLogin(row.email, row.password);
    });
});
Then("All fields are valid on login page then screenshot page", () => {
    loginPage.screenshotElement();
});

Then(
    "The error message email {string} is displayed on login page",
    (errorMessageEmail) => {
        loginPage.elements
            .errorMessageEmail()
            .should("have.text", errorMessageEmail);
    }
);

Then(
    "The error message password {string} is displayed on login page",
    (errorMessagePass) => {
        loginPage.elements
            .errorMessagePass()
            .should("have.text", errorMessagePass);
    }
);
