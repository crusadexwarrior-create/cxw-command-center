# CXW Command Center — Website Blueprint v1

The single source of truth for the first version of the CXW Command Center podcast website.
Read alongside `AGENTS.md` (agent rules) and `DESIGN.md` (visual system).

---

## 1. Website Strategy

**Positioning:** CXW Command Center is not a podcast landing page. It is the media arm of the CXW ecosystem. Every page exists to do one of five jobs: proof, trust, conversion, clarity, or community.

**The engine model:**

```
Social content → Website → Email list → Relationships → Opportunities
                              │
              ┌───────────────┼────────────────┐
              ▼               ▼                ▼
        Podcast guests   CXW Agency      Crusade X Warrior
        & partners       clients         members
```

**Strategic rules:**
1. The newsletter is the #1 conversion goal on every page. Social reach is rented. The list is owned.
2. Guests are the growth loop. Every featured guest shares their spotlight page, which brings their audience to the site, which grows the list.
3. The podcast is the trust builder. CXW Agency is the monetization arm. Crusade X Warrior is the community arm. The site connects them without turning into a sales page.
4. Ship lean, publish weekly. A live site with 3 episodes and a weekly email beats a perfect site that launches in 6 months.

**Success metrics for v1:**
- Email signups per week
- Guest/feature applications per month
- Partnership and agency inquiries per month
- Returning visitors to the blog

---

## 2. Sitemap

```
/                      Homepage
/about                 About (Honcho + the mission + the ecosystem)
/episodes              Episodes hub
/guests                Guest spotlight index
/guests/[guest-name]   Guest spotlight template (one per guest)
/blog                  Blog / newsletter hub
/blog/[post-slug]      Article template
/be-featured           Guest application + partnership page
/newsletter            Dedicated signup page (link target for social bios)
/thank-you             Post-signup / post-application confirmation
```

Footer-only: privacy policy, terms (simple pages, add at launch).

Nav (desktop): Episodes · Guests · Blog · About · **Be Featured** (button style) + persistent "Join the Newsletter" CTA.

---

## 3. Homepage Wireframe

```
┌──────────────────────────────────────────────┐
│ NAV: logo | Episodes Guests Blog About | [Be Featured] │
├──────────────────────────────────────────────┤
│ 1. HERO (black bg, logo mark, blue accent)   │
│    Headline + subhead                        │
│    [Join the Newsletter]  [Apply to Be Featured] │
│    Platform badges: Spotify · Apple · YouTube │
├──────────────────────────────────────────────┤
│ 2. WHAT THIS IS (3-column: Who / What / Why) │
├──────────────────────────────────────────────┤
│ 3. FEATURED EPISODES (3 episode cards)       │
│    [See All Episodes]                        │
├──────────────────────────────────────────────┤
│ 4. GUEST SPOTLIGHTS (2-3 guest cards)        │
│    [Meet the Guests]  [Apply to Be Featured] │
├──────────────────────────────────────────────┤
│ 5. NEWSLETTER BLOCK (full-width, blue accent)│
│    Headline + 2-field form                   │
├──────────────────────────────────────────────┤
│ 6. WORK WITH CXW AGENCY (dark card)          │
├──────────────────────────────────────────────┤
│ 7. CRUSADE X WARRIOR (dark card, brotherhood)│
├──────────────────────────────────────────────┤
│ 8. FROM THE BLOG (3 latest posts)            │
├──────────────────────────────────────────────┤
│ 9. FOOTER: logo, nav, socials, platforms,    │
│    contact, mini newsletter form, legal      │
└──────────────────────────────────────────────┘
```

---

## 4. Page-by-Page Breakdown + Copy

All copy below is launch-ready. Replace bracketed items with real details.

### 4.1 Homepage

**Hero headline:**
> Where Builders Talk Business, Systems, and Discipline.

**Alt headlines (pick one, A/B later):**
- Real Entrepreneurs. Real Systems. Real Proof.
- The Command Center for Entrepreneurs Who Execute.

**Subheadline:**
> CXW Command Center is the podcast for entrepreneurs, creators, and operators building with AI, discipline, and faith. Interviews, playbooks, and proof from people who actually do the work.

**Primary CTA:** `Join the Newsletter` → newsletter block
**Secondary CTA:** `Apply to Be Featured` → /be-featured

