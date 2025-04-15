import { test, expect } from '@playwright/test';
import { json } from 'stream/consumers';

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
    expect(respPut.ok()).toBeTruthy();
    expect(jsonresp).toMatchObject({
        firstname: 'Vasu',
        lastname: 'Vashisht',
        totalprice: 999,
        depositpaid: true,
        bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
        additionalneeds: 'Breakfast'
      })

      expect(jsonresp.additionalneeds).toEqual('Breakfast');

});

test('api get request to verify data', async({request}) =>{
    const respget = await request.get('https://restful-booker.herokuapp.com/booking/1');
    const jsondata = await respget.json();
    console.log(jsondata);

    expect(jsondata).toMatchObject({
        firstname: 'Vasu',
        lastname: 'Vashisht',
        totalprice: 999,
        depositpaid: true,
        bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
        additionalneeds: 'Breakfast'
      })
})
