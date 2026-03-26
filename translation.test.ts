import { test, expect } from '@playwright/test';

test.describe('Regional Language Verification', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the local dev server
    await page.goto('http://localhost:3000');
  });

  test('should verify Hindi translation triggers correctly', async ({ page }) => {
    // Click Language Toggle
    await page.click('button:has-text("EN")');
    
    // Select Hindi
    await page.click('button:has-text("Hindi")');
    
    // Wait for the Google Translate combo to be ready if it's there
    // and wait for potential translation changes
    await page.waitForTimeout(3000); 

    // Because Google Translate is an external iframe/script injection, 
    // we check for common Hindi characters in the main text area
    // 'Clinical Specialist Hub' often translates to 'क्लिनिकल' or contains specific Hindi markers
    const bodyText = await page.innerText('body');
    
    // Check for Devanagari script presence (Hindi/Marathi)
    const hasDevanagari = /[\u0900-\u097F]/.test(bodyText);
    expect(hasDevanagari).toBe(true);
  });

  test('should verify Marathi translation triggers correctly', async ({ page }) => {
    await page.click('button:has-text("EN")');
    await page.click('button:has-text("Marathi")');
    
    await page.waitForTimeout(3000); 

    const bodyText = await page.innerText('body');
    const hasDevanagari = /[\u0900-\u097F]/.test(bodyText);
    expect(hasDevanagari).toBe(true);
  });
});
