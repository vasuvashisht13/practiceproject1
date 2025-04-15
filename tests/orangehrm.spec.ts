import { test , expect , Locator} from '@playwright/test';

import { POManager } from '../pages/POManager';

test.describe('OrangeHRM Login Test', () => {
    test('Login Test', async ({ page }) => {
        const poManager = new POManager(page);
        const loginPage = poManager.getloginPage();
        await loginPage.goto();
        await loginPage.login('Admin', 'admin123');
        await loginPage.exptloginresult();
    });
})