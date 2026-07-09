# DEPLOYMENT.md — CXW Command Center Podcast Website

Standalone deployment guide. This site is its own Cloudflare Pages project,
technically isolated from the CXW Agency website. The only connection between
the two brands is links, CTAs, and shared brand language — never shared code,
shared repo, or shared deploy pipeline.

**Live URL:** `https://commandcenter.cxw-agency.org` ✅ **DEPLOYED AND ACTIVE** (2026-07-09)
**Not:** `cxwagency.com/podcast` (path-based deployment is explicitly rejected)

> Note: the original plan referenced `commandcenter.cxwagency.com`, but the
> real, live CXW Agency domain is `cxw-agency.org` (confirmed with the user
> during deployment). All references below use the correct `.org` domain.

---

## 1. Standalone Confirmation (audit results)

Reviewed 2026-07-09. Findings:

| Check | Result |
|---|---|
| Own dedicated folder | ✅ `C:\Users\sdave\CXW.Command.Center.Podcast` — no files shared with any agency-site folder |
| Git repo status | ✅ Initialized, committed, pushed to `crusadexwarrior-create/cxw-command-center` on GitHub |
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

## 3. GitHub Repo Setup ✅ DONE

Repo: [github.com/crusadexwarrior-create/cxw-command-center](https://github.com/crusadexwarrior-create/cxw-command-center)
Branch `main`, tracking `origin/main`. Separate from the agency-site repo, as required.

`.gitignore` is in place (`node_modules/`, `.DS_Store`, `Thumbs.db`, `*.log`, `.env`).

For future updates:
```bash
cd "C:\Users\sdave\CXW.Command.Center.Podcast"
git add .
git commit -m "Describe the change"
git push
```
Cloudflare Pages auto-deploys on every push to `main` (usually live within ~30-60 seconds).

---

## 4. Cloudflare Pages Deployment ✅ DONE

Deployed as its own, separate Cloudflare Pages project: **`cxw-command-center`**
(project source: `crusadexwarrior-create/cxw-command-center`, branch `main`).
Default URL: `cxw-command-center.pages.dev` — confirmed working before the
custom domain was attached.

Build settings used: Framework preset **None**, build command blank, output
directory `/`. This project is fully independent from the agency site's
Pages project(s) — separate repo, separate build, separate deploy history.

---

## 5. Subdomain — `commandcenter.cxw-agency.org` ✅ DONE

Live and active as of 2026-07-09. Setup notes for reference:

- The agency's real domain is `cxw-agency.org` (Cloudflare zone, DNS Setup: Full), under a **different Cloudflare account/login** than the one hosting the `cxw-command-center` Pages project.
- CNAME record added directly in that zone (not via "transfer DNS to Cloudflare" — that option is only for domains not yet on Cloudflare, and would have been the wrong, risky choice here):
  ```
  Type: CNAME
  Name: commandcenter
  Target: cxw-command-center.pages.dev
  Proxy status: Proxied
  ```
- In the `cxw-command-center` Pages project → Custom domains, the entry is `commandcenter.cxw-agency.org`, status **Active**.
- Confirmed: this only added the new `commandcenter` record. The existing `cxw-agency.org` root record (→ `cxw-agency-v2.pages.dev`) and all other existing records (MX, mail, app subdomain, etc.) were untouched.
- HTTPS confirmed working, all pages load correctly on the live domain.

---

## 6. Final Pre-Launch Checklist

**Technical — ✅ all done, site is live:**
- [x] `git init` + push to a new, separate GitHub repo (Section 3)
- [x] Create new Cloudflare Pages project from that repo (Section 4)
- [x] Verify `*.pages.dev` URL loads correctly
- [x] Attach `commandcenter.cxw-agency.org` custom domain (Section 5)
- [x] Confirm SSL is active on the subdomain — confirmed, HTTPS working

**Content (blocks a real launch, not a technical deploy):**
- [ ] Wire all 7 `data-ghl-endpoint` values to real GHL forms
- [ ] Replace Spotify / Apple / YouTube / Instagram / X `href="#"` placeholders
- [ ] Add real episodes (episodes.html + homepage featured section)
- [ ] Build at least 1-2 real guest spotlight pages from the template
- [ ] Write Samuel's real bio + add his photo to about.html
- [ ] Publish first 1-3 real blog posts
- [ ] (Optional) export a transparent-background logo to replace the screen-blend workaround

**Confirm isolation — ✅ verified:**
- [x] Agency site unaffected — different repo, different Pages project, different DNS record
- [x] No shared build step; the only DNS change was adding the new `commandcenter` CNAME to the existing `cxw-agency.org` zone — no other records touched
