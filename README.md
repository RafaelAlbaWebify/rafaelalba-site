# rafaelalba-site

This is the repository for my personal professional website: [rafaelalba.com](https://rafaelalba.com/).

The public brand is **Rafael Alba**. Webify Digital Solutions Ltd is my Irish legal/B2B vehicle for contract delivery, not the primary professional identity.

## Professional positioning

The website should stay aligned with the master CVs, LinkedIn and GitHub portfolio:

- **Core:** Application Support / Production Support / SaaS Support and IT Operations.
- **Supporting:** Automation, Modern Workplace, Cloud and Cybersecurity.
- **Applied AI:** a transversal capability used in operational tooling and workflows, not an AI Engineer positioning.
- **Credibility boundary:** portfolio and lab work must not be presented as enterprise production ownership where that experience is not established.

The preferred public title is:

> Application Support & IT Operations Engineer

## Experience narrative

The public site should reinforce a clear progression:

1. Webify Digital Solutions Ltd — Founder | IT Operations & Automation.
2. Quental / FORVIA — production-critical manufacturing support and IT operations.
3. Auxilion — L2 Microsoft 365 / Windows support for approximately 3,000 users.
4. Communisis — endpoint, access and security-aware corporate support.
5. BEEP Informática — long-term IT services ownership and technical leadership.

## Current portfolio

The broader GitHub portfolio is organized around:

| Project | Area | Role |
|---|---|---|
| [INFIOS](https://github.com/RafaelAlbaWebify/infios-app-support-workbench) | Application Support | Flagship candidate under active portfolio review |
| [OPSCORE](https://github.com/RafaelAlbaWebify/opscore) | IT & Cloud Operations | Flagship candidate under active portfolio review |
| [TRACE IAM Evidence](https://github.com/RafaelAlbaWebify/trace-iam-evidence) | Identity / Modern Workplace | Current maintained TRACE project |
| [WATCH](https://github.com/RafaelAlbaWebify/watch-automation-control-hub) | Automation / Operations | Flagship candidate under active portfolio review |
| [CustosOps](https://github.com/RafaelAlbaWebify/custosops) | Cybersecurity | Specialized supporting project |
| [YTIS](https://github.com/RafaelAlbaWebify/ytis) | Applied AI | Specialized supporting project |
| [DNS Audit Tool](https://github.com/RafaelAlbaWebify/dns-audit-tool) | Infrastructure | Supporting utility |
| [Endpoint Support Checklist](https://github.com/RafaelAlbaWebify/endpoint-support-checklist-powershell) | Endpoint / Modern Workplace | Supporting utility |

The archived `trace-ops` repository is development history only. The canonical TRACE repository is `trace-iam-evidence`.

## Website project policy

The website's **Projects** section is intentionally conservative while the dedicated portfolio/Featured review is in progress.

Do not promote a project to the main website merely because the repository exists. A flagship should first pass a practical review of:

- professional usefulness;
- workflow realism;
- technical depth;
- UX/UI;
- evidence and reporting;
- safety boundaries;
- tests/CI;
- public documentation.

Until that review is complete, it is acceptable for the website to show a smaller set of proven public examples.

## Messaging rules

Lead with professional capability and evidence, not SMB sales copy.

Good:

```text
Application Support & IT Operations Engineer
L2 support, structured evidence and practical automation.
```

Avoid:

```text
Get your IT under control today.
```

The website may still mention B2B availability, but recruiter/job positioning comes first.

## Technical notes

The site is built with:

- Next.js;
- React;
- TypeScript;
- utility-first CSS;
- Framer Motion;
- shadcn/Radix-style UI dependencies.

## Local development

```powershell
npm install
npm run dev
```

Production build:

```powershell
npm run build
```

## Release checks

Before publishing changes:

- build must pass;
- desktop and mobile layouts must be visually checked;
- headline, Experience and target roles must agree with LinkedIn and the master CVs;
- project links must point to maintained repositories;
- no private workplace, client, tenant or credential data may be exposed;
- portfolio/lab capabilities must not be upgraded into unsupported production experience;
- Webify must remain the legal/B2B vehicle, not the main public brand.
