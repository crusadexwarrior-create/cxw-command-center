# DESIGN.md — CXW Command Center Visual System

Locked design direction for the website. Derived from the actual brand logo
(`Assest/ChatGPT Image Jul 7, 2026, 06_30_38 PM.png`): black background,
steel-silver lettering, electric blue accents, targeting-reticle mark.

## Palette

| Token | Hex | Use |
|---|---|---|
| `--bg` | `#0A0C10` | Page background (near-black) |
| `--surface` | `#14181F` | Cards, sections (charcoal) |
| `--surface-2` | `#1C222C` | Elevated cards, hover states |
| `--text` | `#E8ECF2` | Primary text (steel white) |
| `--text-muted` | `#8A94A6` | Secondary text, captions |
| `--accent` | `#1E6FFF` | CTAs, links, key highlights ONLY |
| `--accent-hover` | `#3D84FF` | CTA hover |
| `--line` | `#2A313D` | Borders, dividers, reticle rules |

Rules:
- Blue is scarce. CTAs, active states, and one highlight per screen. Scarcity = impact.
- No gold. The logo is blue/steel. Revisit only if the logo is redesigned.
- No pure #000 or #FFF; use the tokens.

## Typography

- **Headlines:** Rajdhani or Saira Condensed (Google Fonts), weight 600-700.
  Uppercase for H1/eyebrows with `letter-spacing: 0.06em`.
- **Body:** Inter, 16-18px, line-height 1.6.
- **Eyebrow labels:** 12-13px, uppercase, letter-spaced, `--text-muted`
  (e.g., "FEATURED GUESTS", "THE COMMAND BRIEF").

## Motif — Command Center, Subtle

Borrowed from the logo's reticle, used sparingly:
- Thin 1px horizontal rules with small crosshair tick marks at section breaks.
- Low-opacity dot-grid or fine-line background texture in hero and CTA bands only.
- Square corners or 4-6px radius max. No pill shapes except platform badges.
- Never: HUD clutter, scanlines, glitch effects, sci-fi overload.

## Components

- **Buttons:** Primary = solid `--accent`, white text, uppercase, 600 weight.
  Secondary = 1px `--line` border, `--text`, transparent bg.
- **Episode/guest/blog cards:** `--surface` bg, 1px `--line` border, image top,
  eyebrow tag, title, 2-line description, CTA row. Hover: border → `--accent`.
- **Newsletter band:** full-width `--surface` with dot-grid texture, inline
  2-field form, primary button.
- **Blockquotes (guest quotes):** large Rajdhani text, left `--accent` border.

## Layout

- Max content width 1200px, generous vertical spacing (96-128px between sections desktop, 64px mobile).
- Mobile-first. Test at 375px before desktop.
- One primary CTA per viewport.

## Imagery

- Real photos of host and guests, treated with a subtle dark duotone if needed
  for consistency.
- Placeholders must be dark-styled blocks labeled "PHOTO: [what goes here]".
  No stock microphone/podcast clichés.

## Logo Usage

- Source: `Assest/` (export a transparent-background version + square icon
  crop of the reticle mark for favicon/OG).
- Logo only on dark backgrounds. Never on white.
