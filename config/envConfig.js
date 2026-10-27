const enviroments = {
  dev: {
    baseURL: "https://www.saucedemo.com/",
    apiBaseURL: "https://jsonplaceholder.typicode.com",
  },
  qa: {
    baseURL: "https://www.saucedemo.com/",
    apiBaseURL: "https://jsonplaceholder.typicode.com",
  },
  prod: {
    baseURL: 'https://www.saucedemo.com/',
    apiBaseURL: 'https://jsonplaceholder.typicode.com',
  },
};

const environmentName = process.env.TEST_ENV || 'qa';

if(!enviroments[environmentName]) {
    throw new Error(
        `Innvalid TEST_ENV: ${environmentName}. Use dev, qa or prod.`
    );
}

export const envConfig = enviroments[environmentName];