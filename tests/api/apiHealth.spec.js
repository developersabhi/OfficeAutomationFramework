import { test, expect } from '@playwright/test';
import { apiConfig } from '../../config/apiConfig';
import { ApiClient } from '../../api/ApiClient';

// test('API should return a successful response', async ({request})=>{
//     const response = await request.get(
//         `${apiConfig.baseURL}${apiConfig.endPoints.singlePost}`
//     );

//     expect(response.status()).toBe(200);

//     const responseBody = await response.json();

//     expect(responseBody).toHaveProperty('id', 1)
//     expect(responseBody).toHaveProperty('title');
//     expect(responseBody).toHaveProperty('userId');
// });


test('API should return a successful response', async({ request })=>{
    const apiClient = new ApiClient(request, apiConfig.baseURL);
    const response = await apiClient.get(
        apiConfig.endPoints.singlePost
    ); 

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(responseBody).toHaveProperty('id', 1)
    expect(responseBody).toHaveProperty('title')
    expect(responseBody).toHaveProperty('userId')
})