class SignUpPage {
    elements = {
        emailInput: () => cy.get("#email"),
        passwordInput: () => cy.get("#password"),
        fullNameInput: () => cy.get("#full_name"),
        checkBoxIAgree: () => cy.get('[aria-labelledby="terms-label"] rect'), //".sc-26f7330-5.lBxvj rect"; //old selector
        checkBoxIWant: () =>
            cy.get('[aria-label="signup-form"] div:nth-child(2) rect'), //".sc-25ef9dc0-0.qPmCp rect"; //old selector
        createAcc: () => cy.get('div button[type="submit"]'),
        errorEmail: () => cy.get("#email_error"),
        errorPass: () => cy.get("#password_requirements"),
        errorFullName: () => cy.get("#full_name_error"),
        wholeDiv: () => cy.get('[aria-label="signup-form"]'),
    };

    screenshotElement() {
        this.elements.wholeDiv().screenshot("all-valid-sign-up");
    }

    submitSignUp(email, fullname, password) {
        this.elements.emailInput().type(email);
        this.elements.fullNameInput().type(fullname != "" ? fullname : " ");
        this.elements.passwordInput().type(password);
        this.elements.checkBoxIAgree().click();
        this.elements.checkBoxIWant().click();
        this.elements.createAcc().click();
    }
}

export const signUpPage = new SignUpPage();
