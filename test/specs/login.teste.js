import { expect, driver } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import loginPage from '../pageobjects/login.page.js'
import profilePage from '../pageobjects/profile.page.js'
import signupPage from '../pageobjects/signup.page.js'


describe('Funcionalidade: Login', () => {
    it('Deve fazer login com sucesso', async () => {
        await homePage.openMenu('profile')
        await loginPage.login('cliente@ebac.art.br', 'GD*peToHNJ1#c$sgk08EaYJQ')
        await homePage.openMenu('profile')
        expect((await profilePage.profileName('EBAC Cliente')).isDisplayed()).toBeTruthy()
        await driver.pause(3000)
    })

    it('Deve fazer cadastro com sucesso', async () => {
        await homePage.openMenu('profile')
        await loginPage.Signup()
        await signupPage.Cadastro('Bruno', 'Noberto', '956518678', 'brunorcnoberto@teste.com', '123456', '123456')
        await homePage.openMenu('profile')
        expect((await profilePage.profileName('Bruno Noberto')).isDisplayed()).toBeTruthy()
        await driver.pause(3000)
    })
})

