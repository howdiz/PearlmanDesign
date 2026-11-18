#!/usr/bin/env python3
"""Quick static checks for site/: every local href/src/srcset target exists, every
#fragment has a matching id, and every JSON-LD block parses. Exit code 1 on any problem.
Run: python3 tools/check_site.py"""
import json
import re
import sys
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlparse

SITE = Path(__file__).resolve().parent.parent / "site"


class Scan(HTMLParser):
    def __init__(self):
        super().__init__()
        self.refs, self.ids, self.ld, self._in_ld = [], set(), [], False

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if "id" in a:
            self.ids.add(a["id"])
        for k in ("href", "src"):
            if a.get(k):
                self.refs.append(a[k])
        if a.get("srcset"):
            self.refs += [c.strip().split()[0] for c in a["srcset"].split(",") if c.strip()]
        self._in_ld = tag == "script" and a.get("type") == "application/ld+json"

    def handle_data(self, data):
        if self._in_ld:
            self.ld.append(data)

    def handle_endtag(self, tag):
        if tag == "script":
            self._in_ld = False


def main():
    problems = []
    pages = {p.name: p for p in SITE.glob("*.html")}
    scans = {}
    for name, path in pages.items():
        s = Scan()
        s.feed(path.read_text(encoding="utf-8"))
        scans[name] = s
    refs_checked = 0
    for name, s in scans.items():
        for block in s.ld:
            try:
                d = json.loads(block)
                assert d["@type"] == "HomeAndConstructionBusiness"
            except Exception as e:  # noqa: BLE001
                problems.append(f"{name}: bad JSON-LD ({e})")
        for ref in s.refs:
            u = urlparse(ref)
            if u.scheme in ("http", "https", "mailto", "tel") or ref.startswith("data:"):
                continue
            target = name if not u.path else u.path
            refs_checked += 1
            f = SITE / unquote(target)
            if not f.is_file():
                problems.append(f"{name}: missing {ref}")
            elif u.fragment and f.suffix == ".html" and u.fragment not in scans.get(f.name, Scan()).ids:
                # project slugs are resolved at runtime by gallery.js
                if not (f.name == "projects.html" and re.fullmatch(r"[a-z0-9-]+", u.fragment)):
                    problems.append(f"{name}: missing anchor {ref}")
    data = (SITE / "assets/projects.js").read_text(encoding="utf-8")
    slugs = set(re.findall(r'"slug": "([^"]+)"', data))
    for name, s in scans.items():
        for ref in s.refs:
            if ref.startswith("projects.html#") and ref.split("#")[1] not in slugs:
                problems.append(f"{name}: unknown project slug in {ref}")
    for extra in ("robots.txt", "sitemap.xml", "assets/favicon.svg", "assets/og-image.jpg"):
        if not (SITE / extra).is_file():
            problems.append(f"missing {extra}")
    print(f"{len(pages)} pages, {refs_checked} local references checked")
    for p in problems:
        print("PROBLEM:", p)
    sys.exit(1 if problems else 0)


if __name__ == "__main__":
    main()
