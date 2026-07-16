# rafaelalba-site

This is the repository for my personal website: [rafaelalba.com](https://rafaelalba.com/).

The site represents **Rafael Alba** as the public professional brand. Webify Digital Solutions Ltd is my Irish legal and B2B vehicle for contract delivery, but it is not the main public brand.

## Current portfolio direction

The website should present one coherent professional direction:

- Enterprise Application Support and Support Engineering;
- IAM and access-support investigation;
- IT Operations, automation and production evidence.

## Current public projects

| Project | Area | Public positioning |
|---|---|---|
| [TRACE IAM Evidence](https://github.com/RafaelAlbaWebify/trace-iam-evidence) | IAM / Access Support | Completed local-first, read-only evidence investigation workbench |
| [INFIOS](https://github.com/RafaelAlbaWebify/infios-app-support-workbench) | Application Support | Persistent L1-to-L2 incident investigation and escalation workbench |
| [OPSCORE](https://github.com/RafaelAlbaWebify/opscore) | Infrastructure / Production Operations | Correlation of DNS, HTTP, TLS and dependency evidence |
| [WATCH](https://github.com/RafaelAlbaWebify/watch-automation-control-hub) | IT Automation | Approved-target checks, immutable evidence, change detection and action tracking |
| [JOLT](https://github.com/RafaelAlbaWebify/jolt-job-tracker) | Supporting automation project | Explainable parsing, classification and local decision workflows |
| [DNS Audit Tool](https://github.com/RafaelAlbaWebify/dns-audit-tool) | Supporting infrastructure utility | Read-only DNS evidence and consistency reporting |
| [Endpoint Support Checklist](https://github.com/RafaelAlbaWebify/endpoint-support-checklist-powershell) | Supporting endpoint utility | Repeatable Windows endpoint checks and ticket-ready evidence |

The archived [`trace-ops`](https://github.com/RafaelAlbaWebify/trace-ops) repository is retained only as development history. The current TRACE repository is `trace-iam-evidence`.

## Website messaging

The public site should lead with the problem I solve rather than with a list of technologies:

> I turn scattered technical evidence into clearer troubleshooting paths, safer next actions and stronger escalation handovers.

Use first person and describe only capabilities supported by public proof.

Good:

```text
I build practical tools that help structure application, identity and operational-support investigations.
```

Avoid:

```text
Rafael Alba builds an ecosystem of enterprise platforms.
```

The site should sound like me explaining my work directly, not like an agency describing a client.

## Project priority on the website

1. TRACE — IAM and access investigation.
2. INFIOS — Application Support and L1-to-L2 incident handling.
3. OPSCORE — infrastructure and production evidence.
4. WATCH — operational checks and controlled automation.
5. Supporting utilities and labs.

Private or experimental repositories should not be presented as public proof.

## Technical notes

The site is built with:

- Next.js;
- React;
- TypeScript;
- utility-first CSS;
- Framer Motion;
- shadcn/Radix-style UI dependencies.

## Local development

Install dependencies:

```powershell
npm install
```

Run locally:

```powershell
npm run dev
```

Build:

```powershell
npm run build
```

Preview the production build where supported:

```powershell
npm run start
```

## Content safety checks

Before publishing changes, verify:

- no private workplace, customer or tenant information is exposed;
- no private paths, logs or generated evidence bundles are committed;
- project claims match the current public repositories;
- archived repositories are not presented as maintained;
- Webify is described as the legal/B2B vehicle, not the main brand;
- service claims remain practical and defensible.
