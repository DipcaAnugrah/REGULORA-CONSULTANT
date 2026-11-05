import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
const routes = [
  "/",
  "/tentang-kami",
  "/layanan",
  "/layanan/pkrt",
  "/layanan/idak-ipak",
  "/layanan/izin-edar-alat-kesehatan",
  "/layanan/spp-irt",
  "/layanan/notifikasi-kosmetik",
  "/layanan/bpom-md-ml",
  "/artikel",
  "/artikel/persiapan-konsultasi-perizinan",
  "/artikel/memahami-ruang-lingkup-pendampingan",
  "/faq",
  "/kontak",
  "/kebijakan-privasi",
  "/syarat-ketentuan",
  "/disclaimer",
];
test("all routes, metadata, internal links and no console errors", async ({
  page,
  request,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  const links = new Set<string>();
  const titles = new Set<string>();
  for (const route of routes) {
    const response = await page.goto(route);
    expect(response?.status(), route).toBe(200);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
      "content",
      /opengraph-image/,
    );
    await expect(page.locator('meta[name="twitter:image"]')).toHaveAttribute(
      "content",
      /opengraph-image/,
    );
    expect(
      await page.locator("link[rel=canonical]").getAttribute("href"),
    ).toContain(route);
    const title = await page.title();
    expect(titles.has(title), title).toBe(false);
    titles.add(title);
    for (const href of await page
      .locator('a[href^="/"]')
      .evaluateAll((a) => a.map((x) => x.getAttribute("href")!)))
      links.add(href);
  }
  for (const href of links)
    expect((await request.get(href)).status(), href).toBe(200);
  expect(errors).toEqual([]);
  expect((await request.get("/tidak-ada")).status()).toBe(404);
  expect((await request.get("/robots.txt")).status()).toBe(200);
  expect((await request.get("/sitemap.xml")).status()).toBe(200);
});
for (const width of [360, 390, 768, 1280, 1440])
  test(`responsive ${width}px and accessibility`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    for (const route of ["/", "/layanan/pkrt", "/kontak"]) {
      await page.goto(route);
      await page.evaluate(() => document.fonts.ready);
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
        route,
      ).toBe(true);
      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
        .analyze();
      expect(
        results.violations.map((v) => ({
          id: v.id,
          nodes: v.nodes.map((n) => n.target),
        })),
        route,
      ).toEqual([]);
    }
    await page.goto("/");
    await page.locator(".cta-image").scrollIntoViewIfNeeded();
    await page
      .locator(".cta-image img")
      .evaluate((img: HTMLImageElement) => img.decode());
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.screenshot({
      path: `test-results/home-${width}.png`,
      fullPage: true,
    });
    if (width < 901) {
      await page.getByRole("button", { name: "Buka navigasi" }).click();
      await expect(
        page.getByRole("navigation", { name: "Navigasi seluler" }),
      ).toBeVisible();
      await page
        .getByRole("navigation", { name: "Navigasi seluler" })
        .getByRole("link", { name: "Semua Layanan", exact: true })
        .click();
      await expect(page).toHaveURL(/\/layanan$/);
    }
  });
test("FAQ, contact preselection and safe unconfigured behavior", async ({
  page,
  request,
}) => {
  await page.goto("/faq");
  await page
    .locator("summary")
    .filter({ hasText: "Apakah penerbitan izin dijamin?" })
    .click();
  await expect(page.locator("details[open]")).toContainText("Tidak.");
  await page.goto("/kontak?layanan=pkrt");
  await expect(page.locator("#service")).toHaveValue("pkrt");
  await expect(
    page.getByRole("button", { name: "Kirim permintaan konsultasi" }),
  ).toBeDisabled();
  expect(await page.locator('a[href*="wa.me"]').count()).toBe(0);
  expect(
    (
      await request.post("/api/leads", {
        headers: { origin: "http://localhost:3000" },
        data: {},
      })
    ).status(),
  ).toBe(503);
  expect(
    (
      await request.post("/api/leads", {
        headers: { origin: "https://untrusted.example" },
        data: {},
      })
    ).status(),
  ).toBe(403);
});
