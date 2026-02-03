import http from 'k6/http';
import { check, sleep } from 'k6';
import { BASE_URL, thresholds, defaultOptions } from './config.js';

export const options = {
  ...defaultOptions,
  thresholds,
};

export default function () {
  const loginPayload = JSON.stringify({
    username: 'Admin',
    password: 'admin123',
  });
  
  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  
  const response = http.post(`${BASE_URL}/web/index.php/auth/validate`, loginPayload, params);
  check(response, {
    'is status 200': (r) => r.status === 200,
    'response time < 2000ms': (r) => r.timings.duration < 2000,
  });
  sleep(1);
}
