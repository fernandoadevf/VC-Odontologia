(function () {
  var loader = document.getElementById('loader');
  if (!loader) return;

  var minDisplay = 450;
  var maxDisplay = 2200;
  var start = Date.now();
  var hidden = false;

  function hideLoader() {
    if (hidden) return;
    hidden = true;

    var elapsed = Date.now() - start;
    var delay = Math.max(0, minDisplay - elapsed);

    setTimeout(function () {
      loader.classList.add('loader--hide');
      document.body.classList.remove('is-loading');

      setTimeout(function () {
        loader.remove();
      }, 350);
    }, delay);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', hideLoader);
  } else {
    hideLoader();
  }

  setTimeout(hideLoader, maxDisplay);
})();
