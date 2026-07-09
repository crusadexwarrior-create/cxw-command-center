# Changelog — decision record (newest first)

## 2026-07-09 — Deployment preparation: standalone Cloudflare Pages project
Audited the project for standalone deployment as its own Cloudflare Pages
project at commandcenter.cxwagency.com — technically isolated from the CXW
Agency website, connected only by links/CTAs/brand language (no shared code,
repo, or deploy pipeline). Findings: all internal links already relative and
resolve correctly; zero hardcoded references to cxwagency.com or agency-site
files; zero CSS url()/@import or Node dependencies beyond core modules;
server.js runs standalone via __dirname on port 3001 (3000 reserved for the
main CrusadeXWarrior site). No code changes were needed — the project was
already structurally standalone.

Added DEPLOYMENT.md: standalone-confirmation audit results, full placeholder
inventory (7 empty GHL endpoints, 5 social/platform link types, episode/guest/
blog/bio content), git init + new-separate-repo instructions, Cloudflare Pages
setup checklist (new project, not a route on the agency Pages project), steps
to attach the commandcenter.cxwagency.com subdomain without touching existing
agency DNS records, and a final pre-launch checklist split into technical
(deploy-now) and content (real-data) items. No DNS changes were made — deferred
to the user per instructions.

## 2026-07-09 — Header logo enlarged
Nav logo was too small. Bumped .header__logo img from 40px to 56px (mobile) /
68px (desktop) and header height from 72px to 88px/100px to match. Applies
site-wide (shared header markup). Verified no nav overlap or overflow at
375px and 1280px.

## 2026-07-09 — Emblem badge added to interior page heroes
Applied the same masked circular badge treatment to the .page-hero on all five
interior pages (be-featured, episodes, guest-spotlight, blog, about) via a new
compact .page-hero__mark (108px mobile / 128px desktop) with the same feathered
mask + screen blend + blue glow/ring. css/layout.css + one markup line per page.
Verified: badge on all 5 pages, masked, no overflow at 375/desktop, no console
errors.

## 2026-07-09 — Hero emblem redesigned as a polished command badge
Root cause of the "ugly square": the image asset, not CSS. logo-mark.png has a
fully opaque black canvas (hasAlpha:false, corners pure rgb(0,0,0)), so
screen-blend alone left the rectangular boundary perceptible against the hero's
blue glow. Fix (css/layout.css only): clip the emblem into a feathered circle
via mask-image radial-gradient (66%→78%), keep screen blend for residual black,
and frame it with a cinematic radial glow, a thin blue reticle ring, and a soft
pulse. Bigger centerpiece (240px mobile / 288px desktop). No structure, palette,
nav, or form changes. Verified at 375/768/1280px: no square, no horizontal
overflow, nav works, zero console errors.

## 2026-07-09 — New reticle emblem as hero centerpiece + favicon
Added assets/logo-mark.png (square reticle emblem). Homepage hero now features
it at 200-240px with a pulsing blue glow and targeting-ring animation
(reduced-motion safe). Favicon on all 6 pages switched to the square mark.
Wide banner logo remains in header/footer.

## 2026-07-09 — MVP pages built (be-featured, episodes, guest-spotlight, blog, about)
Added the five core pages and wired site-wide navigation. Header/footer now
route to real pages on every page (nav switched from on-page anchors to
page links); primary header CTA points to be-featured.html; active page marked
with aria-current (blue). Homepage CTAs repointed to be-featured.html.

- be-featured.html: hero, "who the show is for" (6 cards), full application form
  (11 fields, required validation), 5-step "what happens next", newsletter CTA.
- episodes.html: archive layout with Coming Soon cards + an HTML-comment card
  template exposing title/guest/date/description/YouTube/Spotify/Apple fields.
- guest-spotlight.html: reusable profile template (photo, name, business, story,
  key lessons, pull quote, episode-embed placeholder, links, CTA).
- blog.html: The Command Brief hub, 3 placeholder article cards (AI systems,
  entrepreneurship, leadership) + newsletter signup with interest chips.
- about.html: show explanation, host bio (placeholder), ecosystem (Media/Systems/
  Mission) cards, CTAs.

main.js refactored to a generic honest GHL handler: any .ghl-form validates
required fields and, with no data-ghl-endpoint set, blocks and shows "not live
yet" — never fakes success. Added CSS for page heroes, forms, process steps,
spotlight layout, and active nav (appended to layout.css/components.css; blue/
black system unchanged).

Verified in browser: all 6 pages 200, every internal link resolves, application
+ newsletter forms validate and fail honestly, mobile nav works on subpages,
responsive with no horizontal overflow at 375/768/1280px, zero console errors.
Still blocked on real GHL endpoints, platform/social links, and real content.

## 2026-07-07 — Homepage v1 built
Vanilla HTML/CSS/JS homepage with all 9 blueprint sections, blue/steel design
system, mobile nav, scroll reveal, and GHL-ready newsletter form (endpoint
config via data-ghl-endpoint on #newsletterForm; fails honestly until set).
Dev server on port 3001 (node server.js). Episode/guest/blog cards are
clearly-marked placeholders pending real content. Logo PNG blended via
mix-blend-mode: screen (needs a transparent-bg export eventually).

## 2026-07-07 — Website blueprint + design system locked
Created WEBSITE_BLUEPRINT.md (full v1 strategy, sitemap, copy, forms, SEO,
launch checklist) and DESIGN.md. Key decisions: blue/steel/black palette from
the actual logo (overriding the gold suggestion in the brief), "The Command
Brief" newsletter name, static site on Cloudflare Pages with GHL for
forms/email/CRM, guest spotlight pages as the primary growth loop.

## 2026-07-07 — Project instructions created
Added AGENTS.md (Karpathy program.md-style agent constitution) to an empty
repo. Brand logo added to Assest/.
