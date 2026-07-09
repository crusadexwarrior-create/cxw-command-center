# DEPLOYMENT.md — CXW Command Center Podcast Website

Standalone deployment guide. This site is its own Cloudflare Pages project,
technically isolated from the CXW Agency website. The only connection between
the two brands is links, CTAs, and shared brand language — never shared code,
shared repo, or shared deploy pipeline.

**Target URL:** `commandcenter.cxwagency.com`
**Not:** `cxwagency.com/podcast` (path-based deployment is explicitly rejected)

---

## 1. Standalone Confirmation (audit results)

Reviewed 2026-07-09. Findings:

| Check | Result |
|---|---|
| Own dedicated folder | ✅ `C:\Users\sdave\CXW.Command.Center.Podcast` — no files shared with any agency-site folder |
| Git repo status | Not yet initialized (expected — see Section 3) |
| Internal `.html` links | ✅ All relative (`episodes.html`, `about.html`, etc.) — zero absolute (`href="/..."`) paths |
| Every internal link resolves | ✅ All 6 pages verified present: index, episodes, guest-spotlight, blog, about, be-featured |
| Hardcoded references to `cxwagency.com` or agency-site files | ✅ None found |
| CSS `url()` / `@import` dependencies | ✅ None — only Google Fonts CDN (external, expected, not a code dependency) |
| Node dependencies (`node_modules`, `package.json`) | ✅ None — `server.js` uses only Node core modules (`http`, `fs`, `path`) |
| Framework | ✅ None — vanilla HTML/CSS/JS per AGENTS.md/DESIGN.md rules |
| Dev server runs from this folder alone | ✅ Confirmed — `server.js` resolves all paths via `__dirname`, listens on port 3001 (3000 reserved for the main CrusadeXWarrior site) |
| Brand connection to CXW Agency | ✅ Link-only: footer credit (`crusadexwarrior.com`), ecosystem copy on About page, CTA cards on Home. No shared code. |

**Conclusion: this project is already structurally standalone.** Nothing needs to be un-merged or extracted — it was never coupled to the agency codebase.

---

## 2. Placeholders That Must Be Replaced Before Launch

Everything below fails honestly (forms) or is visibly marked "coming soon" (content) rather than faking real data. Nothing here blocks a technical deploy — but real users will see placeholders until these are filled in.

### GoHighLevel form endpoints (7 forms, all currently empty)
| File | Form | Line (approx) |
|---|---|---|
| `index.html` | Newsletter | `data-ghl-endpoint=""` |
| `about.html` | Newsletter | `data-ghl-endpoint=""` |
| `blog.html` | Newsletter | `data-ghl-endpoint=""` |
| `episodes.html` | Newsletter | `data-ghl-endpoint=""` |
| `guest-spotlight.html` | Newsletter | `data-ghl-endpoint=""` |
| `be-featured.html` | Newsletter | `data-ghl-endpoint=""` |
| `be-featured.html` | Guest/Partnership application | `data-ghl-endpoint=""` |

Set each to the real GHL form/webhook POST URL. Until then, every form correctly displays "This form is not live yet" instead of faking success — confirmed in `js/main.js`.

### Social + podcast platform links (currently `href="#"`)
Present in the header socials area, hero platform badges, and footer of all 6 pages:
- Spotify
- Apple Podcasts
- YouTube
- Instagram
- X / Twitter

### Real content (currently marked "Coming Soon" / placeholder)
- Episode cards (title, guest, description, date, YouTube/Spotify/Apple links) — `episodes.html` + homepage featured episodes
- Guest spotlight pages — `guest-spotlight.html` is a reusable template; duplicate per real guest and fill in photo, bio, lessons, quote, episode embed, links
- Blog posts — `blog.html` has 3 placeholder article cards
- Host bio + photo — `about.html` (Samuel "Honcho" Davenport III section)
- Logo — transparent-background export would clean up the current screen-blend workaround on the black PNG assets

