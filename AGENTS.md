# AGENTS.md — CXW Command Center Podcast Website

This file is the working context for Claude Code and any other AI coding agent
touching this project. Read it fully before making any change. If an
instruction here conflicts with a one-off request from the user in chat, the
chat request wins for that session — but update this file afterward if the
change is meant to stick.

Pattern inspiration: Karpathy's `autoresearch` repo uses a single Markdown
file (`program.md`) as the agent's "constitution" — goal, constraints, and a
loop the agent re-reads every iteration instead of drifting from instructions
over a long session. This file plays that role for the CXW website build.

---

## 1. Project Purpose

CXW Command Center Podcast needs a website. This repo is currently empty —
no code has been written yet. The first agent to touch this project is
responsible for scaffolding it according to this file, not inventing its own
structure.

## 2. Website Goals

- Give the podcast a real home online: episode listing, show notes, subscribe
  links (Spotify/Apple/YouTube/RSS), and a way for listeners to contact the
  show.
- Fast, simple, low-maintenance. This is a content site, not a SaaS product —
  avoid over-engineering.
- Mobile-first. Most listeners will land here from a phone after seeing a
  social post or podcast app link.

> If specific pages/features beyond the above are agreed with the user,
> record them here as they're decided so future agent sessions don't have to
> re-ask.

## 3. Brand / Style Direction

- Voice: direct, no-fluff, "command center" framing — the site should feel
  operational and confident, not cutesy.
- No brand kit/colors/fonts have been finalized yet. **Do not invent a full
  visual identity unprompted.** If no `DESIGN.md` or brand assets exist when
  you start frontend work, stop and ask the user, or run the
  `design-consultation` skill, before picking colors/fonts.
- Once a direction is chosen, capture it in `DESIGN.md` and treat it as
  locked unless the user says otherwise.

## 4. Tech Stack Assumptions

None are locked in yet. Default to the simplest thing that works:

- Static site (plain HTML/CSS/JS, or a lightweight static site generator)
  unless the user needs dynamic features (auth, database, CMS) — ask before
  reaching for a full framework.
- If a framework is genuinely needed, prefer whatever the user already knows
  or requests. Don't silently swap frameworks mid-project.
- Once a stack is chosen, record it here (this section) so it isn't
  re-litigated every session.

## 5. Folder / File Structure

Target layout (create as needed, don't pre-create empty scaffolding you
won't fill in immediately):

```
CXW.Command.Center.Podcast/
├── AGENTS.md              # this file — do not delete
├── DESIGN.md              # brand/style system, created once decided
├── index.html             # homepage (or src/ equivalent if using a framework)
├── episodes/               # episode pages or data
├── assets/
│   ├── images/
│   └── audio/               # if hosting audio directly (usually just links out)
├── css/ or styles/
├── js/ or scripts/
└── CHANGELOG.md            # major-change log, see Section 9
```

Keep the structure flat and obvious. Don't add `src/`, `lib/`, `dist/`
build tooling unless the chosen stack requires it.

## 6. Development Rules

- Don't add features, pages, or abstractions the user hasn't asked for.
  A podcast site does not need user accounts, a CMS backend, or a design
  system with 20 components on day one.
- No placeholder/lorem-ipsum content in anything presented as "done" — ask
  the user for real copy (episode titles, bio, links) or clearly mark
  sections as `TODO: needs content from user`.
- Don't invent social links, subscribe URLs, or contact emails — get them
  from the user and treat placeholders as blocking, not cosmetic.
- Keep dependencies minimal. Justify any new package before adding it.
- Test in a real browser before calling frontend work done (see Section 8).

## 7. What the Agent Should / Should Not Modify

**Should modify freely:**
- Site content, layout, and styling files listed in Section 5.
- `DESIGN.md` and `CHANGELOG.md` as the project evolves.

**Should not modify without explicit confirmation:**
- `AGENTS.md` itself — propose changes to the user rather than silently
  rewriting the project's own instructions.
- Deployment/DNS/domain configuration — these are hard to reverse and
  affect a live, shared endpoint once connected.
- Anything outside this project folder.

**Should never do:**
- Force-push, delete git history, or run destructive shell commands against
  this folder without asking first.
- Fabricate podcast content (episode numbers, guest names, quotes).

## 8. Testing / Validation Steps

Before marking any visible change "done":

1. Start a local server / open the page and actually look at it — don't
   assume markup is correct from reading it.
2. Check mobile width (≈375px) and desktop width layouts.
3. Click every nav link, subscribe link, and form on the page to confirm
   they go somewhere real (or are clearly marked TODO).
4. Check the browser console for errors.
5. If the `verify` or `run` skill is available for this project type, use
   it instead of ad hoc checks.

## 9. Definition of Done

A piece of work is done when:

- It matches what the user actually asked for — not a superset "while I was
  in there" expansion.
- It has been visually verified per Section 8, not just written.
- There are no placeholder links/content left unmarked.
- Any new major decision (stack choice, page added, brand direction) is
  logged per Section 10.

## 10. Logging Major Changes

Keep a `CHANGELOG.md` at the project root. Add an entry (newest on top) any
time you:

- Choose or change the tech stack.
- Add or remove a page/section.
- Lock in brand/style direction.
- Make a structural change future sessions need to know about.

Format:

```
## 2026-07-07 — Short title
What changed and why (1-3 sentences). Not a diff — a decision record.
```

Small copy edits and routine bug fixes don't need a changelog entry.

---

## Execution Loop (for the agent, each session)

1. Read this file in full.
2. Read `DESIGN.md` and `CHANGELOG.md` if they exist, to pick up prior
   decisions.
3. Confirm what the user is asking for this session; if it conflicts with
   a locked decision above (stack, brand), flag the conflict instead of
   silently overriding it.
4. Do the work, following Sections 6–7.
5. Validate per Section 8.
6. Update `CHANGELOG.md` (and this file, if a stack/structure decision was
   just locked in) before ending the session.
