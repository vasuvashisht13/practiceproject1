import {test ,expect} from '@playwright/test';
import ApiJson from "../testdata/apidata.json";

test('patch request', async ({ request }) => {
    const resppatch = await request.patch("https://restful-booker.herokuapp.com/booking/1", {
        headers:{
            'Authorization': "Basic YWRtaW46cGFzc3dvcmQxMjM=",
            'Content-Type': "application/json"
        },

        data: ApiJson.patchcalldata
    });

    const jsonresp = await resppatch.json();
    console.log(jsonresp);
    expect(resppatch.status()).toBe(200);
    await expect(resppatch.ok()).toBeTruthy();
    await expect(jsonresp.additionalneeds).toEqual('pumpkins');
    await expect(jsonresp).toMatchObject(ApiJson.patchcalldata)
})