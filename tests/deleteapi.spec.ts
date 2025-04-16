import { test, expect } from '@playwright/test';

test("delete api testing", async ({ request }) => {
    const response = await request.delete('https://restful-booker.herokuapp.com/booking/1', {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Basic YWRtaW46cGFzc3dvcmQxMjM="
        }
    });

    // Optionally assert response status
    expect(response.status()).toBe(201); // Adjust expected status as needed
    const reqdel = await response.text();
    console.log(reqdel);
    await expect(reqdel).toEqual('Created');
});
