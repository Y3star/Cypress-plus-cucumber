import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { mainPage } from "@pages/MainPage";


//remark: Cypress' default behavior of checking that the element is visible, clickable and auto scroll to element

Given("User open site telnyx.com and close cookies window", () => {
    mainPage.goto();
});
When("Check elements is visible in main menu?", () => {
    mainPage.elements.mainMenu().should("be.visible");
    //mainPage.getElement(mainPage.mainMenu).should("be.visible")
});
When("Check elements is visible in product blocks.", () => {
    mainPage.elements.productBlock().should("be.visible");
});
When("Check elements contains attribute in product blocks.", () => {
    mainPage.elements.productBlock().should("have.attr", "href");
});
When("Items are visible and clickable in the product menu.", () => {
    mainPage.elements.bottomProductMenu().should("be.visible");
    mainPage.elements.bottomProductMassive().should("be.visible")

});
When("Items are visible and clickable in the resources menu.",()=>{
    mainPage.elements.bottomResourcesMenu().should("be.visible");
    mainPage.elements.bottomResourcesMassive().should("be.visible")
})
When("Items are visible and clickable in the customer blocks.",()=>{
    mainPage.elements.bottomPricingMenu().should("be.visible");
    mainPage.elements.bottomProductMassive().should("be.visible")
})
///////////
When("User type email {string} in input on main page",(text)=>{
    mainPage.typeInput(text)
    mainPage.elements.inputEmailMainPage().type("{enter}");
})
///////////
Then("Assert all title in header menu.", (table) => {
    table.rows().forEach((row) => {
        cy.log(row);
        mainPage.elements.mainMenu().should("contain", row);
        //mainPage.getElement(mainPage.mainMenu).should("contain", row);
    });
});
Then("Assert product blocks.", (table) => {
    table.rows().forEach((row) => {
        cy.log(row);
        mainPage.elements.productBlock().should("contain", row);
    });
});
Then("Assert product menu.", (table) => {
    table.rows().forEach((row) => {
        cy.log(row);
        mainPage.elements.bottomProductMenu().should("contain", row);
    });
});
Then("Assert resources menu.",(table)=>{
    table.rows().forEach((row) => {
        cy.log(row);
        mainPage.elements.bottomResourcesMenu().should("contain", row);
    });
})
Then("Assert pricing menu.",(table)=>{
    table.rows().forEach((row) => {
        cy.log(row);
        mainPage.elements.bottomPricingMenu().should("contain", row);
    });
})

Then("The url will contains the subdirectory {string}", () => {
    cy.url().should("contains", "https://telnyx.com/sign-up?email=fake@gmail.com");
  });