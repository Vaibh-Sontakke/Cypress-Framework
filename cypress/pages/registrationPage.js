export class RegistrationPage{

    // defining locaters
    firstName ='#input-firstname'
    lastName = '#input-lastname'
    email = '#input-email'
    telephone = '9011391404'
    password = '#input-password'
    passConfirm = '#input-confirm'
    newletterCheckbox = "input[value='1'][name='newsletter']"
    agreeTerms = "input[value='1'][type='checkbox']"
    submit = "input[value='Continue'][type='submit']"


    // Mehtods

    openURL(){
        cy.visit(Cypress.env('URL'))
    }

    firstname(){
        cy.get(this.firstName).type(Fname)
    }

    enterlastName(LName) {

        cy.get(this.lastName).type(LName)
    }
    enterEmail(email) {

        cy.get(this.email).type(email)
    }
    enterTelephone(phoneNo) {

        cy.get(this.telephone).type(phoneNo)
    }
    enterPassword(password) {

        cy.get(this.password).type(password)
        cy.get(this.passwordConfirm).type(password)

    }
    selectCheckbox() {

        cy.get(this.policyCheckbox).check()
    }
    clickOnContinue() {
        cy.get(this.continue).click()
    }


    }