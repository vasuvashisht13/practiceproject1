import {test ,expect} from '@playwright/test';

test('fetch and validate response header', async({ request }) => {
   const getresponse = await request.get("/booking/1")
   const headervalue = getresponse.headers();
   console.log(headervalue);
   expect(headervalue.server).toEqual('Cowboy');
   expect(headervalue["x-powered-by"]).toEqual('Express');

   console.log("*****************************************");
   const headersArrayValues = getresponse.headersArray();
   console.log(headersArrayValues);
   expect(headersArrayValues.length).toBe(11);
   headersArrayValues.forEach((header) => {
      console.log(`${header.name}: ${header.value}`);
   });

});