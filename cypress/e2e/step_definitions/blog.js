import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { blogPage } from "@pages/BlogPage";

Given("User open site {string} and close cookeis", (url) => {
    cy.visit(url);
    cy.get('[aria-label="close and deny"]').click();
});
When("User type incorrect word {string} in input search.", (text) => {
    blogPage.typeInput(text);
    blogPage.elements.blogInput().type("{enter}");
});
When("User type correct word {string} in input search.", (text) => {
    blogPage.typeInput(text);
    blogPage.elements.blogInput().type("{enter}");
});
Then("User see negative message {string}", (text) => {
    blogPage.elements.NegativeResultSearch().should("have.text", text);
});
Then("User see positive message {string}", (text) => {
    blogPage.elements.PositiveResultSearch().should("have.text", text);
});
