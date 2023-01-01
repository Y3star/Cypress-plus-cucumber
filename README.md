# Cypress-plus-cucumber

**Download git repository and use install node modules**
```console
git clone {repository URL}
```
**and**
```console
npm install
```
**Now you can open Cypress from your project root one of the following ways:**

**Note:** npx is included with npm > v5.2 or can be installed separately.
**To open cypress in visial mode run command in console**
```console
npx cypress open
```
**To run in headless mode you must run command**
```console
npx cypress run
```
**If you want to run test with allure-report**
```console
npx cypress run --env allure=true
```
**If you want see result in chrome etc.**
```console
allure serve allure-results
```
**How look like allure report**

![](https://i.imgur.com/ncUiYmi.png)