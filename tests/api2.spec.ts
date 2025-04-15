import { test, request, APIRequestContext } from '@playwright/test';

let reqContext2: APIRequestContext;

// Declare the base URL before all tests
test.beforeAll(async () => {
    reqContext2 = await request.newContext({
        baseURL: "https://restful-booker.herokuapp.com/",
        extraHTTPHeaders:{
            Accept: "application/json"        // third way to provide header by using beforeall  
        }
    });
});

test("api request get type 1", async () => {
    const reqContext = await request.newContext();  // Create a new request context
    const resp1 = await reqContext.get("https://restful-booker.herokuapp.com/booking", {
        headers: {
            Accept: "application/json"       // First way to provide the header
        }
    });
    console.log(await resp1.json());
});

test("api request get type 2", async () => {
    const reqContext = await request.newContext({ 
        baseURL: "https://restful-booker.herokuapp.com/",
        extraHTTPHeaders: {               
            Accept: "application/json"           // second way to provide header by using extrahtpheader
        }
    });
    const resp1 = await reqContext.get("/booking");
    console.log(await resp1.json());
});

test("api request get type 3", async () => {
    const resp1 = await reqContext2.get('/booking');
    console.log(await resp1.json());
});


test.only("api request get type 5", async ({request}) => {
    const resp1 = await request.get("/booking/2402");  // third way in whcih the header were mentioned in playwright.config.ts file
    console.log(await resp1.json());
});

