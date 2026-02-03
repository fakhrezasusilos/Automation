import http from 'k6/http';
import { check, sleep } from 'k6';
import { BASE_URL, thresholds, defaultOptions } from './config.js';
import { login } from './auth.js';

export const options = {
  thresholds,
  ...defaultOptions,
};

export default function (data) {
  const payload = JSON.stringify({
    firstName: 'John',
    lastName: `Doe${Math.floor(Math.random() * 10000)}`,
    employeeId: `${Date.now()}`.slice(-10),
    empPicture: null,
  });

  const loginRes = login();

  check(loginRes, {
    'login ok': (r) => r.status === 200,
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    }
  };

  const response = http.post(`${BASE_URL}/web/index.php/api/v2/pim/employees`, payload, params);
  check(response, {
    'create employee status is 201': (r) => r.status === 201,
    'employee creation response time < 2000ms': (r) => r.timings.duration < 2000,
  });

  if (response.status !== 201) {
    console.log(`Unexpected status: ${response.status}`);
  }

  sleep(1);
}