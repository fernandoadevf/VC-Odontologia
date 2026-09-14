(function () {
  var config = window.VC_SITE || {};

  if (config.active) {
    return;
  }

  var gate = document.getElementById('site-gate');
  if (!gate) {
    return;
  }

  function showGate() {
    gate.hidden = false;
    document.body.classList.add('is-gated');

    var meta = document.querySelector('meta[name="robots"][data-site-gate]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'robots';
      meta.content = 'noindex, nofollow';
      meta.setAttribute('data-site-gate', '');
      document.head.appendChild(meta);
    }
  }

  if (document.body.classList.contains('is-loading')) {
    var observer = new MutationObserver(function () {
      if (!document.body.classList.contains('is-loading')) {
        observer.disconnect();
        showGate();
      }
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    setTimeout(showGate, 2400);
  } else {
    showGate();
  }
})();
