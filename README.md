# Aathava Construction — Web Demo

A modern, responsive marketing website for **Aathava Construction** showcasing interior design and civil construction services with portfolio gallery, project stats, testimonials and a quote request form.

---

## Tech Stack

- HTML5
- CSS3 (custom properties, grid, animations)
- Vanilla JavaScript (ES6)
- No build step, no dependencies

---

## How to Run (Terminal)

### Option 1 — Python (recommended)

```bash
# from project folder
python -m http.server 8080
```

Open http://localhost:8080 in your browser.

> Windows may use `py -m http.server 8080` if `python` is not on PATH.

### Option 2 — Node.js (npx)

```bash
npx serve .
```

Open the URL shown in the terminal (usually http://localhost:3000).

### Option 3 — VS Code Live Server

1. Install the **Live Server** extension
2. Right-click `index.html` → **Open with Live Server**

### Option 4 — Just open the file

```bash
start index.html      # Windows
open index.html       # macOS
xdg-open index.html   # Linux
```

> Some features (fetch, modules) work best over HTTP — always prefer Option 1 or 2.

---

## Project Structure

```
athv_const/
├── index.html      # Main page (all sections)
├── styles.css      # All styling & responsive design
├── app.js          # Portfolio data, filters, counters, form
├── assets/
│   └── img/        # Put your project photos here
└── README.md
```

---

## Sections Included

| Section | Description |
|---|---|
| Hero | Headline, CTA buttons, animated mini stats |
| Services | Interior Design + Civil Construction cards, 4-step process |
| Stats | Animated counters (projects, clients, years, team) |
| Portfolio | 12 projects with category filters + lightbox viewer |
| Testimonials | Client reviews with star ratings |
| Contact | Validated quote request form + contact details |
| Footer | Links, services, contact info |

---

## Adding Your Own Photos

1. Save photos into `assets/img/`, e.g. `assets/img/kitchen-1.jpg`
2. Open `app.js` and find the `PROJECTS` array
3. Set the `image` field on any project:

```js
{
  id: 2,
  title: "Luxury Modular Kitchen",
  category: ["modular", "interior"],
  desc: "...",
  glyph: "🍳",
  color: "linear-gradient(135deg,#8a5a2b,#c8933f)",
  meta: ["Modular", "L-Shape", "18 Days"],
  image: "assets/img/kitchen-1.jpg"   // <- add this
}
```

- `image` filled → photo is shown
- `image: ""` → styled gradient placeholder with emoji is shown

---

## Editing Content

| What to change | Where |
|---|---|
| Project count / stats numbers | `index.html` → `data-count="150"` attributes |
| Portfolio projects | `app.js` → `PROJECTS` array |
| Services text | `index.html` → `#services` section |
| Phone / email / address | `index.html` → `#contact` section |
| Colors / theme | `styles.css` → `:root` variables |
| Testimonials | `index.html` → `#testimonials` section |

---

## Quote Form (Demo Mode)

The form currently simulates a submission (1.2s delay → success message) and logs the data to the browser console.

To connect a real backend, replace the `setTimeout` block in `app.js` (`initForm`) with:

```js
await fetch("https://your-api.com/enquiry", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data)
});
```

Popular no-code options: **Formspree**, **Google Forms API**, **EmailJS**.

---

## Browser Support

Works on Chrome, Edge, Firefox, Safari (last 2 versions). Fully responsive from 360px upward.

---

## License

Demo project for Aathava Construction. All rights reserved.
