export const BASE_URL = 'https://opensource-demo.orangehrmlive.com';

export const thresholds = {
  http_req_failed: ['rate<0.01'], // http errors should be less than 1%
  http_req_duration: ['p(95)<2000'], // 95% of requests should be below 2000ms
};

export const defaultOptions = {
  vus: 10,
  duration: '30s',
};

