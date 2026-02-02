import { expect } from '@playwright/test';

const DEFAULT_TIMEOUT = 10000;
const timeout = (timeout) => timeout ?? DEFAULT_TIMEOUT;

export const elementClick = async (element, waitingTime) => {
  await expect(element).toBeVisible({ timeout: timeout(waitingTime) });
  await element.click();
};

export const elementAddValue = async (element, value, waitingTime) => {
  await expect(element).toBeVisible({ timeout: timeout(waitingTime) });
  await element.fill(value);
};

export const elementGetText = async (element, waitingTime) => {
  await expect(element).toBeVisible({ timeout: timeout(waitingTime) });
  return element.textContent();
};

export const elementIsVisible = async (element, waitingTime) => {
  try {
    await expect(element).toBeVisible({ timeout: timeout(waitingTime) });
    return true;
  } catch {
    return false;
  }
};

export const elementIsEnabled = async (element, waitingTime) => {
  try {
    await expect(element).toBeEnabled({ timeout: timeout(waitingTime) });
    return true;
  } catch {
    return false;
  }
};

export const elementGetAttribute = async (
  element,
  attributeName,
  waitingTime
) => {
  await expect(element).toBeVisible({ timeout: timeout(waitingTime) });
  return element.getAttribute(attributeName);
};

export const elementHover = async (element, waitingTime) => {
  await expect(element).toBeVisible({ timeout: timeout(waitingTime) });
  await element.hover();
};

export const elementClear = async (element, waitingTime) => {
  await expect(element).toBeVisible({ timeout: timeout(waitingTime) });
  await element.fill('');
};
