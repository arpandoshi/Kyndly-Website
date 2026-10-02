# gokyndly.com

Static site for Kyndly Health. Pure HTML/CSS/JS, no build step, hosted on Vercel.

## Pages

| URL | File |
|---|---|
| `/` | `index.html` |
| `/about` | `about.html` |
| `/partner` | `partner.html` |
| `/privacy` | `privacy.html` |
| (any missing URL) | `404.html` |

Shared styles and scripts live in `assets/site.css` and `assets/site.js`. The clean URLs are set up as rewrites in `vercel.json`. `zohoverify/` holds Zoho Mail's domain-verification file — leave it in place.

The site has **no forms** and collects no personal data. All contact is by email to hello@gokyndly.com. If a form, analytics or online ordering is added, update `privacy.html` first.

## Copy rules

- No disease names (POTS, dysautonomia, etc.), no "patients", no treatment language.
- No physician, founder or medical-credential references.
- "LLC" appears only in the footer.
- Manufacturing is described as "cGMP-compliant manufacturing facilities", never "contract manufacturers".
- Every page keeps the FDA (DSHEA) disclaimer in the footer.

## Housekeeping

- `partner.html` has a SupplySide Global strip at the top. Remove it after Oct 30, 2026 (marked with a comment).

## Deploying

Every pull request gets a Vercel preview URL. Merging to `main` deploys to gokyndly.com.
