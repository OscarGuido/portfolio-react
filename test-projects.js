const { chromium } = require('puppeteer');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  try {
    await page.goto('http://localhost:5174/', { waitUntil: 'networkidle2', timeout: 10000 });
    
    // Wait for projects section to load
    await page.waitForSelector('[class*="grid"]', { timeout: 5000 });
    await page.waitForTimeout(1000);
    
    await page.screenshot({ path: '/tmp/projects-section.png', fullPage: true });
    console.log('Screenshot saved');
    
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await browser.close();
  }
})();
