import { test, expect } from '@playwright/test';
import ApiJson from "../testdata/apidata.json";


test('api testing put request', async ({ request }) => {
    const respPut = await request.put("https://restful-booker.herokuapp.com/booking/1", {
        headers: {
            'Authorization': 'Basic YWRtaW46cGFzc3dvcmQxMjM=',
            'Content-Type': 'application/json'
        },
        data: ApiJson.putcalldata
    });

    expect(respPut.status()).toBe(200);
    const jsonresp = await respPut.json();
    console.log(jsonresp);
    expect(respPut.ok()).toBeTruthy();
    expect(jsonresp).toMatchObject(ApiJson.putcalldata)

      expect(jsonresp.additionalneeds).toEqual(ApiJson.putcalldata.additionalneeds);

});

test('api get request to verify data', async({request}) =>{
    const respget = await request.get('https://restful-booker.herokuapp.com/booking/1');
    const jsondata = await respget.json();
    console.log(jsondata);

    expect(jsondata).toMatchObject(ApiJson.putcalldata);
})
