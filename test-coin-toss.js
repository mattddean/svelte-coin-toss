const puppeteer = require("puppeteer");

async function testCoinToss() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  console.log("Navigating to app...");
  await page.goto("http://localhost:5173");

  // Wait for the app to load
  await page.waitForSelector("button", { timeout: 5000 });

  console.log("Testing coin toss functionality...");

  // Take initial screenshot
  await page.screenshot({ path: "coin-initial.png" });
  console.log("Initial screenshot saved as coin-initial.png");

  // Click the flip button
  const flipButton = await page.$("button");
  await flipButton.click();

  // Wait for animation to complete
  await page.waitForTimeout(2000);

  // Take screenshot after flip
  await page.screenshot({ path: "coin-after-flip.png" });
  console.log("Post-flip screenshot saved as coin-after-flip.png");

  // Test multiple flips
  console.log("Testing multiple flips...");
  const results = [];

  for (let i = 0; i < 10; i++) {
    await flipButton.click();
    await page.waitForTimeout(2000);

    // Check for result text
    const resultText = await page.evaluate(() => {
      const resultElement = document.querySelector("p");
      return resultElement ? resultElement.textContent : null;
    });

    if (resultText) {
      results.push(resultText);
      console.log(`Flip ${i + 1}: ${resultText}`);
    }
  }

  // Verify we got both heads and tails
  const hasHeads = results.some((r) => r.toLowerCase().includes("heads"));
  const hasTails = results.some((r) => r.toLowerCase().includes("tails"));

  console.log("\nTest Results:");
  console.log(`Total flips: ${results.length}`);
  console.log(`Got heads: ${hasHeads}`);
  console.log(`Got tails: ${hasTails}`);
  console.log(
    `Test ${hasHeads && hasTails ? "PASSED" : "FAILED"}: Should get both heads and tails in 10 flips`,
  );

  await browser.close();
}

testCoinToss().catch(console.error);
