class LoginPage {
    elements = {
        emailInput: () => cy.get('[aria-label*="login"] [name="email"]'),
        passwordInput: () => cy.get('[aria-label*="login"] [name="password"]'),
        logInBtn: () => cy.get('[aria-label="loginForm"] button'),
        errorMessagePass: () =>
            cy.get('[data-testid="login.signin"] [type="error"] div span'),
        errorMessageEmail: () =>
            cy.get('[aria-label="loginForm"] label div > div:nth-child(2)'), //[class="TextField__ErrorMessage-sc-r5o2cn-5 iFEVFt"]  old selector
        errorMessage: () => cy.get('[data-testid="login.signin"]'),
        checkBox: () => cy.get('[data-icon="square"]'),
    };

    screenshotElement() {
        this.elements.errorMessage().screenshot("all-valid-login");
    }

    submitLogin(email, password) {
        this.elements.emailInput().type(email);
        this.elements.passwordInput().type(password);
        this.elements.checkBox().click();
        this.elements.logInBtn().click();
    }
}
export const loginPage = new LoginPage();
