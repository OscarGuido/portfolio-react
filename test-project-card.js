import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('http://localhost:5173/portfolio/', {
    waitUntil: 'networkidle2',
  });

  // Wait for Projects section to load
  await page.waitForSelector('[id="projects"]', { timeout: 5000 });

  // Scroll to Projects section
  await page.evaluate(() => {
    document.querySelector('[id="projects"]').scrollIntoView();
  });

  await new Promise(resolve => setTimeout(resolve, 500));

  // Find first project card's expand button and click it
  const expandButtons = await page.$$('button[aria-expanded="false"]');
  if (expandButtons.length > 0) {
    await expandButtons[0].click();
    await new Promise(resolve => setTimeout(resolve, 500));

    // Take a screenshot of the expanded card
    const cardBounds = await page.evaluate(() => {
      const card = document.querySelector('[id="projects"] > div > div > div:nth-child(2) > div:first-child');
      if (!card) return null;
      const bounds = card.getBoundingClientRect();
      return {
        x: Math.max(0, bounds.x),
        y: Math.max(0, bounds.y),
        width: bounds.width,
        height: bounds.height,
      };
    });

    await page.screenshot({
      path: '/Users/oscarguido/Documents/projects/Portfolio/portfolio-react/project-card-expanded.png',
    });
    console.log('✅ Screenshot saved: project-card-expanded.png');
  } else {
    console.log('⚠️ No expand buttons found');
  }

  await browser.close();
})();
