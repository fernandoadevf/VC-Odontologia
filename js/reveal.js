(function () {
  var reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  function loadMap(el) {
    var iframe = el.querySelector('iframe[data-src]');
    if (!iframe || iframe.dataset.loaded) return;
    iframe.src = iframe.dataset.src;
    iframe.dataset.loaded = 'true';
  }

  function show(el) {
    el.classList.add('is-visible');
    loadMap(el);
  }

  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced) {
    reveals.forEach(show);
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        show(entry.target);
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -6% 0px',
    }
  );

  reveals.forEach(function (el) {
    observer.observe(el);
  });
})();
