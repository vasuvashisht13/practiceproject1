import { test, expect } from '@playwright/test';

test.describe('Practice', () => {

    
    test('first test', async ({ page }) => {
        await page.goto('https://www.zulutrade.com');
        await page.locator('.linkBtn.mobLogin.d-flex.align-items-center.me-3.me-md-4').click();

        // Add an assertion or further steps here if needed
    });

    test('second case', async ({page}) => {
        await page.goto('https://demoqa.com/text-box');
        await page.locator('#userName').fill("Vasu");
        await page.locator('#userEmail').fill("Vasu");
    })

    test('third case', async ({page}) => {
        await page.goto('https://demoqa.com/checkbox');
        await page.locator('#label[for=tree-node-home]').check()
    })


    test('fourth case', async ({ page }) => {
        await page.goto('https://demoqa.com/checkbox');

        // Locate the actual checkbox and check it
        const homeCheckbox = page.locator('');
        await homeCheckbox.check();

        // Verify the checkbox is checked
        await expect(homeCheckbox).toBeChecked();
    });

    test('clicks action', async ({ page }) => {
        await page.goto('https://demoqa.com/buttons');
        await page.locator('//button[@id="doubleClickBtn"]').dblclick();


        await expect(page.locator('p[id="doubleClickMessage"]')).toHaveText('You have done a double click');
    });

    test('rightclick', async({ page }) =>{
        await page.goto('https://demoqa.com/buttons');
        await page.locator("//button[@id='rightClickBtn']").click({ button: 'right' });
        await expect(page.locator("//p[@id='rightClickMessage']")).toHaveText('You have done a right click');
    })

    test('printing links', async ({ page }) => {
        await page.goto('https://demoqa.com/links');
    
        // Find all <a> elements using XPath
        const links = await page.locator('p a').all();
    
        // Loop through each link and print only the text (name)
        for (const link of links) {
            const text = await link.innerText();
            console.log(text);
        }
    });

   
    test('Verify broken link (500 status)', async ({ page }) => {
        await page.goto('https://demoqa.com/broken');

        const url = await page.getAttribute("a[href='http://the-internet.herokuapp.com/status_codes/500']", 'href');
        if (url) {
            const response = await page.request.get(url);
            expect(response.status()).toBe(500); // Assert HTTP 500 error
        }
    });


    test('dynamic element', async ({page}) => {
        await page.goto('https://demoqa.com/dynamic-properties');
        const dyn_element = page.locator('#enableAfter');
        await expect (dyn_element).toBeEnabled({timeout: 5000});
        await dyn_element.click()
    })


    test('dropdown with select option', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/dropdown');
        await page.locator('#dropdown').selectOption('1');
        await expect(page.locator('#dropdown')).toHaveValue('1');
    });

    test('new tab verification', async ({ page }) => {
        await page.goto('https://demoqa.com/browser-windows');
        const [newPage] = await Promise.all([
            page.waitForEvent('popup'),
            page.locator('#tabButton').click(),
        ]);
        await newPage.waitForLoadState();
        expect(await newPage.textContent('body')).toContain('This is a sample page');
        await newPage.close();
    });
    
    

});
