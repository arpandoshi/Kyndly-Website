/* Kyndly — shared site behavior. No tracking, no forms. */
(function () {
  /* Scroll reveal */
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach(function (el) { observer.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('visible'); });
  }

  /* Announcement strip: push the fixed nav below it */
  var strip = document.querySelector('.top-strip');
  var nav = document.querySelector('.site-nav');
  function placeNav() {
    if (strip && nav) {
      var h = strip.offsetHeight;
      nav.style.top = h + 'px';
      document.documentElement.style.setProperty('--strip-h', h + 'px');
    }
  }
  placeNav();
  window.addEventListener('resize', placeNav);

  /* Subtle parallax on background orbs (pointer devices only) */
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var orb1 = document.querySelector('.orb-1');
  var orb3 = document.querySelector('.orb-3');
  if (!reduce && orb1 && orb3) {
    window.addEventListener('mousemove', function (e) {
      var cx = e.clientX / window.innerWidth - 0.5;
      var cy = e.clientY / window.innerHeight - 0.5;
      orb1.style.transform = 'translate(' + cx * 18 + 'px, ' + cy * 14 + 'px)';
      orb3.style.transform = 'translate(' + cx * -12 + 'px, ' + cy * -10 + 'px)';
    });
  }
})();
