(() => {
    "use strict";

    const CLASS_NAME = "youtube-liquid-glass";

    function applyLiquidGlass() {
        document.documentElement.classList.add(CLASS_NAME);
    }

    function observeYouTube() {
        const observer = new MutationObserver(() => {
            applyLiquidGlass();
        });

        observer.observe(document.documentElement, {
            childList: true,
            subtree: true
        });
    }

    // YouTube là SPA nên URL thay đổi mà không reload trang
    let lastURL = location.href;

    setInterval(() => {
        if (location.href !== lastURL) {
            lastURL = location.href;

            // Cho YouTube vài ms để render nội dung mới
            setTimeout(applyLiquidGlass, 100);
        }
    }, 500);

    applyLiquidGlass();

    if (document.documentElement) {
        observeYouTube();
    }

    console.log(
        "%c YouTube Liquid Glass ",
        "background:#111827;color:#fff;padding:6px 12px;border-radius:10px;font-weight:bold;"
    );
})();
