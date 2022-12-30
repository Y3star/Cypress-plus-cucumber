import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { mainPage } from "@pages/MainPage";
import { signUpPage } from "@pages/SignUpPage";

Given(
    "User open site telnyx.com and close cookies window and click to Sign Up",
    () => {
        mainPage.goto();
        mainPage.clickLink(mainPage.SignInBtn);
    }
);
When(
    "A user enters the email {string},the full name {string}, the password {string},clicks on check box and clicks on the create account",
    (email, fullname, password) => {
        signUpPage.submitSignUp(email, fullname, password);
    }
);
When(
    "The user enters incorrect data and clicks the create account button",
    (table) => {
        table.hashes().forEach((row) => {
            cy.log(row.email);
            cy.log(row.fullname);
            cy.log(row.password);
            signUpPage.submitSignUp(row.email, row.fullname, row.password);
        });
    }
);

Then("All fields are valid on sign up page then screenshot page", () => {
    signUpPage.screenshotElement(); // we have error because i have block all my account its normal =)
});

Then(
    "The error message email {string} is displayed on page sign up",
    (errorEmail) => {
        signUpPage.elements.errorEmail().should("have.text", errorEmail);
    }
);

Then(
    "The error message full name {string} is displayed on page sign up",
    (errorFullName) => {
        signUpPage.elements.errorFullName().should("have.text", errorFullName);
    }
);

Then("The error message password is displayed on page sign up", (table) => {
    table.rows().forEach((row) => {
        cy.log(row);
        signUpPage.elements.errorPass().should("contain", row);
    });
});
