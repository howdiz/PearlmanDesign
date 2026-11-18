/*
 * Pearlman Design - site-wide behavior.
 * Public API: none (runs on load). Inputs: DOM only. Failure modes: every feature
 * is progressive enhancement; with JS off the nav is always visible and the
 * contact form still posts normally.
 */
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');

  if (toggle && nav) {
    var setOpen = function (open) {
      nav.setAttribute('data-open', open ? 'true' : 'false');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    };
    setOpen(false);
    toggle.addEventListener('click', function () {
      setOpen(nav.getAttribute('data-open') !== 'true');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.getAttribute('data-open') === 'true') {
        setOpen(false);
        toggle.focus();
      }
    });
  }

  // Contact form: Netlify redirects back to contact.html?sent=1 after a successful submit.
  var notice = document.getElementById('sent-notice');
  if (notice && /[?&]sent=1/.test(window.location.search)) {
    notice.hidden = false;
    notice.focus();
  }
})();
