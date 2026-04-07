document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const cover = document.querySelector(".cover");
  const pagePath = window.location.pathname.replace(/\/+$/, "") || "/";

  if (!header || !toggle) {
    return;
  }

  const syncHeaderHeight = function () {
    const headerHeight = header.offsetHeight || 74;
    document.documentElement.style.setProperty("--header-height", headerHeight + "px");
  };

  syncHeaderHeight();

  toggle.addEventListener("click", function () {
    const isOpen = header.getAttribute("data-open") === "true";
    header.setAttribute("data-open", String(!isOpen));
    toggle.setAttribute("aria-expanded", String(!isOpen));
    window.requestAnimationFrame(syncHeaderHeight);
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 760) {
      header.setAttribute("data-open", "false");
      toggle.setAttribute("aria-expanded", "false");
    }

    syncHeaderHeight();
  });

  document.querySelectorAll("a[href*='#']").forEach(function (link) {
    link.addEventListener("click", function (event) {
      const href = link.getAttribute("href");
      if (!href || !href.includes("#")) {
        return;
      }

      const url = new URL(href, window.location.href);
      const linkPath = url.pathname.replace(/\/+$/, "") || "/";
      if (linkPath !== pagePath || !url.hash) {
        return;
      }

      const target = document.querySelector(url.hash);
      if (!target) {
        return;
      }

      event.preventDefault();
      const offset = header.offsetHeight + 12;
      const targetY = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: targetY, behavior: "smooth" });

      header.setAttribute("data-open", "false");
      toggle.setAttribute("aria-expanded", "false");
      window.requestAnimationFrame(syncHeaderHeight);
    });
  });

  if (cover) {
    let ticking = false;

    const updateCoverPosition = function () {
      if (window.innerWidth > 760) {
        cover.style.backgroundPosition = "center";
        return;
      }

      const coverHeight = cover.offsetHeight || 1;
      const maxTravel = coverHeight * 1.15;
      const progress = Math.max(0, Math.min(1, window.scrollY / maxTravel));
      const xPercent = 40 + progress * 20;
      cover.style.backgroundPosition = xPercent + "% center";
    };

    updateCoverPosition();

    window.addEventListener("scroll", function () {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(function () {
        updateCoverPosition();
        ticking = false;
      });
    });

    window.addEventListener("resize", updateCoverPosition);
  }
});
