/*
 * Pearlman Design - projects gallery: category filter + accessible lightbox.
 *
 * Public API: none (self-initializing on projects.html).
 * Inputs:     window.PEARLMAN_DATA from assets/projects.js (categories, projects[].images[]
 *             with src, alt, w, h, widths); optional ?category=<name> query and #<slug> hash.
 * Output:     renders filter buttons + project cards into #filters / #gallery and one
 *             <dialog> lightbox appended to <body>.
 * Failure modes: if the data file or <dialog> support is missing the page keeps its
 *             <noscript>-style fallback text and nothing throws.
 * A11y:       native modal <dialog> + explicit Tab trap, Esc closes, Left/Right/Home/End
 *             step through images, focus returns to the card that opened it.
 */
(function () {
  'use strict';

  var data = window.PEARLMAN_DATA;
  var filtersEl = document.getElementById('filters');
  var galleryEl = document.getElementById('gallery');
  var statusEl = document.getElementById('gallery-status');
  if (!data || !filtersEl || !galleryEl) return;

  var IMG_DIR = 'assets/img/';
  var CARD_SIZES = '(min-width: 992px) 33vw, (min-width: 576px) 50vw, 100vw';
  var LB_SIZES = '(min-width: 640px) calc(100vw - 12rem), 100vw';

  var projects = data.projects;
  var bySlug = {};
  projects.forEach(function (p) { bySlug[p.slug] = p; });

  var active = 'All';

  function el(tag, attrs, kids) {
    var node = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (attrs[k] === false || attrs[k] == null) return;
      if (k === 'text') node.textContent = attrs[k];
      else node.setAttribute(k, attrs[k] === true ? '' : attrs[k]);
    });
    (kids || []).forEach(function (kid) { if (kid) node.appendChild(kid); });
    return node;
  }

  function srcset(slug, n, img, ext) {
    return img.widths.map(function (w) {
      return IMG_DIR + slug + '-' + n + '-' + w + '.' + ext + ' ' + w + 'w';
    }).join(', ');
  }

  function fallbackSrc(slug, n, img) {
    var w = img.widths.filter(function (x) { return x <= 800; }).pop() || img.widths[0];
    return IMG_DIR + slug + '-' + n + '-' + w + '.jpg';
  }

  function picture(project, index, sizes, opts) {
    var n = index + 1;
    var img = project.images[index];
    var source = el('source', { type: 'image/webp', srcset: srcset(project.slug, n, img, 'webp'), sizes: sizes });
    var tag = el('img', {
      src: fallbackSrc(project.slug, n, img),
      srcset: srcset(project.slug, n, img, 'jpg'),
      sizes: sizes,
      width: img.w,
      height: img.h,
      alt: opts.alt != null ? opts.alt : img.alt,
      loading: opts.eager ? false : 'lazy',
      decoding: 'async'
    });
    return el('picture', {}, [source, tag]);
  }

  // ---------- Filters + cards ----------
  function countFor(cat) {
    return cat === 'All' ? projects.length : projects.filter(function (p) { return p.category === cat; }).length;
  }

  function renderFilters() {
    filtersEl.textContent = '';
    ['All'].concat(data.categories).forEach(function (cat) {
      var count = countFor(cat);
      if (!count) return;
      var btn = el('button', { type: 'button', class: 'filter', 'aria-pressed': cat === active ? 'true' : 'false', 'data-cat': cat }, [
        document.createTextNode(cat),
        el('span', { class: 'count', 'aria-hidden': 'true', text: '(' + count + ')' })
      ]);
      btn.addEventListener('click', function () { setFilter(cat); });
      filtersEl.appendChild(el('li', {}, [btn]));
    });
  }

  function setFilter(cat) {
    active = cat;
    Array.prototype.forEach.call(filtersEl.querySelectorAll('.filter'), function (b) {
      b.setAttribute('aria-pressed', b.getAttribute('data-cat') === cat ? 'true' : 'false');
    });
    renderCards();
  }

  function renderCards() {
    var list = projects.filter(function (p) { return active === 'All' || p.category === active; });
    galleryEl.textContent = '';
    list.forEach(function (p, i) {
      var count = p.images.length;
      var card = el('button', { type: 'button', class: 'project-card', 'data-slug': p.slug, 'aria-haspopup': 'dialog' }, [
        el('span', { class: 'thumb' }, [
          picture(p, 0, CARD_SIZES, { eager: i < 3, alt: '' }),
          el('span', { class: 'badge', text: count + (count === 1 ? ' photo' : ' photos') })
        ]),
        el('span', { class: 'meta' }, [
          el('span', { class: 'cat', text: p.location ? p.category + ' · ' + p.location : p.category }),
          el('span', { class: 'title', text: p.title })
        ])
      ]);
      card.addEventListener('click', function () { openLightbox(p.slug, 0, card); });
      galleryEl.appendChild(el('li', {}, [card]));
    });
    if (statusEl) {
      statusEl.textContent = 'Showing ' + list.length + (list.length === 1 ? ' project' : ' projects') +
        (active === 'All' ? '' : ' in ' + active);
    }
  }

  // ---------- Lightbox ----------
  var dialog, titleEl, summaryEl, countEl, figureEl, linkEl, closeBtn;
  var current = { project: null, index: 0, opener: null };
  var touchX = null;

  function buildLightbox() {
    closeBtn = el('button', { type: 'button', class: 'lb-btn lb-close', 'aria-label': 'Close gallery' }, [document.createTextNode('Close ✕')]);
    countEl = el('p', { class: 'lb-count', 'aria-live': 'polite' });
    figureEl = el('figure', { class: 'lb-figure' });
    var prev = el('button', { type: 'button', class: 'lb-btn lb-prev', 'aria-label': 'Previous photo' }, [document.createTextNode('‹')]);
    var next = el('button', { type: 'button', class: 'lb-btn lb-next', 'aria-label': 'Next photo' }, [document.createTextNode('›')]);
    var prevM = el('button', { type: 'button', class: 'lb-btn lb-prev', 'aria-label': 'Previous photo' }, [document.createTextNode('‹ Prev')]);
    var nextM = el('button', { type: 'button', class: 'lb-btn lb-next', 'aria-label': 'Next photo' }, [document.createTextNode('Next ›')]);
    titleEl = el('h2', { class: 'lb-title', id: 'lb-title' });
    summaryEl = el('p', { class: 'lb-summary' });
    linkEl = el('p', { class: 'lb-link' });

    var shell = el('div', { class: 'lb-shell' }, [
      el('div', { class: 'lb-top' }, [countEl, closeBtn]),
      el('div', { class: 'lb-stage' }, [prev, figureEl, next]),
      el('div', { class: 'lb-info' }, [titleEl, summaryEl, el('div', { class: 'lb-nav-mobile' }, [prevM, nextM]), linkEl])
    ]);
    dialog = el('dialog', { class: 'lightbox', 'aria-labelledby': 'lb-title' }, [shell]);
    document.body.appendChild(dialog);

    closeBtn.addEventListener('click', closeLightbox);
    [prev, prevM].forEach(function (b) { b.addEventListener('click', function () { step(-1); }); });
    [next, nextM].forEach(function (b) { b.addEventListener('click', function () { step(1); }); });

    dialog.addEventListener('keydown', onKey);
    dialog.addEventListener('close', onClosed);
    dialog.addEventListener('cancel', function (e) { e.preventDefault(); closeLightbox(); });
    // Click on the dark margin around the shell closes it.
    dialog.addEventListener('click', function (e) { if (e.target === dialog) closeLightbox(); });

    figureEl.addEventListener('pointerdown', function (e) { touchX = e.clientX; });
    figureEl.addEventListener('pointerup', function (e) {
      if (touchX == null) return;
      var dx = e.clientX - touchX;
      touchX = null;
      if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
    });
    figureEl.addEventListener('pointercancel', function () { touchX = null; });
  }

  function focusables() {
    return Array.prototype.filter.call(dialog.querySelectorAll('a[href], button'), function (n) {
      return !n.disabled && n.offsetParent !== null;
    });
  }

  function onKey(e) {
    if (e.key === 'Escape') { e.preventDefault(); closeLightbox(); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); step(-1); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); step(1); }
    else if (e.key === 'Home') { e.preventDefault(); show(0); }
    else if (e.key === 'End') { e.preventDefault(); show(current.project.images.length - 1); }
    else if (e.key === 'Tab') {
      var items = focusables();
      if (!items.length) return;
      var first = items[0];
      var last = items[items.length - 1];
      var activeEl = document.activeElement;
      if (e.shiftKey && (activeEl === first || !dialog.contains(activeEl))) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && (activeEl === last || !dialog.contains(activeEl))) { e.preventDefault(); first.focus(); }
    }
  }

  function step(delta) {
    var n = current.project.images.length;
    show((current.index + delta + n) % n);
  }

  function preload(project, index) {
    var img = project.images[index];
    var probe = new Image();
    probe.sizes = LB_SIZES;
    probe.srcset = srcset(project.slug, index + 1, img, 'webp');
  }

  function show(index) {
    var project = current.project;
    var total = project.images.length;
    current.index = index;
    figureEl.textContent = '';
    figureEl.appendChild(picture(project, index, LB_SIZES, { eager: true }));
    countEl.textContent = total > 1 ? 'Photo ' + (index + 1) + ' of ' + total : 'Photo 1 of 1';
    dialog.classList.toggle('single', total === 1);
    Array.prototype.forEach.call(dialog.querySelectorAll('.lb-prev, .lb-next'), function (b) { b.hidden = total === 1; });
    if (total > 1) {
      preload(project, (index + 1) % total);
      preload(project, (index - 1 + total) % total);
    }
  }

  function openLightbox(slug, index, opener) {
    var project = bySlug[slug];
    if (!project) return;
    if (!dialog) buildLightbox();
    current = { project: project, index: index || 0, opener: opener || null };
    titleEl.textContent = project.title + (project.location ? ' – ' + project.location : '');
    summaryEl.textContent = project.summary;
    linkEl.textContent = '';
    linkEl.appendChild(el('a', { href: 'contact.html', text: 'Like what you see? Get a free estimate' }));
    show(current.index);
    document.body.classList.add('lb-open');
    if (typeof dialog.showModal === 'function') dialog.showModal();
    else dialog.setAttribute('open', '');
    closeBtn.focus();
    if (window.history && history.replaceState) history.replaceState(null, '', '#' + slug);
  }

  function closeLightbox() {
    if (dialog && dialog.open) {
      if (typeof dialog.close === 'function') dialog.close();
      else { dialog.removeAttribute('open'); onClosed(); }
    }
  }

  function onClosed() {
    document.body.classList.remove('lb-open');
    if (window.history && history.replaceState) history.replaceState(null, '', window.location.pathname + window.location.search);
    var opener = current.opener;
    if (opener && document.body.contains(opener)) opener.focus();
    else if (current.project) {
      var card = galleryEl.querySelector('[data-slug="' + current.project.slug + '"]');
      if (card) card.focus();
    }
  }

  // ---------- Init ----------
  var wanted = new URLSearchParams(window.location.search).get('category');
  if (wanted && data.categories.indexOf(wanted) !== -1) active = wanted;

  renderFilters();
  renderCards();

  var hash = decodeURIComponent(window.location.hash.replace(/^#/, ''));
  if (hash && bySlug[hash]) {
    if (active !== 'All' && bySlug[hash].category !== active) setFilter('All');
    openLightbox(hash, 0, galleryEl.querySelector('[data-slug="' + hash + '"]'));
  }
})();
