import {RegistrationPage} from "../../pages/registrationPage"
const rpObj = new RegistrationPage()

import {registrationData} from "../../fixtures/registrationData.json"

describe('Test automation', ()=>{
    it('Registration Form', ()=>{

        rpObj.openURL()
        rpObj.firstName(registrationData.firstName)
        rpObj.lastName(registrationData.lastName)
        rpObj.email(registrationData.email)
        rpObj.enterTelephone(registrationData.telephone)
        rpObj.password(registrationData.password)
        rpObj.selectCheckbox()
        rpObj.clickOnContinue()

    })
})
