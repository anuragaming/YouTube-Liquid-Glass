// Liquid Glass YouTube Extension
(function() {
  'use strict';

  // Thêm class vào body khi load
  document.body.classList.add('liquid-glass-active');

  // Observer để áp dụng style khi YouTube load nội dung động (SPA)
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.addedNodes.length) {
        // Force re-apply styles
        document.documentElement.setAttribute('data-liquid-glass', 'true');
      }
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  console.log('🧊 Liquid Glass YouTube Extension loaded!');
})();
