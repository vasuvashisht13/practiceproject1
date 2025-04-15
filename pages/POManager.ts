import { Page, expect } from '@playwright/test';
import { LoginPage } from './LoginPage';



export class POManager{
    private loginPage: LoginPage;


    constructor(private page: Page) {
        this.loginPage = new LoginPage(page);
    }


    //Login functionality
    getloginPage(): LoginPage{
        return this.loginPage
    }

}




