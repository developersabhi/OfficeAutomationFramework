import { test, expect } from "@playwright/test";
import { apiConfig } from "../../config/apiConfig";
import { ApiClient } from "../../api/ApiClient";

test("PUT API should update an existing post", async ({ request }) => {
  const apiClient = new ApiClient(request, apiConfig.baseURL);
  const updatedPost = {
    id: 1,
    title: "Updated Playwright Title",
    body: "Post updated using PUT API",
    userId: 1,
  };
  const response = await apiClient.put(
    apiConfig.endPoints.singlePost,
    updatedPost,
  );

  expect(response.status()).toBe(200);

  const responseBody = await response.json();

  expect(responseBody.id).toBe(1);
  expect(responseBody.title).toBe(updatedPost.title);
  expect(responseBody.body).toBe(updatedPost.body);
  expect(responseBody.userId).toBe(updatedPost.userId);
});
