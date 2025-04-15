import { Page , expect , Locator} from '@playwright/test';


export class LoginPage{
    private usernameLocator: Locator;
    private passwordLocator: Locator;
    private loginLocator: Locator;
    private expctLocator: Locator;


    constructor(private page: Page) {
        this.usernameLocator = this.page.locator("input[name='username']");
        this.passwordLocator = this.page.locator("input[name='password']");
        this.loginLocator = this.page.locator("button[class='oxd-button oxd-button--medium oxd-button--main orangehrm-login-button']");
        this.expctLocator = this.page.locator("span[class='oxd-userdropdown-tab']");
    }

    async goto(){
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    async login(username: string, password: string){
        await this.usernameLocator.fill(username);
        await this.passwordLocator.fill(password);
        await this.loginLocator.click();
    }

    async exptloginresult(){
        await expect(this.expctLocator).toContainText('manda XaatiCLKKo');
    }

}