import http from 'k6/http';
import { check } from 'k6';
import { BASE_URL, thresholds, defaultOptions } from './config.js';

export const options = {
  thresholds,
  ...defaultOptions,
};

export function login() {
  const payload = JSON.stringify({
    username: 'Admin',
    password: 'admin123',
  });

  const response = http.post(`${BASE_URL}/web/index.php/auth/validate`, payload
  );

  check(response, {
    'login status is 200': (r) => r.status === 200,
  });

  return response;
}