**Section 2 — What This Is (3 columns):**
- **The Interviews.** Entrepreneurs, creators, and local leaders share how they built what they built. No fluff. Real numbers, real systems, real lessons.
- **The Playbooks.** AI leverage, content systems, and business infrastructure broken down so you can use them this week.
- **The Standard.** Faith, discipline, and execution. This show is for people who want to build with a mission, not drift.

**Section 5 — Newsletter block:**
> **Get the Command Brief.**
> One email a week. Podcast takeaways, AI business plays, and lessons from entrepreneurs who execute. No spam. No filler.
> [First name] [Email] `Join Free`

**Section 6 — CXW Agency:**
> **Heard something on the show you want built?**
> CXW Agency is the implementation arm. Websites, lead capture, CRM, booking systems, follow-up automation, and AI workflows. We build the business command center so you can run the business.
> `See How CXW Agency Works` → /be-featured (agency interest) or agency site

**Section 7 — Crusade X Warrior:**
> **Built for more than business.**
> Crusade X Warrior is a brotherhood for men building faith, discipline, and strength on purpose. If you want structure, accountability, and mission instead of drift, this is your invitation.
> `Learn About the Movement`

### 4.2 About Page

Sections, in order:
1. **The Host.** Samuel "Honcho" Davenport III. Who he is, what he's built, why he has the seat. Lead with proof, not adjectives. (Needs: real bio facts, photo.)
2. **The Show.** Why CXW Command Center exists:
   > Most business content is theory from people who don't build. This show highlights the ones who do: entrepreneurs, creators, and operators in the trenches. Their stories are the proof. Their systems are the curriculum.
3. **The Mission.** Highlighting entrepreneurs and local leaders builds community, creates relationships, and documents what execution actually looks like.
4. **The Ecosystem.** One diagram/section: Podcast (media + trust) → CXW Agency (builds the systems) → Crusade X Warrior (builds the man). "Three arms. One standard."
5. **CTA row:** Join the Newsletter · Apply to Be Featured.

### 4.3 Episodes Page

- Grid of episode cards. Card contents: thumbnail, episode number, guest name, title, 1-2 sentence description, category tag, `Watch` / `Listen` buttons.
- Categories (v1 tags): Entrepreneurship · AI & Systems · Discipline & Faith · Local Leaders · Creator Economy.
- Top of page: 1 featured episode (larger card with embedded player).
- v1: manual tag filter buttons or none at all. Search: later.
- Each card links out to YouTube/Spotify (or an on-site episode page in v2).

### 4.4 Guest Spotlight Template

URL: `/guests/first-last`. Sections:
1. Hero: guest photo, name, business/brand, one-line descriptor.
2. Short bio (3-4 sentences, written by you, approved by guest).
3. Episode embed (YouTube or Spotify).
4. **Key takeaways** (3-5 bullets: "What we learned from [Name]").
5. Pull quote (styled blockquote, most shareable line from the episode).
6. Guest links: website + socials.
7. CTA block:
   > **Know someone who should be in this seat?**
   > We feature entrepreneurs, creators, and leaders with real stories and real proof.
   > `Apply to Be Featured` · `Nominate Someone`

Why this works: guests share their own spotlight page. Make it look premium and it becomes your best growth channel.

### 4.5 Blog / Newsletter Hub

Categories (v1): Podcast Recaps · AI & Business · Entrepreneur Spotlights · Discipline & Leadership · CXW Agency Case Studies · Crusade X Warrior.

Layout: featured post at top, then card grid with category filter chips. Newsletter signup block after every 6 posts and at page bottom.

Article template: title, date, category, hero image, body, author box (Honcho), end-of-post newsletter CTA:
> If this was useful, the newsletter goes deeper. One email a week. `Join the Command Brief`

### 4.6 Be Featured / Partnership Page

One page, two forms, conversion-focused.

**Hero:**
> **Your story could be the next episode.**
> CXW Command Center features entrepreneurs, creators, and leaders who build with proof. If that's you, apply below.

**Who should apply (checklist section):**
- You run a real business, brand, or community project.
- You have a story with lessons other builders can use.
- You can speak to at least one of: entrepreneurship, AI leverage, systems, discipline, faith-driven leadership, or community impact.

**Why being featured is valuable:**
- A professional spotlight page you can share and link forever.
- Exposure to an audience of builders, not spectators.
- A relationship with the CXW ecosystem: media, systems, and community.

