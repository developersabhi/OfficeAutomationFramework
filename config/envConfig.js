const environments = {
  dev :{
    name: 'dev',
    baseURL: 'https://www.saucedemo.com/',
    apiBaseURL: 'https://jsonplaceholder.typicode.com',
  },
  qa: {
     name: 'qa',
    baseURL: 'https://www.saucedemo.com/',
    apiBaseURL: 'https://jsonplaceholder.typicode.com',
  },
  prod: {
     name: 'prod',
    baseURL: 'https://www.saucedemo.com/',
    apiBaseURL: 'https://jsonplaceholder.typicode.com',
  }
};

const environmentsName = process.env.TEST_ENV || 'qa';

if(!environments[environmentsName]) {
  throw new Error(
    `Invalid Test_ENV: ${environmentsName}. Use dev, qa or prod.`
  );
}

export const envConfig = environments[environmentsName];

// environmentName change krne k liye qa, dev,prod
// $env:TEST_ENV="qa" 
// node --input-type=module -e "import { envConfig } from './config/envConfig.js'; console.log(envConfig)"