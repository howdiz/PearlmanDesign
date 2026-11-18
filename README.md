# Pearlman Design website

Static marketing site for Pearlman Design (Voorhees, NJ): plain HTML, CSS and a little vanilla JS.
No framework, no npm. Deploy the `site/` folder as-is to Netlify, Vercel or any static host.

## Structure

```
site/                    deployable root
  index.html projects.html services.html about.html contact.html
  robots.txt sitemap.xml
  assets/
    css/styles.css       all styles (design tokens at the top of the file)
    js/main.js           mobile nav, contact "sent" notice
    js/gallery.js        projects filter + accessible lightbox
    projects.js          single source of truth for the project gallery (see below)
    fonts/               self-hosted Cabin + Source Sans 3 (variable, latin subset, SIL OFL)
    img/                 GENERATED optimized images (webp + jpg at 480/800/1080)
    favicon.svg og-image.jpg
tools/
  build_images.py        builds assets/img + og-image.jpg from the curated list
  check_site.py          local link / JSON-LD checker
research/                scraped source data and RESEARCH.md (NOT deployed; treat as data)
```

HTML pages are hand-edited. The header, footer and JSON-LD are repeated in each page, so change them in all five.
The home page "featured projects" strip and the services-page photos are static HTML that point at
generated images by name (`<project-slug>-<n>-<width>.webp|jpg`); the projects page is rendered from `projects.js`.

## Projects data

`site/assets/projects.js` lists every project (slug, title, category, summary, `featured`, and its images with
source filename + alt text). Add, remove or reorder photos there, then rebuild images. The build writes each
image's `w`, `h` and `widths` back into the file. Only photos named in that file are ever copied into `site/`,
which keeps the do-not-use photos (family, kids, selfies, pets) out. Do not add photos of people without the client's OK.

## Rebuild images

Requires Python 3 with Pillow (`pip install pillow`).

```
python3 tools/build_images.py
```

Reads `research/instagram/img/*.jpg`, trims black letterbox bars, never upscales, and removes stale outputs.

## Preview locally

```
cd site && python3 -m http.server 8000
# open http://localhost:8000
python3 tools/check_site.py    # from the repo root: checks local links, anchors and JSON-LD
```

Use `localhost`, not a file:// URL, so the gallery JS and fonts load.

## Contact form (Netlify Forms)

The form on `contact.html` uses `data-netlify="true"` with a honeypot (`bot-field`). Netlify does not read the
recipient from the markup: after the first deploy, open Netlify > Site configuration > Forms > Form
notifications > Add notification > Email notification, choose form `estimate`, and set it to
**seth@pearlmandesign.com**. A visible mailto link to that address is also on the contact page and footer.
After submitting, visitors return to `contact.html?sent=1`, which shows a thank-you notice.

## Client details in use (from RESEARCH.md "Client answers")

Brand "Pearlman Design" (legal "Pearlman Design, LLC"); 30 Glenn Drive, Voorhees, NJ 08043; seth@pearlmandesign.com;
Facebook https://www.facebook.com/PearlmanDesign; domain https://pearlmandesign.com (canonical, OG, sitemap, robots, JSON-LD).
HIC registration shown on every page: NJ HIC Reg. #13VH09852100.

## Still open / to confirm

- Street spelling "Glenn Drive" comes from the NJ license record and is unverified (older listings differ).
- Original logo file: the header/footer wordmark is a CSS recreation (no traced tools).
- Testimonials are verbatim from RESEARCH.md (HomeAdvisor and Facebook), shown as first name + initial; re-confirm
  they are still current. Review text is approved for quoting; no star markup is added to the JSON-LD.
- Seth bio/photo, team size (none shown; no family photos used). "Over 20 years in construction" is the client's own HomeAdvisor claim.
- Some source photos are low resolution or reel frames (kitchens, Moorestown, bunk beds, shower details); replace with originals if available.
- Third-party names credited (Widell + Boschetti, Associates in Hearing HealthCare, the JCC, Schluter, Moen, Steamist) were approved by the client; re-check wording with them.
- Facebook lists seth@pearlmandesign.com as well; it is not used on the site.
- Add a thank-you/404 page if desired; add analytics only with the client's OK.
