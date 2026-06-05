# MACOGEAR Static Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a static responsive MACOGEAR brand commerce website for outdoor headwear and face protection products.

**Architecture:** The site uses three focused files: `index.html` for semantic content, `styles.css` for the complete visual system and responsive behavior, and `script.js` for inquiry-list interactions. It has no build step and can be opened locally or deployed to static hosting.

**Tech Stack:** HTML, CSS, vanilla JavaScript.

---

## File Structure

- `index.html`: page structure, brand copy, product data rendered as markup, contact section, and script/style references.
- `styles.css`: technical performance visual design, responsive grids, buttons, product cards, inquiry panel, and mobile layout.
- `script.js`: product inquiry state, add/remove/clear interactions, selected product rendering, and prefilled `mailto:` generation.
- `docs/superpowers/specs/2026-06-05-macogear-brand-commerce-design.md`: source design spec.

### Task 1: Semantic Website Markup

**Files:**
- Create: `index.html`

- [ ] **Step 1: Create the full static HTML page**

Create `index.html` with semantic sections: header, hero, product series, product grid, performance features, use cases, and contact/inquiry.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>MACOGEAR | Performance Outdoor Headwear</title>
  <meta name="description" content="MACOGEAR designs performance outdoor headwear and face protection for cycling, running, hiking, skiing, and training.">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header class="site-header">
    <a class="brand" href="#top" aria-label="MACOGEAR home">MACOGEAR</a>
    <nav class="site-nav" aria-label="Main navigation">
      <a href="#gear">Gear</a>
      <a href="#products">Products</a>
      <a href="#performance">Performance</a>
      <a href="#contact">Contact</a>
    </nav>
    <a class="header-cta" href="#contact">Inquiry</a>
  </header>

  <main id="top">
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero-copy">
        <p class="eyebrow">Technical outdoor accessories</p>
        <h1 id="hero-title">MACOGEAR</h1>
        <p class="hero-lede">Performance headwear and face protection built for wind, sun, cold, dust, and long days outside.</p>
        <div class="hero-actions">
          <a class="button button-primary" href="#products">View products</a>
          <a class="button button-secondary" href="#contact">Contact wholesale</a>
        </div>
      </div>
      <div class="hero-panel" aria-label="MACOGEAR product focus">
        <div class="product-orbit">
          <span>Balaclavas</span>
          <span>Face Covers</span>
          <span>Caps & Hats</span>
        </div>
        <div class="mask-visual" aria-hidden="true"></div>
        <p>Head and face systems for motion, weather, and exposure.</p>
      </div>
    </section>

    <section class="section" id="gear" aria-labelledby="gear-title">
      <div class="section-heading">
        <p class="eyebrow">Gear families</p>
        <h2 id="gear-title">Built around coverage, comfort, and control.</h2>
      </div>
      <div class="series-grid">
        <article class="series-card">
          <p class="series-index">01</p>
          <h3>Balaclavas</h3>
          <p>Full-coverage protection for cold wind, speed, and mountain conditions.</p>
          <div class="tag-row"><span>Wind</span><span>Warmth</span><span>Helmet fit</span></div>
        </article>
        <article class="series-card">
          <p class="series-index">02</p>
          <h3>Face Covers</h3>
          <p>Breathable coverage for sun, dust, and variable outdoor exposure.</p>
          <div class="tag-row"><span>UPF style</span><span>Dust</span><span>Quick dry</span></div>
        </article>
        <article class="series-card">
          <p class="series-index">03</p>
          <h3>Caps & Hats</h3>
          <p>Lightweight headwear for training, shade, sweat control, and travel.</p>
          <div class="tag-row"><span>Shade</span><span>Packable</span><span>Low weight</span></div>
        </article>
      </div>
    </section>

    <section class="section product-section" id="products" aria-labelledby="products-title">
      <div class="section-heading split">
        <div>
          <p class="eyebrow">Product line</p>
          <h2 id="products-title">Select gear for an inquiry.</h2>
        </div>
        <p>First-version pricing is inquiry based. Choose products and send a prefilled request by email.</p>
      </div>
      <div class="product-grid">
        <article class="product-card" data-product="Alpine Shield Balaclava">
          <p class="product-category">Balaclava</p>
          <h3>Alpine Shield Balaclava</h3>
          <p>Cold-weather coverage for skiing, cycling, and exposed routes.</p>
          <div class="tag-row"><span>Thermal</span><span>Wind guard</span><span>Stretch fit</span></div>
          <dl><div><dt>Colors</dt><dd>Black / Graphite</dd></div><div><dt>Sizes</dt><dd>S-M / L-XL</dd></div></dl>
          <button class="button button-card" type="button" data-add-product="Alpine Shield Balaclava">Add to inquiry</button>
        </article>
        <article class="product-card" data-product="AeroMesh Face Cover">
          <p class="product-category">Face Cover</p>
          <h3>AeroMesh Face Cover</h3>
          <p>Breathable face protection for high-output rides and trail runs.</p>
          <div class="tag-row"><span>Air mesh</span><span>Dust cover</span><span>Fast dry</span></div>
          <dl><div><dt>Colors</dt><dd>Black / Ice Gray</dd></div><div><dt>Sizes</dt><dd>One size</dd></div></dl>
          <button class="button button-card" type="button" data-add-product="AeroMesh Face Cover">Add to inquiry</button>
        </article>
        <article class="product-card" data-product="TrailDry Running Cap">
          <p class="product-category">Cap</p>
          <h3>TrailDry Running Cap</h3>
          <p>Low-profile shade and sweat control for runs, hikes, and training.</p>
          <div class="tag-row"><span>Lightweight</span><span>Quick dry</span><span>Packable</span></div>
          <dl><div><dt>Colors</dt><dd>Black / Volt</dd></div><div><dt>Sizes</dt><dd>Adjustable</dd></div></dl>
          <button class="button button-card" type="button" data-add-product="TrailDry Running Cap">Add to inquiry</button>
        </article>
        <article class="product-card" data-product="ThermalGrid Hood">
          <p class="product-category">Hood</p>
          <h3>ThermalGrid Hood</h3>
          <p>Helmet-compatible warmth with a soft grid interior for cold starts.</p>
          <div class="tag-row"><span>Grid fleece</span><span>Helmet ready</span><span>Warm</span></div>
          <dl><div><dt>Colors</dt><dd>Black</dd></div><div><dt>Sizes</dt><dd>S-M / L-XL</dd></div></dl>
          <button class="button button-card" type="button" data-add-product="ThermalGrid Hood">Add to inquiry</button>
        </article>
        <article class="product-card" data-product="SolarGuard Neck Gaiter">
          <p class="product-category">Neck Gaiter</p>
          <h3>SolarGuard Neck Gaiter</h3>
          <p>Convertible neck and lower-face coverage for sun and wind.</p>
          <div class="tag-row"><span>Sun cover</span><span>Multi-wear</span><span>Cooling feel</span></div>
          <dl><div><dt>Colors</dt><dd>Stone / Black</dd></div><div><dt>Sizes</dt><dd>One size</dd></div></dl>
          <button class="button button-card" type="button" data-add-product="SolarGuard Neck Gaiter">Add to inquiry</button>
        </article>
        <article class="product-card" data-product="PackLite Outdoor Hat">
          <p class="product-category">Hat</p>
          <h3>PackLite Outdoor Hat</h3>
          <p>Soft-brim coverage that folds down for travel and variable weather.</p>
          <div class="tag-row"><span>Soft brim</span><span>Travel</span><span>Shade</span></div>
          <dl><div><dt>Colors</dt><dd>Graphite / Sand</dd></div><div><dt>Sizes</dt><dd>M / L</dd></div></dl>
          <button class="button button-card" type="button" data-add-product="PackLite Outdoor Hat">Add to inquiry</button>
        </article>
      </div>
    </section>

    <section class="section performance" id="performance" aria-labelledby="performance-title">
      <div class="section-heading">
        <p class="eyebrow">Performance</p>
        <h2 id="performance-title">Protection that stays wearable in motion.</h2>
      </div>
      <div class="feature-grid">
        <article><h3>Wind coverage</h3><p>Panels and shapes designed to reduce direct exposure around the face, neck, and ears.</p></article>
        <article><h3>Sun-aware layers</h3><p>Coverage-focused designs for bright outdoor days without unsupported medical claims.</p></article>
        <article><h3>Breathable comfort</h3><p>Light structures help move heat and moisture during high-output activity.</p></article>
        <article><h3>Stretch fit</h3><p>Flexible fits support helmets, eyewear, and repeated movement.</p></article>
        <article><h3>Packable weight</h3><p>Easy to carry as conditions change across rides, routes, and travel days.</p></article>
        <article><h3>Multi-sport use</h3><p>Built for cycling, running, hiking, skiing, training, and everyday outdoor use.</p></article>
      </div>
    </section>

    <section class="section use-cases" aria-labelledby="use-title">
      <div class="section-heading split">
        <div>
          <p class="eyebrow">Use cases</p>
          <h2 id="use-title">One system, many outside conditions.</h2>
        </div>
      </div>
      <div class="case-strip" aria-label="Outdoor use cases">
        <span>Cycling</span><span>Running</span><span>Hiking</span><span>Skiing</span><span>Training</span><span>Travel</span>
      </div>
    </section>

    <section class="section contact" id="contact" aria-labelledby="contact-title">
      <div class="contact-copy">
        <p class="eyebrow">Inquiry</p>
        <h2 id="contact-title">Ready for product, wholesale, and distributor conversations.</h2>
        <p>Choose products above, then send a prefilled inquiry. Replace the contact placeholders with your real sales email and messaging details before publishing.</p>
        <div class="contact-methods">
          <p><strong>Email:</strong> sales@macogear.com</p>
          <p><strong>WhatsApp / WeChat:</strong> Add your contact ID</p>
        </div>
      </div>
      <aside class="inquiry-panel" aria-labelledby="inquiry-title">
        <h3 id="inquiry-title">Inquiry list</h3>
        <ul id="inquiry-list" class="inquiry-list">
          <li class="empty-state">No products selected yet.</li>
        </ul>
        <div class="inquiry-actions">
          <a class="button button-primary disabled" id="send-inquiry" href="mailto:sales@macogear.com?subject=MACOGEAR%20Product%20Inquiry">Send inquiry</a>
          <button class="button button-secondary" id="clear-inquiry" type="button">Clear</button>
        </div>
      </aside>
    </section>
  </main>

  <footer class="site-footer">
    <p>MACOGEAR</p>
    <p>Performance outdoor headwear and face protection.</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