**Form 1 — Guest Application** (fields in Section 8 below)
**Form 2 — Partnership Inquiry** (sponsors, collaborators, agency interest)
**Bottom CTA:** `Prefer to talk first? Book a 15-minute call.` (calendar link)

---

## 5. Conversion Strategy

| Visitor type | Entry point | Path | Conversion |
|---|---|---|---|
| Social follower | Homepage / blog | Content → newsletter block | Email signup |
| Potential guest | Guest spotlight page | Sees the treatment → applies | Guest application |
| Business owner | Episode / blog on AI-systems | Agency section → inquiry | Agency lead |
| Man seeking structure | About / CXW section | Movement section → interest form | CXW interest |
| Sponsor | Episodes + guests pages | Sees production quality → inquiry | Partnership lead |

**Rules:**
- One primary CTA per screen. Newsletter is default; pages with forms make the form primary.
- Every blog post and episode ends with a CTA. No dead ends.
- Thank-you page does double duty: confirms signup, then offers the next step ("While you're here: apply to be featured / follow on YouTube").

---

## 6. Newsletter Strategy — "The Command Brief"

- **Name:** The Command Brief. On-brand, ownable, describes the format.
- **Cadence:** Weekly, same day every week. Consistency beats volume.
- **Format (repeatable in 60-90 min/week):**
  1. One lesson from this week's episode or business
  2. One AI/system play the reader can use
  3. One guest or community spotlight
  4. One CTA (rotate: listen, apply, agency, CXW)
- **Tooling v1:** one email platform that also stores contacts (see tech stack). Tag subscribers by interest category from the signup form so future sends can be segmented.
- **Growth:** signup blocks on every page, /newsletter as the link-in-bio target, lead magnet in v1.5 (e.g., "The AI Command Center Starter Checklist").

---

## 7. Blog / Content Strategy

- **Cadence v1:** 1 post per week minimum. The podcast recap is the easy default: every episode becomes a post (takeaways + embed + quote). Zero extra research required.
- **Content ratio:** 50% podcast recaps/spotlights · 30% AI + systems playbooks · 20% discipline/faith/CXW.
- **Every post must:** target one search phrase, include one internal link to an episode or guest page, and end with the newsletter CTA.
- **Repurposing loop:** Episode → recap post → newsletter section → 3-5 social clips/quotes → all pointing back to the site.

---

## 8. Forms (final field lists)

**Newsletter Signup**
- First name (required)
- Email (required)
- Interest: ☐ Podcast ☐ AI & Business ☐ Crusade X Warrior ☐ Partnerships ☐ All updates

**Guest / Be Featured Application**
- Name · Email · Phone
- Business/brand name
- Website / social links
- What do you do? (short text)
- Why should your story be featured? (paragraph)
- What topics could you speak on? (short text)
- Interested in CXW Agency support? ☐ Yes ☐ No ☐ Tell me more

**Partnership Inquiry**
- Name · Email
- Organization/business
- Partnership type: Sponsorship / Collaboration / Media feature / CXW Agency services / Crusade X Warrior / Other
- Message
- Preferred next step: Email me / Book a call / Send details

All forms feed the same CRM/email tool, tagged by source.

---

## 9. CTA Library (use these, keep them consistent)

- `Join the Command Brief` / `Join Free` — newsletter
- `Apply to Be Featured` — guest funnel
- `Nominate Someone` — guest funnel (referral)
- `See How CXW Agency Works` — agency
- `Learn About the Movement` — Crusade X Warrior
- `Watch` / `Listen` — episodes
- `Book a 15-Minute Call` — partnerships

---

## 10. SEO — Titles & Meta Descriptions

| Page | Title | Meta description |
|---|---|---|
| Home | CXW Command Center — The Podcast for Entrepreneurs Who Execute | Interviews and playbooks on entrepreneurship, AI systems, discipline, and faith-driven leadership. Join the Command Brief newsletter. |
| About | About CXW Command Center & Samuel "Honcho" Davenport III | The mission behind CXW Command Center: highlighting entrepreneurs, building systems, and leading with discipline and faith. |
| Episodes | Podcast Episodes — CXW Command Center | Every episode of CXW Command Center. Entrepreneurs, creators, and leaders on business, AI leverage, and discipline. |
| Guests | Featured Guests — CXW Command Center | Meet the entrepreneurs and leaders featured on CXW Command Center. Real stories, real systems, real proof. |
| Blog | The Command Brief Blog — Business, AI & Discipline | Weekly lessons on entrepreneurship, AI business systems, discipline, and leadership from the CXW ecosystem. |
| Be Featured | Be a Guest or Partner — CXW Command Center | Apply to be featured on CXW Command Center or inquire about sponsorships, partnerships, and CXW Agency services. |

