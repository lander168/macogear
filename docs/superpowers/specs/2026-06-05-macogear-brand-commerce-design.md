# MACOGEAR Brand Commerce Website Design

Date: 2026-06-05

## Goal

Build the first public website for `macogear`, a professional performance outdoor accessories brand focused on headwear and face protection products such as balaclavas, face covers, caps, and hats.

The first version should make the brand look credible, technical, and ready for commercial inquiries. It should support product discovery and purchase intent without implementing a full checkout, payment, inventory, or account system.

## Audience

- Outdoor sports users who need head and face protection for cycling, running, hiking, skiing, training, and travel.
- Retailers, distributors, and bulk buyers evaluating the brand.
- Early customers who need enough product information to contact the seller.

## Brand Direction

The visual direction is professional performance gear:

- Primary feel: technical, durable, protective, precise.
- Palette: black, graphite, cool white, steel gray, with a small amount of high-visibility accent color.
- Typography: strong uppercase brand moments, compact readable product text, no decorative fonts.
- Imagery: outdoor performance scenes and product-focused compositions. Temporary high-quality placeholders are acceptable until real product photos are available.

## Scope

The first version is a static responsive website with a brand homepage and lightweight commerce flow.

Included:

- Responsive landing page optimized for desktop and mobile.
- Brand hero section for `MACOGEAR`.
- Product series overview for balaclavas, face covers, caps, and hats.
- Product cards with inquiry actions.
- Front-end inquiry list interaction.
- Functional feature highlights.
- Outdoor use-case section.
- Contact and wholesale inquiry section.
- Clear deployability to static hosting such as Vercel, Netlify, Cloudflare Pages, or GitHub Pages.

Excluded from the first version:

- Payment checkout.
- User accounts.
- Inventory management.
- Backend form submission.
- Admin dashboard.
- Real shipping, tax, or order tracking logic.

## Site Structure

### Header

The header contains the `MACOGEAR` wordmark, compact navigation, and a primary inquiry action. Navigation links scroll to the main sections:

- Gear
- Products
- Performance
- Contact

On mobile, the layout should remain simple and avoid cramped multi-row navigation.

### Hero

The first viewport communicates the brand immediately:

- Large `MACOGEAR` headline.
- Short positioning line: performance outdoor headwear and face protection.
- Primary action: view products.
- Secondary action: contact for purchase or wholesale.
- Visual treatment should feel like technical outdoor equipment rather than a generic clothing store.

### Product Series

Show three core product families:

- Balaclavas: wind protection, warmth, coverage for cycling, skiing, and motorcycle-style outdoor use.
- Face Covers: sun, dust, and wind protection for running, hiking, and cycling.
- Caps & Hats: lightweight, quick-dry, sun-protective headwear for training and outdoor daily use.

Each series should have short, scannable copy and technical feature tags.

### Product Cards

Show six starter product cards:

- Alpine Shield Balaclava
- AeroMesh Face Cover
- TrailDry Running Cap
- ThermalGrid Hood
- SolarGuard Neck Gaiter
- PackLite Outdoor Hat

Each card includes:

- Product category.
- Product name.
- Short use-case description.
- Feature tags.
- Color placeholder.
- Size placeholder.
- Price shown as "Request quote" or inquiry-oriented text.
- Button to add the product to an inquiry list.

The inquiry interaction is front-end only. When a user adds products, the page shows the selected products and provides a contact action using `mailto:` with a prefilled subject/body.

### Performance Features

Highlight product benefits:

- Wind resistant coverage.
- UPF-style sun protection messaging without making unsupported medical claims.
- Breathable and quick-dry comfort.
- Stretch fit.
- Lightweight packability.
- Multi-sport usage.

### Use Cases

Show key scenarios:

- Cycling
- Running
- Hiking
- Skiing
- Training
- Travel

The section should help users understand when each product type matters.

### Contact

The contact section supports purchase and wholesale intent:

- Email contact placeholder.
- WhatsApp or WeChat placeholder.
- Wholesale and distributor inquiry copy.
- Inquiry summary generated from selected product cards.

If exact contact details are not known, use clearly replaceable placeholders.

## Technical Design

Use a static website structure:

- `index.html` for markup.
- `styles.css` for visual system and responsive layout.
- `script.js` for inquiry-list behavior and small UI interactions.

No build step is required for the first version. This keeps deployment simple and allows the site to be opened locally or hosted on static platforms.

## Responsive Behavior

- Desktop: dense but polished brand layout, multi-column product and feature grids.
- Tablet: two-column product grids where space allows.
- Mobile: single-column content, thumb-friendly buttons, readable product cards, no horizontal overflow.

Text must not overlap or overflow controls. Product cards should use stable dimensions and flexible content wrapping.

## Accessibility

- Use semantic HTML sections and headings.
- Ensure buttons have clear labels.
- Maintain readable contrast.
- Support keyboard activation for inquiry actions.
- Avoid relying on color alone for product state.

## Testing And Verification

Verification should include:

- Local browser preview.
- Desktop viewport screenshot inspection.
- Mobile viewport screenshot inspection.
- Check that inquiry buttons update the inquiry summary.
- Check that the generated `mailto:` link includes selected products.
- Check that no text overlaps or spills outside containers.

## Open Content Placeholders

The following values can be replaced later:

- Real product photos.
- Real product prices.
- Real contact email.
- Real WhatsApp or WeChat details.
- Final product names and SKU data.

For the first version, placeholders are acceptable as long as they look intentional and are easy to replace.