### Newsletter settings
- Confirm "The Command Brief" sender name/email in GHL
- Confirm interest-tag mapping (podcast / ai-business / cxw / partnerships / all) lands correctly in GHL contact tags once the endpoint is live

---

## 3. GitHub Repo Setup

This folder is not yet a git repo. To prepare it:

```bash
cd "C:\Users\sdave\CXW.Command.Center.Podcast"
git init
git config user.name "CrusadeXWarrior"
git config user.email "crusadexwarrior@gmail.com"
git add .
git commit -m "Initial commit — CXW Command Center podcast website"
```

Create a **new, separate** GitHub repo (do not add this as a folder inside the existing agency-site repo):

```bash
git remote add origin https://github.com/crusadexwarrior-create/cxw-command-center.git
git branch -M main
git push -u origin main
```

`.gitignore` is already in place (`node_modules/`, `.DS_Store`, `Thumbs.db`, `*.log`, `.env`).

---

## 4. Cloudflare Pages Deployment Checklist

Deploy as a **new, separate Cloudflare Pages project** — do not add this as a route or path on the existing CXW Agency Pages project.

- [ ] Go to https://dash.cloudflare.com → **Workers & Pages**
- [ ] Click **Create** → click **"Looking to deploy Pages? Get started"** (do NOT create a Worker)
- [ ] **Connect to Git** → select the `cxw-command-center` repo (not the agency repo)
- [ ] Build settings:
  - Framework preset: **None**
  - Build command: *(leave blank)*
  - Build output directory: `/`
- [ ] **Save and Deploy** — wait for the initial build (usually under 60 seconds)
- [ ] Confirm the default `*.pages.dev` URL loads all 6 pages correctly before attaching the custom subdomain

This creates a project fully independent from the agency site's Pages project. Redeploys of one never touch the other — separate repo, separate Pages project, separate build.

---

## 5. Connecting the Subdomain — `commandcenter.cxwagency.com`

Do in this order, in the **new** podcast Pages project (not the agency one):

1. In the podcast Cloudflare Pages project → **Custom domains** tab
2. Click **Set up a custom domain**
3. Enter `commandcenter.cxwagency.com`
4. Since `cxwagency.com` is presumably already on Cloudflare DNS (used by the agency site), Cloudflare will offer to auto-create the CNAME record for this subdomain — confirm/apply it
5. SSL activates automatically once the DNS record resolves
6. "Verifying" status is normal and typically clears in a few minutes

**Important:** this only adds a new subdomain record. It does not touch the existing `cxwagency.com` (root) or `www.cxwagency.com` records used by the agency site — those stay exactly as they are. No DNS changes are made here without your explicit go-ahead; this section documents the steps for you to run, or to approve before I run them.

---

## 6. Final Pre-Launch Checklist

**Technical (can do now):**
- [ ] `git init` + push to a new, separate GitHub repo (Section 3)
- [ ] Create new Cloudflare Pages project from that repo (Section 4)
- [ ] Verify `*.pages.dev` URL loads correctly
- [ ] Attach `commandcenter.cxwagency.com` custom domain (Section 5)
- [ ] Confirm SSL is active on the subdomain

**Content (blocks a real launch, not a technical deploy):**
- [ ] Wire all 7 `data-ghl-endpoint` values to real GHL forms
- [ ] Replace Spotify / Apple / YouTube / Instagram / X `href="#"` placeholders
- [ ] Add real episodes (episodes.html + homepage featured section)
- [ ] Build at least 1-2 real guest spotlight pages from the template
- [ ] Write Samuel's real bio + add his photo to about.html
- [ ] Publish first 1-3 real blog posts
- [ ] (Optional) export a transparent-background logo to replace the screen-blend workaround

**Confirm isolation before going live:**
- [ ] Verify agency site is unaffected — different repo, different Pages project, different subdomain
- [ ] Confirm no shared build step or shared DNS record was modified beyond the new `commandcenter` CNAME
