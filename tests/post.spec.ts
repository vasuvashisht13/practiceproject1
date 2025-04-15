import { test , expect } from "@playwright/test";

// Test to validate a POST API call to create a booking
test('API Testing - POST call', async ({ request }) => {
  // Sending a POST request to create a new booking
  const response = await request.post('https://restful-booker.herokuapp.com/booking', {
    headers: {
      'Content-Type': 'application/json'  // Setting content type as JSON
    },
    data: {
      firstname: "Jim",
      lastname: "Brown",
      totalprice: 111,
      depositpaid: true,
      bookingdates: {
        checkin: "2018-01-01",
        checkout: "2019-01-01"
      },
      additionalneeds: "Breakfast"
    }
  });

  // Logging the response status code
  console.log('Status:', response.status());

  // Parsing and logging the response body as JSON
  const responseBody = await response.json();
  console.log('Response:', responseBody);

  // Asserting that the response contains the correct booking information
  expect(responseBody.booking).toMatchObject({
    firstname: 'Jim',
    lastname: 'Brown',
    totalprice: 111,
    depositpaid: true,
    bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
    additionalneeds: 'Breakfast'
  });

  // Additional assertion for a specific field
  expect(responseBody.booking.additionalneeds).toEqual('Breakfast'); 
});

// Test to validate API call for adding an item to cart
// To get this API: Go to browser DevTools > Network tab > XHR > click `addtocart` > view Payload > View source > Copy the curl, use its data here
test('api with ui verification', async({ request }) => {
  // Sending POST request to add a product to cart using hardcoded payload
  const resp2 = await request.post('https://api.demoblaze.com/addtocart', {
    data: {
      "id": "6e46853e-b640-d9ce-503b-dfc08db1bcec",  // Unique ID for the request/session
      "cookie": "dmFzdTcxMTc0NTIxOQ==",              // Encoded session/user cookie
      "prod_id": 3,                                  // Product ID to add
      "flag": true                                   // Flag indicating add to cart action
    }
  });

  // Assert that the response status is 200 OK
  expect(resp2.status()).toBe(200);
});
