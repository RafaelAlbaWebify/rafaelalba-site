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
  // Intercept the provider request: exercise the form without sending real email.
  let submitted = null;
  await page.route("https://api.web3forms.com/submit", async (route) => {
    submitted = route.request().postDataJSON();
    await route.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ success: true }) });
  });
  // Validate empty fields before a successful submission; no network request should fire.
  await page.getByRole("button", { name: "Send message" }).click();
  await page.locator("#contact-name-error").waitFor();
  await page.locator("#contact-email-error").waitFor();
  await page.locator("#contact-message-error").waitFor();
  // Border color transitions over 200ms; assert the settled error state.
  await page.waitForTimeout(350);
  for (const id of ["contact-name", "contact-email", "contact-message"]) {
    const field = page.locator(`#${id}`);
    if (await field.getAttribute("aria-invalid") !== "true") {
      throw new Error(`${name}: ${id} not marked as invalid`);
    }
    const color = await field.evaluate((el) => getComputedStyle(el).borderBottomColor);
    if (color !== "rgb(253, 164, 175)") {
      throw new Error(`${name}: ${id} has no visible error border: ${color}`);
    }
  }
  if (submitted) throw new Error(`${name}: invalid form was submitted`);
  if (await page.locator("#contact-name").evaluate((el) => document.activeElement !== el)) {
    throw new Error(`${name}: first invalid field not focused`);
  }
  await page.screenshot({ path: `screenshots/${name}-validation.png`, fullPage: true, animations: "disabled" });
  await page.getByRole("textbox", { name: "Your name" }).fill("Portfolio QA");
  await page.getByRole("textbox", { name: "Your email" }).fill("qa@example.com");
  await page.getByRole("textbox", { name: "Role, project or support requirement" }).fill("Automated smoke test of the contact form.");
  await page.getByRole("button", { name: "Send message" }).click();
  await page.getByRole("status").filter({ hasText: "Message sent" }).waitFor({ timeout: 10000 });
  if (!submitted || submitted.name !== "Portfolio QA" || submitted.botcheck !== "") {
    throw new Error(`${name}: contact form payload validation failed`);
  }

  console.log(name, JSON.stringify({ ...metrics, contactFormMocked: true, pageErrors: errors }));
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
