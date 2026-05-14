# Rafael Alba website v6

Changes included:

- Updated hero headline for clearer conversion:
  "Microsoft 365 and IT problems solved without unnecessary complexity."
- Stronger subheadline focused on Microsoft 365, Entra ID, permissions, endpoint issues and troubleshooting.
- Updated About copy to connect better with LinkedIn and GitHub positioning.
- Google Analytics tag included on the homepage and Lab Notes pages.
- `robots.txt` and `sitemap.xml` included.
- Static blog structure included under `/lab-notes/`.
- Article template included as `/lab-notes/_article-template.html`.

## How to add a new blog / Lab Note article

1. Copy `/lab-notes/_article-template.html`.
2. Rename it with a clean slug, for example:
   `conditional-access-device-compliance.html`
3. Edit the title, meta description, hero heading and article body.
4. Add a new article card in `/lab-notes/index.html`.
5. Add the same article card or a selected version on the homepage if you want it featured.
6. Add the new URL to `sitemap.xml`.
7. Commit and push to GitHub.
8. In Google Search Console, inspect the new article URL and request indexing.
