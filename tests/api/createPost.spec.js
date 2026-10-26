import { test, expect } from "@playwright/test";
import { apiConfig } from "../../config/apiConfig"; // url
import { ApiClient } from "../../api/ApiClient"; // method

test("POST API should create a new post", async ({ request }) => {
  const apiClient = new ApiClient(request, apiConfig.baseURL);
  const newPost = {
    title: "Playwright API Testing",
    body: "Learning POST API automation",
    userId: 1,
  };

  const response = await apiClient.post(apiConfig.endPoints.posts, newPost);

  expect(response.status()).toBe(201);

  const responseBody = await response.json();

  expect(responseBody.title).toBe(newPost.title);
  expect(responseBody.body).toBe(newPost.body);
  expect(responseBody.userId).toBe(newPost.userId);
  expect(responseBody.id).toBeTruthy();
});