Guest pages: `[Guest Name] — [Business] | CXW Command Center`.
Blog posts: keyword-first titles ("How [Guest] Built [Result] — CXW Command Center").

Also at launch: Open Graph images (logo-based template), sitemap.xml, and Podcast/Organization schema markup.

---

## 11. Design Direction

Full system in `DESIGN.md`. Summary:

- **Palette from the actual logo:** near-black (#0A0C10), charcoal (#14181F), steel silver/white text, **electric blue accent (#1E6FFF range)**. The brief suggested gold; the logo is blue/steel. Blue wins: it matches the mark, reads tactical/AI-forward, and avoids a clash. Gold only if the logo is redesigned.
- **Motif:** subtle command-center cues from the logo's reticle: thin rules, crosshair tick marks on section dividers, dot-grid backgrounds at low opacity. Subtle. Never gamer/HUD-cluttered.
- **Typography:** a strong geometric/military-adjacent sans for headlines (e.g., Rajdhani, Saira, or Space Grotesk), a clean readable sans for body (Inter). All-caps micro-labels with letter-spacing for section eyebrows ("FEATURED GUESTS").
- **Layout:** dark theme, generous spacing, card-based media grids, one accent color used only for CTAs and key highlights.
- **Imagery:** real photography of host and guests. Until real photos exist, use dark-styled placeholders clearly marked, never stock "podcast mic" clichés.

---

## 12. Tech Stack (v1 recommendation)

Given CXW Agency already works with GHL-style tooling:

- **Site:** Static HTML/CSS/JS (or Astro if a build step is acceptable) deployed on **Cloudflare Pages** via GitHub. Fast, free, SEO-clean, matches the existing `build-website` deployment workflow.
- **Blog:** Markdown files → static pages (Astro makes this trivial; plain HTML works with a simple template until volume grows).
- **Forms + email + CRM:** **GoHighLevel** (already in the CXW stack) — forms embed or POST into GHL, contacts tagged by source/interest, newsletter sent from GHL. Alternative if simpler is wanted: Kit (ConvertKit) for email + Tally for forms.
- **Episodes:** embed YouTube/Spotify. No self-hosted audio in v1.
- **Analytics:** Google Analytics 4 + Search Console. Optional: Cloudflare Web Analytics.
- **Booking:** existing GHL calendar or Cal.com link for the 15-minute partnership call.

---

## 13. Build Now vs. Later

**Now (launch scope):**
- Home, About, Episodes, Be Featured, Newsletter/thank-you pages
- 2-3 guest spotlight pages (template proven with real guests)
- 3-5 blog posts (episode recaps count)
- All 3 forms wired to CRM/email
- Analytics, OG images, sitemap, schema

**Later (v1.5-v2):**
- Episode search/filtering
- Lead magnet + dedicated landing page
- On-site episode pages with transcripts (big SEO play)
- Sponsor/media kit page with audience stats
- Crusade X Warrior dedicated site/section expansion
- Case studies section for CXW Agency
- Member/community area

**Never (for this site):** user accounts, comments, heavy CMS, e-commerce.

---

## 14. Launch Checklist

- [ ] Real bio, photos, and episode list collected from Honcho
- [ ] Podcast platform links confirmed (Spotify, Apple, YouTube, RSS)
- [ ] Logo exported as web-ready SVG/PNG (transparent bg + favicon) from `Assest/`
- [ ] DESIGN.md palette/type approved
- [ ] All pages built and reviewed at 375px and 1440px
- [ ] All 3 forms tested end-to-end → contact appears in CRM with correct tag
- [ ] Newsletter welcome email written and automated
- [ ] Thank-you page live with next-step CTA
- [ ] Every link clicked, zero placeholders unmarked
- [ ] SEO titles/metas set, sitemap submitted to Search Console
- [ ] GA4 firing verified
- [ ] Domain connected, HTTPS confirmed
- [ ] First Command Brief email scheduled
- [ ] Guests notified their spotlight pages are live (they share = launch traffic)
