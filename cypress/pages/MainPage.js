class MainPage {
    logInBtn = "header div a:nth-child(4)";
    SignInBtn = 'ul li:nth-child(2) [href="/sign-up"]'; //ul>li>div>a.sign-up-link

    elements = {
        mainMenu: () => cy.get("header ul > li > span"),
        productBlock: () => cy.get("main ul > li  a"),
        customerBlock: () => cy.get("main article > div:first-child"),
        bottomProductMenu: () =>
            cy.get('[data-e2e="Footer--navItem-products"] ul'),
        bottomResourcesMenu: () =>
            cy.get('[data-e2e="Footer--navItem-resources"] ul'),
        bottomPricingMenu: () =>
            cy.get('[data-e2e="Footer--navItem-pricing"] ul'),
        bottomProductMassive: () =>
            cy.get('[data-e2e*="products"] ul > li').each(() => {}), 
        bottomResourcesMassive: () =>
            cy.get('[data-e2e*="resources"] ul > li').each(() => {}), 
        bottomPricingMassive: () =>
            cy.get('[data-e2e*="pricing"] ul > li').each(() => {}), 
        inputEmailMainPage: () => cy.get('[type="email"]'),
    };
    goto() {
        cy.visit("/");
        cy.wait(200);
        cy.get('[aria-label="close and deny"]').click();
    }
    clickLink(selector) {
        cy.get(selector).click();
    }
    typeInput(text) {
        this.elements.inputEmailMainPage().type(text)
    }

    //// just try without constructor ////
    //mainMenu = "header ul > li > span"

    // getElement(selector) {
    //     return cy.get(selector);
    // }
}

export const mainPage = new MainPage();
