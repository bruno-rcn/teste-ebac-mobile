import { $ } from '@wdio/globals'

class SignupPage {

    get firstName(){
        return $('id:firstName')
    }

    get lastName(){
        return $('id:lastName')
    }

    get phoneNumber(){
        return $('id:phone')
    }

    get emailAdress(){
        return $('id:email')
    }

    get password(){
        return $('id:password')
    }

    get reenterPassword(){
        return $('id:repassword')
    }

    get btnCreate(){
        return $('id:create')
    }

    async Cadastro(firstName, lastName, phoneNumber, emailAdress, password, reenterPassword){
        await this.firstName.setValue(firstName)
        await this.lastName.setValue(lastName)
        await this.phoneNumber.setValue(phoneNumber)
        await this.emailAdress.setValue(emailAdress)
        await this.password.setValue(password)
        await this.reenterPassword.setValue(reenterPassword)
        await this.btnCreate.click()
    }
}

export default new SignupPage();
