import { envConfig } from "./envConfig";

export const apiConfig ={
    // baseURL: 'https://jsonplaceholder.typicode.com',
    baseURL: envConfig.apiBaseURL,
    endPoints: {
        posts: '/posts',
        singlePost: '/posts/1'
    },
};