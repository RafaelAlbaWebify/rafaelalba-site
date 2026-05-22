# Rafael Alba website

Static website for Rafael Alba's Microsoft 365, Entra ID, IT operations and troubleshooting support work.

Live site: https://rafaelalba.com/

## Site structure

```text
index.html              Homepage
404.html                Not found page
robots.txt              Search crawler rules
sitemap.xml             Public URL index for search engines
css/styles.css          Shared site styles
images/                 Portraits, article graphics and visual assets
lab-notes/              Static troubleshooting articles
```

## Current content areas

- Homepage with services, process, lab notes, about and contact sections
- Lab Notes index under `/lab-notes/`
- Static article pages for Microsoft 365, DNS, documentation and homelab topics
- Google Analytics tag on the homepage and Lab Notes pages
- Social preview metadata for homepage and Lab Notes index
- Sitemap and robots.txt for search indexing

## How to add a new Lab Note article

1. Copy `/lab-notes/_article-template.html`.
2. Rename it with a clean slug, for example:
   `conditional-access-device-compliance.html`.
3. Edit the title, meta description, hero heading and article body.
4. Add a new article card in `/lab-notes/index.html`.
5. Add the same article card or a selected version on the homepage if it should be featured.
6. Add the new URL to `sitemap.xml` with a `lastmod` date.
7. Commit and push to GitHub.
8. In Google Search Console, inspect the new article URL and request indexing.

## Small-change rule

For visual changes, keep edits small and isolated. Prefer changing one section or one file at a time, then preview the live result before making broader layout changes.

## Deployment notes

This is a static site. Changes are deployed by pushing to the repository branch used by the hosting provider.

After a content or metadata change:

1. Wait for the host/GitHub Pages build to finish.
2. Hard refresh the browser if assets appear stale.
3. Check the homepage, Lab Notes index and any changed article URL.
4. If metadata changed, re-test sharing previews after the deploy has propagated.
