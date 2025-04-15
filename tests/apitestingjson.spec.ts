import { test , expect } from "@playwright/test";
import ApiJson from "../testdata/apidata.json";

test('API Testing - POST call', async ({ request }) => {
  
  const response = await request.post('https://restful-booker.herokuapp.com/booking', {
    headers: {
      'Content-Type': 'application/json' 
    },
    data: ApiJson.postcalldata
  });

  console.log('Status:', response.status());
  const responseBody = await response.json();
  console.log('Response:', responseBody);
  expect(responseBody.booking).toMatchObject(ApiJson);
  expect(responseBody.booking.additionalneeds).toEqual(ApiJson.postcalldata.additionalneeds);
});
