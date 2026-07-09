// CXW Command Center — shared interactions (used on every page)

// Mobile nav
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var mobileNav = document.getElementById('mobileNav');
  if (!toggle || !mobileNav) return;

  toggle.addEventListener('click', function () {
    var open = mobileNav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  mobileNav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      mobileNav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
})();

// Scroll reveal
(function () {
  var items = document.querySelectorAll('.reveal');
  if (!items.length) return;
  if (!('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach(function (el) { observer.observe(el); });
})();

// GHL forms — honest behavior.
// Any form with class .ghl-form is handled here. It NEVER fakes a submission:
// if data-ghl-endpoint is empty, it blocks and tells the visitor it's not live.
// Wiring: data-ghl-endpoint (POST URL), data-msg (id of the status <p>),
// data-success (message shown on a real 2xx response).
(function () {
  var forms = document.querySelectorAll('.ghl-form');
  if (!forms.length) return;

  forms.forEach(function (form) {
    var msg = document.getElementById(form.getAttribute('data-msg'));

    function show(text, ok) {
      if (!msg) return;
      msg.textContent = text;
      msg.classList.remove('is-success', 'is-error');
      msg.classList.add(ok ? 'is-success' : 'is-error');
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Native validation for required fields.
      if (!form.checkValidity()) {
        form.reportValidity();
        show('Please complete the required fields.', false);
        return;
      }

      var endpoint = form.getAttribute('data-ghl-endpoint');
      if (!endpoint) {
        // Endpoint not configured yet — fail honestly, never fake success.
        show('This form is not live yet. Check back soon.', false);
        console.warn('GHL form "' + (form.id || 'unnamed') + '": data-ghl-endpoint is not set.');
        return;
      }

      var data = new FormData(form);

      // Roll up any interest checkboxes into one field.
      var interests = [];
      form.querySelectorAll('input[name="interest"]:checked').forEach(function (cb) {
        interests.push(cb.value);
      });
      if (interests.length) data.set('interests', interests.join(','));

      var btn = form.querySelector('button[type="submit"]');
      if (btn) btn.disabled = true;

      fetch(endpoint, { method: 'POST', body: data })
        .then(function (res) {
          if (res.ok) {
            show(form.getAttribute('data-success') || 'Thanks — you are all set.', true);
            form.reset();
          } else {
            show('Something went wrong. Try again in a minute.', false);
          }
        })
        .catch(function () {
          show('Network error. Try again in a minute.', false);
        })
        .finally(function () {
          if (btn) btn.disabled = false;
        });
    });
  });
})();
