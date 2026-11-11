const { chromium } = require("playwright");

async function capture(browser, name, viewport, baseUrl) {
  const page = await browser.newPage({ viewport, deviceScaleFactor: 1 });
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));

  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.waitForTimeout(1200);

  const height = await page.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < height; y += Math.round(viewport.height * 0.75)) {
    await page.evaluate((nextY) => window.scrollTo({ top: nextY, behavior: "instant" }), y);
    await page.waitForTimeout(160);
  }
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
  await page.waitForTimeout(1200);

  const metrics = await page.evaluate(() => ({
    viewportWidth: window.innerWidth,
    documentWidth: document.documentElement.scrollWidth,
    pageHeight: document.documentElement.scrollHeight,
    heading: document.querySelector("h1")?.textContent?.replace(/\\s+/g, " ").trim(),
    experience: Boolean(document.querySelector("#experience")),
    projects: Boolean(document.querySelector("#projects")),
    contactForm: Boolean(document.querySelector("#contact form")),
  }));

  await page.screenshot({ path: `screenshots/${name}.png`, fullPage: true, animations: "disabled" });
  console.log(name, JSON.stringify({ ...metrics, pageErrors: errors }));
  await page.close();

  if (metrics.documentWidth > metrics.viewportWidth + 2) {
    throw new Error(`${name}: horizontal overflow (${metrics.documentWidth}px > ${metrics.viewportWidth}px)`);
  }
  if (!metrics.experience || !metrics.projects || !metrics.contactForm) {
    throw new Error(`${name}: missing expected portfolio sections`);
  }
  if (errors.length) throw new Error(`${name}: uncaught browser errors: ${errors.join(" | ")}`);
}

(async () => {
  const browser = await chromium.launch({ headless: true });
  try {
    const url = process.env.SITE_URL || "http://localhost:4000/";
    await capture(browser, "desktop", { width: 1440, height: 900 }, url);
    await capture(browser, "mobile", { width: 390, height: 844 }, url);
  } finally {
    await browser.close();
  }
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