```

- [ ] **Step 2: Verify page content loads**

Run: `test -f index.html`

Expected: exit code 0.

- [ ] **Step 3: Commit markup**

```bash
git add index.html
git commit -m "Build macogear site markup"
```

### Task 2: Responsive Visual System

**Files:**
- Create: `styles.css`

- [ ] **Step 1: Add complete styling**

Create `styles.css` with a technical brand palette, responsive grids, stable cards, and mobile-safe layout.

- [ ] **Step 2: Verify CSS exists and references key selectors**

Run: `rg -n "hero|product-grid|inquiry-panel|@media" styles.css`

Expected: matches for all four selector groups.

- [ ] **Step 3: Commit styling**

```bash
git add styles.css
git commit -m "Style macogear responsive site"
```

### Task 3: Inquiry Interaction

**Files:**
- Create: `script.js`

- [ ] **Step 1: Add inquiry state and mailto behavior**

Create `script.js` so each `data-add-product` button adds a product, updates the inquiry list, toggles selected state, and generates a prefilled `mailto:` link.

- [ ] **Step 2: Verify JavaScript syntax**

Run: `node --check script.js`

Expected: no syntax errors.

- [ ] **Step 3: Commit interaction**

```bash
git add script.js
git commit -m "Add macogear inquiry interaction"
```

### Task 4: Local Verification

**Files:**
- Modify: none unless verification finds layout or interaction issues.

- [ ] **Step 1: Run static file checks**

Run:

```bash
test -f index.html
test -f styles.css
test -f script.js
node --check script.js
```

Expected: all commands exit 0.

- [ ] **Step 2: Preview in browser**

Open `index.html` locally and inspect desktop and mobile widths.

Expected:

- Header, hero, products, performance, use cases, and contact sections are visible.
- Product cards wrap cleanly.
- Inquiry buttons update the selected product list.
- The email inquiry link includes selected products.
- No horizontal scrolling on mobile.

- [ ] **Step 3: Commit verification fixes if any**

If fixes are needed:

```bash
git add index.html styles.css script.js
git commit -m "Polish macogear static site"
```

If no fixes are needed, no commit is required.
