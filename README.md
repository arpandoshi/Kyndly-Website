# Kyndly Health — Coming Soon Page

Static landing page for `gokyndly.com`. Collects waitlist signups and provides a contact form.

## Stack

- Pure HTML/CSS/JS — zero build step, zero dependencies
- Hosted on **Vercel** (static deployment)
- Source control: **GitHub**

---

## Deployment (Vercel)

1. Push this repo to GitHub
2. In Vercel dashboard → **Add New Project** → Import your GitHub repo
3. Framework preset: **Other** (no build step)
4. Root directory: `/` (or the folder containing `index.html`)
5. Click **Deploy**

To connect your domain `gokyndly.com`:
- Vercel dashboard → Project → Settings → Domains → Add `gokyndly.com`
- Update your DNS nameservers to point to Vercel (or add an A record per Vercel's instructions)

---

## Email Collection — Integration Options

The waitlist and contact forms are wired up with placeholder handlers. Choose one of the following to activate real data collection:

### Option A — Formspree (Recommended for quick launch)

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create two forms: one for **Waitlist**, one for **Contact**
3. In `index.html`, find the two `<form>` elements and update their `action` attributes:

```html
<!-- Waitlist form -->
<form action="https://formspree.io/f/YOUR_WAITLIST_ID" method="POST">

<!-- Contact form -->
<form action="https://formspree.io/f/YOUR_CONTACT_ID" method="POST">
```

4. Remove the `onsubmit` handlers from both forms (Formspree handles redirects)
5. Formspree free tier: 50 submissions/month — upgrade for more

### Option B — Vercel Serverless Function

Create `/api/waitlist.js` in your project root:

```js
// api/waitlist.js
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { firstName, email } = req.body;
  // TODO: Save to Airtable, Mailchimp, Supabase, etc.
  console.log('New waitlist signup:', firstName, email);
  res.status(200).json({ ok: true });
}
```

Then in your JS:
```js
const resp = await fetch('/api/waitlist', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ firstName, email })
});
```

### Option C — Mailchimp Embedded Form

Replace the form action with your Mailchimp POST URL and rename fields to match Mailchimp's expected field names (`FNAME`, `EMAIL`).

---

## Email Addresses Used

Update these in `index.html` once your email accounts are configured:

| Purpose | Address |
|---|---|
| General | hello@gokyndly.com |
| Partnerships | partners@gokyndly.com |
| HCP Outreach | hcp@gokyndly.com |

---

## Local Development

No build step required. Open `index.html` directly in a browser, or use VS Code's **Live Server** extension for hot reload.

```bash
# Optional: serve with npx
npx serve .
```

---

## File Structure

```
kyndly-coming-soon/
├── index.html      # Main landing page (all-in-one)
├── vercel.json     # Vercel static routing config
└── README.md       # This file
```

---

*Kyndly Health, LLC — Houston, TX — gokyndly.com*
