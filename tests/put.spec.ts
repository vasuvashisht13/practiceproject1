import { test, expect } from '@playwright/test';

test('api testing put request', async ({ request }) => {
    const respPut = await request.put("https://restful-booker.herokuapp.com/booking/1", {
        headers: {
            'Authorization': 'Basic YWRtaW46cGFzc3dvcmQxMjM=',
            'Content-Type': 'application/json'
        },
        data: {
            firstname: "Vasu",
            lastname: "Vashisht",
            totalprice: 999,
            depositpaid: true,
            bookingdates: {
                checkin: "2018-01-01",
                checkout: "2019-01-01"
            },
            additionalneeds: "Breakfast"
        }
    });

    expect(respPut.status()).toBe(200);
    const jsonresp = await respPut.json();
    console.log(jsonresp);
});
