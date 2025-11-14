// header start

(function () {
  "use strict";

  // ---------------------------
  // Vanilla: submenu desktop + mobile toggle (scoped to header-js)
  // ---------------------------
  document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header.header-js");
    if (!header) return; // nothing to do if header not present

    const MENU_BREAKPOINT = 991; // same breakpoint logic as your original code

    // Helper to close all header submenus
    function closeAllHeaderSubmenus() {
      header.querySelectorAll(".subMenuWrap").forEach((s) => {
        s.style.display = "none";
        // Optional accessibility
        const parentLi = s.closest("li");
        if (parentLi) {
          const link = parentLi.querySelector("a");
          if (link) link.setAttribute("aria-expanded", "false");
        }
      });
    }

    // Hook up each top-level menu item inside header only
    const menuItems = header.querySelectorAll("nav > ul > li");

    menuItems.forEach(function (li) {
      const submenu = li.querySelector(".subMenuWrap");
      if (!submenu) return;

      const link = li.querySelector("a");
      let timeoutId = null;

      // Desktop: open on hover
      li.addEventListener("mouseenter", () => {
        if (window.innerWidth > MENU_BREAKPOINT) {
          clearTimeout(timeoutId);
          submenu.style.display = "block";
          if (link) link.setAttribute("aria-expanded", "true");
        }
      });

      li.addEventListener("mouseleave", () => {
        if (window.innerWidth > MENU_BREAKPOINT) {
          clearTimeout(timeoutId);
          timeoutId = setTimeout(() => {
            submenu.style.display = "none";
            if (link) link.setAttribute("aria-expanded", "false");
          }, 200);
        }
      });

      // Keep open while hovering submenu
      submenu.addEventListener("mouseenter", () => {
        if (window.innerWidth > MENU_BREAKPOINT) {
          clearTimeout(timeoutId);
          submenu.style.display = "block";
          if (link) link.setAttribute("aria-expanded", "true");
        }
      });

      submenu.addEventListener("mouseleave", () => {
        if (window.innerWidth > MENU_BREAKPOINT) {
          clearTimeout(timeoutId);
          timeoutId = setTimeout(() => {
            submenu.style.display = "none";
            if (link) link.setAttribute("aria-expanded", "false");
          }, 200);
        }
      });

      // Mobile: click/tap to toggle (only inside header)
      link.addEventListener("click", function (e) {
        if (window.innerWidth <= MENU_BREAKPOINT) {
          e.preventDefault();

          const isVisible = submenu.style.display === "block";

          // Close other header submenus only
          header.querySelectorAll(".subMenuWrap").forEach((s) => {
            if (s !== submenu) s.style.display = "none";
          });

          // Toggle current
          submenu.style.display = isVisible ? "none" : "block";
          if (link) link.setAttribute("aria-expanded", String(!isVisible));
        }
      });
    });

    // Close header submenus if click outside header nav
    document.addEventListener("click", function (e) {
      const nav = header.querySelector("nav");
      if (!nav) return;
      if (!nav.contains(e.target)) {
        closeAllHeaderSubmenus();
      }
    });

    // Optional: close header submenus on Escape key
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        closeAllHeaderSubmenus();
      }
    });

    // If window is resized from mobile -> desktop or vice-versa, ensure UI is consistent
    let lastIsDesktop = window.innerWidth > MENU_BREAKPOINT;
    window.addEventListener(
      "resize",
      function () {
        const isDesktop = window.innerWidth > MENU_BREAKPOINT;
        if (isDesktop !== lastIsDesktop) {
          // If moved to desktop, hide all mobile-open submenus (we will rely on hover)
          if (isDesktop) {
            closeAllHeaderSubmenus();
          } else {
            // on mobile, ensure submenus are closed by default
            closeAllHeaderSubmenus();
          }
          lastIsDesktop = isDesktop;
        }
      },
      { passive: true }
    );
  });

  // ---------------------------
  // jQuery: mobile nav icon toggle (scoped to header-js)
  // ---------------------------
  if (window.jQuery) {
    (function ($) {
      $(function () {
        const $header = $("header.header-js");
        if (!$header.length) return;

        $header.find("#nav-icon").on("click", function (e) {
          e.stopPropagation();
          $(this).toggleClass("open");
          // toggle only the header scoped elements
          $header.find("nav, .profileIcon, .brandButton").toggleClass("active");
        });

        // Prevent clicks inside header nav from bubbling up and closing it
        $header.find("nav").on("click", function (e) {
          e.stopPropagation();
        });

        // Clicking outside header should close nav (only header-scoped)
        $(document).on("click", function () {
          // remove active classes if present
          $header.find("#nav-icon").removeClass("open");
          $header.find("nav, .profileIcon, .brandButton").removeClass("active");
          // hide submenus
          $header.find(".subMenuWrap").hide();
        });
      });
    })(jQuery);
  }

  // ---------------------------
  // Swiper init: only initialize Swiper inside header (headerSwiper)
  // ---------------------------
  (function initHeaderSwiper() {
    // Check Swiper exists and header present
    if (typeof Swiper === "undefined") return;
    const header = document.querySelector("header.header-js");
    if (!header) return;

    // Look for swiper container(s) inside header with class 'headerSwiper'
    // Example HTML: <div class="submenuThumb swiper headerSwiper"> ... </div>
    const headerSwiperEl = header.querySelector(".headerSwiper");
    if (!headerSwiperEl) return;

    // Initialize Swiper on header-scoped selector (scoped to header)
    // Use a unique selector that limits to header (querySelectorAll returns elements, but Swiper accepts selector string)
    const selector = "header.header-js .headerSwiper";

    // eslint-disable-next-line no-unused-vars
    const headerSwiper = new Swiper(selector, {
      slidesPerView: 3,
      spaceBetween: 5,
      loop: false,
      autoplay: false,
      grabCursor: true,
      simulateTouch: true,
      pagination: false,
      navigation: false,
      breakpoints: {
        0: {
          slidesPerView: 1.2,
          spaceBetween: 5,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 5,
        },
      },
    });
  })();
})();
// header end

// swiper start

document.addEventListener('DOMContentLoaded', function () {
  // initialize spotlight slider after DOM is ready
  var spotlightSwiper = new Swiper('.spotlight-slider', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});

// swiper end
document.addEventListener("DOMContentLoaded", function () {
  // Swiper Slider
  const swiper = new Swiper(".cardSlider", {
    loop: false,
    slidesPerView: 3,
    spaceBetween: 16,
    // pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    // },
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
    breakpoints: {
      0: {
        slidesPerView: 1.2,
        spaceBetween: 16,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
    },
  });

  const swiper2 = new Swiper(".instaSlider", {
    loop: false,
    slidesPerView: 5,
    spaceBetween: 32,
    breakpoints: {
      0: {
        slidesPerView: 1.4,
        spaceBetween: 16,
      },
      576: {
        slidesPerView: 3.4,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 42,
      },
    },
  });

  const swiper3 = new Swiper(".availableSlider", {
    loop: false,
    slidesPerView: 6,
    spaceBetween: 20,
    breakpoints: {
      0: {
        slidesPerView: 1.7,
        spaceBetween: 16,
        initialSlide: 2,
        centeredSlides: true,
      },
      576: {
        slidesPerView: 3.4,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 42,
      },
    },
  });
});
