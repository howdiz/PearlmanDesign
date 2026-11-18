#!/usr/bin/env python3
"""Build optimized site images from the curated project list.

Inputs : site/assets/projects.js            (curated list: which source photos, in what order)
         research/instagram/img/<src>.jpg  (scraped source photos)
Outputs: site/assets/img/<slug>-<n>-<width>.webp and .jpg   (480 / 800 / 1080 px wide)
         site/assets/og-image.jpg                            (1200x630 social preview)
         site/assets/projects.js (rewritten: records w, h and widths for each image)

Only photos named in projects.js are ever read or written, so nothing from the
do-not-use list can reach site/ unless it is added to that file on purpose.

Run from anywhere:  python3 tools/build_images.py
Requires Pillow (no other dependencies).
"""
import json
import re
import sys
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent
SRC_DIR = ROOT / "research" / "instagram" / "img"
DATA_JS = ROOT / "site" / "assets" / "projects.js"
OUT_DIR = ROOT / "site" / "assets" / "img"
OG_OUT = ROOT / "site" / "assets" / "og-image.jpg"

WIDTHS = (480, 800, 1080)
WEBP_QUALITY = 78
JPEG_QUALITY = 82
BORDER_THRESHOLD = 14  # luma at or below this counts as a black letterbox bar
BORDER_MIN_FRACTION = 0.015  # ignore trims smaller than 1.5% of a side
OG_SIZE = (1200, 630)


def load_data():
    text = DATA_JS.read_text(encoding="utf-8")
    start = text.index("window.PEARLMAN_DATA")
    start = text.index("{", start)
    end = text.rindex("}")
    return text[: text.index("window.PEARLMAN_DATA")], json.loads(text[start : end + 1])


def save_data(header, data):
    body = json.dumps(data, indent=1, ensure_ascii=False)
    body = re.sub(r"\[\s+([\d,\s]+?)\s+\]", lambda m: "[" + " ".join(m.group(1).split()) + "]", body)
    DATA_JS.write_text(f"{header}window.PEARLMAN_DATA = {body};\n", encoding="utf-8")


def trim_black_borders(im):
    """Crop pure-black letterbox bars (reel covers, some phone exports)."""
    bbox = im.convert("L").point(lambda v: 255 if v > BORDER_THRESHOLD else 0).getbbox()
    if not bbox:
        return im
    w, h = im.size
    left, top, right, bottom = bbox
    significant = (
        left > w * BORDER_MIN_FRACTION
        or top > h * BORDER_MIN_FRACTION
        or w - right > w * BORDER_MIN_FRACTION
        or h - bottom > h * BORDER_MIN_FRACTION
    )
    return im.crop(bbox) if significant else im


def open_source(name):
    path = SRC_DIR / f"{name}.jpg"
    if not path.is_file():
        sys.exit(f"missing source photo: {path}")
    im = ImageOps.exif_transpose(Image.open(path)).convert("RGB")
    return trim_black_borders(im)


def widths_for(source_width):
    """Standard rungs that fit; never upscale. Smaller sources top out at native width."""
    rungs = [w for w in WIDTHS if w <= source_width]
    if not rungs or rungs[-1] < min(source_width, WIDTHS[-1]):
        rungs.append(min(source_width, WIDTHS[-1]))
    return rungs


def save_variants(im, stem):
    produced = []
    rungs = widths_for(im.width)
    for w in rungs:
        h = round(im.height * w / im.width)
        resized = im if w == im.width else im.resize((w, h), Image.Resampling.LANCZOS)
        resized.save(OUT_DIR / f"{stem}-{w}.webp", "WEBP", quality=WEBP_QUALITY, method=6)
        resized.save(OUT_DIR / f"{stem}-{w}.jpg", "JPEG", quality=JPEG_QUALITY, optimize=True, progressive=True)
        produced += [f"{stem}-{w}.webp", f"{stem}-{w}.jpg"]
    top = rungs[-1]
    return rungs, top, round(im.height * top / im.width), produced


def build_og(data):
    slug = data["og"]
    project = next(p for p in data["projects"] if p["slug"] == slug)
    im = open_source(project["images"][0]["src"])
    og = ImageOps.fit(im, OG_SIZE, Image.Resampling.LANCZOS, centering=(0.5, 0.55))
    og.save(OG_OUT, "JPEG", quality=84, optimize=True, progressive=True)


def main():
    header, data = load_data()
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    expected = set()
    slugs = set()
    for project in data["projects"]:
        slug = project["slug"]
        if slug in slugs or not re.fullmatch(r"[a-z0-9-]+", slug):
            sys.exit(f"bad or duplicate slug: {slug}")
        slugs.add(slug)
        for i, image in enumerate(project["images"], start=1):
            im = open_source(image["src"])
            widths, w, h, produced = save_variants(im, f"{slug}-{i}")
            image.update({"w": w, "h": h, "widths": widths})
            expected.update(produced)
    build_og(data)
    for stale in OUT_DIR.iterdir():
        if stale.name not in expected and stale.suffix in (".webp", ".jpg"):
            stale.unlink()
            print("removed stale", stale.name)
    save_data(header, data)
    total = sum(p.stat().st_size for p in OUT_DIR.iterdir())
    print(f"{len(data['projects'])} projects, {sum(len(p['images']) for p in data['projects'])} images, "
          f"{len(expected)} files, {total / 1e6:.1f} MB, og-image written")


if __name__ == "__main__":
    main()
