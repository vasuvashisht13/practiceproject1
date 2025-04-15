import { test, expect, request } from '@playwright/test';


const baseURL = "https://reqres.in/api/"
test.describe('api test cases', () =>{
    test('validate response', async({request}) => {
        const response = await request.get('https://reqres.in/api/users/2')


        expect(response.status()).toBe(200);
        const responsebody = await response.json();
        expect(responsebody).toHaveProperty('data');
        expect(responsebody.data).toMatchObject({
            id: 2, 
            email: 'janet.weaver@reqres.in'
        });
    });

    test('validate fetching a non-existent user', async({request}) =>{
        const response = await request.get(`${baseURL}.user/999`);
        expect(response.status()).toBe(404);
    })

    test('json placeholder test case', async({request}) =>{
        const response = await request.get('https://jsonplaceholder.typicode.com/posts');
        expect((response.status())).toBe(200);
        const posts = await response.json();

        expect(posts.length).toBeGreaterThan(10);
        posts.forEach((post: any) => {
            expect(post).toHaveProperty('title');
            expect(post).toHaveProperty('body');
            expect(post).toHaveProperty('userId');
        });
    })

    test('joke api', async({request}) =>{
        const response = await request.get('https://official-joke-api.appspot.com/jokes/random');
        expect(response.status()).toBe(200);

        const responsebody = await response.json();
        expect(responsebody).toHaveProperty('setup');
        expect(responsebody).toHaveProperty('punchline');
    });

    test('another jokes', async({request}) =>{
        const response = await request.get('https://official-joke-api.appspot.com/jokes/ten');
        expect(response.status()).toBe(200);
        const responsebody = await response.json();

        expect(responsebody.length).toBe(10);
        responsebody.foreach((response: any) => {
            expect(response).toHaveProperty('setup');
            expect(response).toHaveProperty('punchline');
        });
    });

    

    
});