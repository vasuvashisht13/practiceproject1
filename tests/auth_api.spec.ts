// import { test, expect } from '@playwright/test';

// let tokenvalue: any;

// test.beforeAll('basic auth api testing', async ({ request }) => {

//     const resptoken = await request.post('https://restful-booker.herokuapp.com/auth',{
//             data: {
//                 "username" : "admin",
//                 "password" : "password123"
//             }
//         })

//     tokenvalue = (await resptoken.json()).token
//     console.log(tokenvalue);
  
// })

// test('authentication of put call using basic auth', async ({ request }) => {
//     const resput = await request.put('https://restful-booker.herokuapp.com/booking/1',{
//         headers: {
//             Cookie: "token=" + tokenvalue
//         },
//         data: {
//             "firstname" : "Rishbh",
//             "lastname" : "Brown",
//             "totalprice" : 111,
//             "depositpaid" : true,
//             "bookingdates" : {
//                 "checkin" : "2018-01-01",
//                 "checkout" : "2019-01-01"
//             },
//             "additionalneeds" : "Breakfast"
//         }
//     });
//     expect(resput.status()).toBe(200); 
// })



import { test, expect } from '@playwright/test';

let tokenvalue: any;

test.beforeAll('basic auth api testing', async ({ request }) => {
    const resptoken = await request.post('https://restful-booker.herokuapp.com/auth', {
        data: {
            "username": "admin",
            "password": "password123"
        },

        headers: {
            "Content-Type": "application/json"
        }
    });

    const responseBody = await resptoken.json();
    tokenvalue = responseBody.token;
});


test('authentication of put call using basic auth', async ({ request }) => {
    const resput = await request.put('https://restful-booker.herokuapp.com/booking/1',{
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Cookie: "token=" + tokenvalue
        },
        data: {
            "firstname" : "Rishbh",
            "lastname" : "Brown",
            "totalprice" : 111,
            "depositpaid" : true,
            "bookingdates" : {
                "checkin" : "2018-01-01",
                "checkout" : "2019-01-01"
            },
            "additionalneeds" : "Breakfast"
        }
    });
    expect(resput.status()).toBe(200); 
})


































// test ('authorization api testing', async ({ request }) => {

//     const reqput = await request.put('https://restful-booker.herokuapp.com/booking/1', {
//         headers: {
//             Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM="
//             },

//         data: {
//             "firstname" : "Rishbh",
//             "lastname" : "Brown",
//             "totalprice" : 111,
//             "depositpaid" : true,
//             "bookingdates" : {
//                 "checkin" : "2018-01-01",
//                 "checkout" : "2019-01-01"
//             },
//             "additionalneeds" : "Breakfast"
//         }
//     })
// })

