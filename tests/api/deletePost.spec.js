import { test, expect  } from '@playwright/test'
import { apiConfig } from '../../config/apiConfig'
import { ApiClient } from '../../api/ApiClient'

test('DELETE API should delete an existing post', async({ request})=>{
    const apiClient = new ApiClient( request, apiConfig.baseURL);
    const response = await apiClient.delete(
        apiConfig.endPoints.singlePost
    );

    expect(response.status()).toBe(200);
})