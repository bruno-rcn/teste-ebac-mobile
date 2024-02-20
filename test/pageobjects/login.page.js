import { $ } from '@wdio/globals'


class LoginPage {

    get email(){
        return $('id:email')
    }

    get senha(){
        return $('id:password')
    }

    get btnLogin(){
        return $('~Login')
    }

    get btnSignup(){
        return $('//android.widget.TextView[@text="Sign up"]')
    }

    async login(email, senha){
        await this.email.setValue(email)
        await this.senha.setValue(senha)
        await this.btnLogin.click()
    }

    async Signup(){
        await this.btnSignup.click()
    }
}

export default new LoginPage();
