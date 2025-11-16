// header start

document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll("nav > ul > li");

  menuItems.forEach(function (li) {
    const submenu = li.querySelector(".subMenuWrap");
    if (!submenu) return;

    const link = li.querySelector("a");
    let timeoutId;
    if (!link) return;

    li.addEventListener("mouseenter", () => {
      if (window.innerWidth > 991) {
        clearTimeout(timeoutId);
        submenu.style.display = "block";
      }
    });

    li.addEventListener("mouseleave", () => {
      if (window.innerWidth > 991) {
        timeoutId = setTimeout(() => {
          submenu.style.display = "none";
        }, 200);
      }
    });

    submenu.addEventListener("mouseenter", () => {
      if (window.innerWidth > 991) {
        clearTimeout(timeoutId);
        submenu.style.display = "block";
      }
    });

    submenu.addEventListener("mouseleave", () => {
      if (window.innerWidth > 991) {
        timeoutId = setTimeout(() => {
          submenu.style.display = "none";
        }, 200);
      }
    });

    link.addEventListener("click", function (e) {
      if (window.innerWidth <= 991) {
        e.preventDefault();
        const isVisible = submenu.style.display === "block";
        document
          .querySelectorAll(".subMenuWrap")
          .forEach((s) => (s.style.display = "none"));
        submenu.style.display = isVisible ? "none" : "block";
      }
    });
  });

  document.addEventListener("click", (e) => {
    const nav = document.querySelector("nav");
    if (!nav.contains(e.target)) {
      document.querySelectorAll(".subMenuWrap").forEach((s) => {
        s.style.display = "none";
      });
    }
  });
});

// jQuery pieces used in the original header (keep for mobile menu toggle)
if (window.jQuery) {
  $(document).ready(function () {
    $("#nav-icon").click(function () {
      $(this).toggleClass("open");
    });

    $("#nav-icon").on("click", function (e) {
      e.stopPropagation();
      $("nav, .profileIcon, .brandButton").toggleClass("active");
    });

    $("nav").on("click", function (e) {
      e.stopPropagation();
    });
  });
}

// Small Swiper instance used for submenu thumbnails
const headerswiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 5,
  loop: false,
  autoplay: false,
  grabCursor: true,
  simulateTouch: true,
  pagination: false,
  navigation: false,
  breakpoints: {
    0: { slidesPerView: 1.2, spaceBetween: 5 },
    768: { slidesPerView: 3, spaceBetween: 5 },
  },
});
// header end

// spotlight banner start

document.addEventListener("DOMContentLoaded", function () {
  // Initialize spotlight slider after DOM is ready
  var spotlightSwiper = new Swiper(".spotlight-slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

// spotlight banner end
// swiper start

document.addEventListener("DOMContentLoaded", function () {
  // initialize spotlight slider after DOM is ready
  var spotlightSwiper = new Swiper(".spotlight-slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
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

// Existing Swiper initializations were removed to avoid duplicate/conflicting
// initializations. The sliders are initialized inside DOMContentLoaded above
// (one-time), so we keep a single initialization path for each selector.

// ✅ Swiper 4: Related Blogs (only below 767px)
let relatedBlogsSwiper = null;

function initRelatedBlogsSwiper() {
  const screenWidth = window.innerWidth;
  const parent = document.querySelector(".relatedBlogsWrap");
  if (!parent) return;

  if (screenWidth < 767 && !relatedBlogsSwiper) {
    parent.classList.add("swiper");
    parent
      .querySelectorAll(".wrap")
      .forEach((el) => el.classList.add("swiper-slide"));
    const wrapper = document.createElement("div");
    wrapper.classList.add("swiper-wrapper");
    while (parent.firstChild) wrapper.appendChild(parent.firstChild);
    parent.appendChild(wrapper);

    relatedBlogsSwiper = new Swiper(".relatedBlogsWrap", {
      slidesPerView: 1.4,
      spaceBetween: 16,
    });
  } else if (screenWidth >= 767 && relatedBlogsSwiper) {
    relatedBlogsSwiper.destroy(true, true);
    relatedBlogsSwiper = null;
  }
}

// ✅ Swiper 5: Perfect Match Cards (only below 767px)
let perfectMatchSwiper = null;

function togglePerfectMatchContainerAndSlider() {
  const wrapper = document.querySelector(".Wrapper.perfectMatch");
  const cards = wrapper ? wrapper.querySelector(".cards") : null;

  if (!wrapper || !cards) return;

  if (window.innerWidth <= 767) {
    // Remove container-related classes
    wrapper.classList.remove("container", "container-w90");

    // Initialize Swiper for cards if not already done
    if (!perfectMatchSwiper) {
      cards.classList.add("swiper");
      const wrapperEl = document.createElement("div");
      wrapperEl.classList.add("swiper-wrapper");

      cards.querySelectorAll(".card").forEach((card) => {
        card.classList.add("swiper-slide");
        wrapperEl.appendChild(card);
      });

      cards.appendChild(wrapperEl);

      perfectMatchSwiper = new Swiper(".Wrapper.perfectMatch .cards", {
        slidesPerView: 1.4,
        spaceBetween: 16,
        centeredSlides: true,
      });
    }
  } else {
    // Add container class back
    if (!wrapper.classList.contains("container-w90")) {
      wrapper.classList.add("container-w90");
    }

    // Destroy Swiper and restore structure
    if (perfectMatchSwiper) {
      perfectMatchSwiper.destroy(true, true);
      perfectMatchSwiper = null;

      // Cleanup classes and structure
      cards.classList.remove("swiper");
      cards.querySelectorAll(".swiper-slide").forEach((slide) => {
        slide.classList.remove("swiper-slide");
      });

      const wrapperEl = cards.querySelector(".swiper-wrapper");
      if (wrapperEl) {
        while (wrapperEl.firstChild) cards.appendChild(wrapperEl.firstChild);
        wrapperEl.remove();
      }
    }
  }
}

// Initialize on load and resize
initRelatedBlogsSwiper();
togglePerfectMatchContainerAndSlider();

window.addEventListener("resize", function () {
  initRelatedBlogsSwiper();
  togglePerfectMatchContainerAndSlider();
});

// <--------anitJs-------->
// Store initial values
const initialValues = {
  price: 500,
  categories: [],
  sizes: [],
};
// Get all price range elements
const priceRangeDesktop = document.getElementById("priceRangeDesktop");
const priceValueDesktop = document.getElementById("priceValueDesktop");
const priceRangeMobile = document.getElementById("priceRangeMobile");
const priceValueMobile = document.getElementById("priceValueMobile");

// Update price values
function updatePriceValue(slider, output) {
  slider.addEventListener("input", function () {
    output.textContent = `₹${this.value}`;
    // Update slider background
    const value = this.value;
    const max = this.max;
    const percentage = (value / max) * 100;
    this.style.background = `linear-gradient(to right, #0e7143 ${percentage}%, #c7dfd1 ${percentage}%)`;
  });
}

// Initialize price sliders
updatePriceValue(priceRangeDesktop, priceValueDesktop);
updatePriceValue(priceRangeMobile, priceValueMobile);

// Clear All functionality
function clearAllFilters() {
  // Clear category filters
  document
    .querySelectorAll(".category-filter, .category-filter-mobile")
    .forEach((checkbox) => {
      checkbox.checked = false;
    });

  // Clear size filters
  document
    .querySelectorAll(".size-filter, .size-filter-mobile")
    .forEach((checkbox) => {
      checkbox.checked = false;
    });

  // Reset price filters to initial value
  priceRangeDesktop.value = initialValues.price;
  priceRangeMobile.value = initialValues.price;

  priceValueDesktop.textContent = `₹${initialValues.price}`;
  priceValueMobile.textContent = `₹${initialValues.price}`;

  // Update slider backgrounds
  const percentage = (initialValues.price / priceRangeDesktop.max) * 100;
  priceRangeDesktop.style.background = `linear-gradient(to right, #0e7143 ${percentage}%, #c7dfd1 ${percentage}%)`;
  priceRangeMobile.style.background = `linear-gradient(to right, #0e7143 ${percentage}%, #c7dfd1 ${percentage}%)`;

  console.log("All filters cleared!");
}

// Add event listeners to Clear All buttons
document
  .getElementById("clearAllDesktop")
  .addEventListener("click", clearAllFilters);
document
  .getElementById("clearAllMobile")
  .addEventListener("click", clearAllFilters);

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  question.addEventListener("click", () => {
    item.classList.toggle("active");
    faqItems.forEach((i) => {
      if (i !== item) i.classList.remove("active");
    });
  });
});

const filterBtn = document.getElementById("filterBtn");
const filterPopup = document.getElementById("filterPopup");
const closeFilter = document.getElementById("closeFilter");
const priceRange = document.getElementById("priceRange");
const priceValue = document.getElementById("priceValue");

filterBtn.addEventListener("click", () => {
  filterPopup.style.display = "block";
});

closeFilter.addEventListener("click", () => {
  filterPopup.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === filterPopup) {
    filterPopup.style.display = "none";
  }
});

priceRange.addEventListener("input", () => {
  priceValue.textContent = priceRange.value;
});

document.addEventListener("DOMContentLoaded", function () {
  // Get all elements
  const mainImage = document.getElementById("mainImage");
  const thumbnails = document.querySelectorAll(".thumbnails img");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const indicators = document.querySelectorAll(".indicator");
  const carouselIndicators = document.getElementById("carouselIndicators");

  // Set initial active index
  let currentIndex = 0;

  // Function to update the main image and active thumbnail
  function updateImage(index) {
    // Update main image
    mainImage.src = thumbnails[index].src;
    mainImage.alt = thumbnails[index].alt;

    // Update active class on thumbnails
    //   thumbnails.forEach((thumb, i) => {
    //     if (i === index) {
    //       thumb.classList.add("active");
    //     } else {
    //       thumb.classList.remove("active");
    //     }
    //   });

    // Update active class on thumbnails (for desktop)
    thumbnails.forEach((thumb, i) => {
      if (i === index) {
        thumb.classList.add("active");
      } else {
        thumb.classList.remove("active");
      }
    });

    // Update active class on indicators (for mobile)
    indicators.forEach((indicator, i) => {
      if (i === index) {
        indicator.classList.add("active");
      } else {
        indicator.classList.remove("active");
      }
    });

    // Update current index
    currentIndex = index;
  }

  // Event listeners for thumbnails (desktop)
  thumbnails.forEach((thumb, index) => {
    thumb.addEventListener("click", () => {
      updateImage(index);
    });
  });

  // Event listeners for indicators (mobile)
  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      updateImage(index);
    });
  });

  // Event listener for previous button
  prevBtn.addEventListener("click", () => {
    let newIndex = currentIndex - 1;
    if (newIndex < 0) {
      newIndex = thumbnails.length - 1;
    }
    updateImage(newIndex);
  });

  // Event listener for next button
  nextBtn.addEventListener("click", () => {
    let newIndex = currentIndex + 1;
    if (newIndex >= thumbnails.length) {
      newIndex = 0;
    }
    updateImage(newIndex);
  });

  // Touch swipe functionality for mobile
  let touchStartX = 0;
  let touchEndX = 0;

  mainImage.parentElement.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  mainImage.parentElement.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });

  function handleSwipe() {
    const swipeThreshold = 50;

    if (touchEndX < touchStartX - swipeThreshold) {
      // Swipe left - next image
      let newIndex = currentIndex + 1;
      if (newIndex >= thumbnails.length) {
        newIndex = 0;
      }
      updateImage(newIndex);
    }

    if (touchEndX > touchStartX + swipeThreshold) {
      // Swipe right - previous image
      let newIndex = currentIndex - 1;
      if (newIndex < 0) {
        newIndex = thumbnails.length - 1;
      }
      updateImage(newIndex);
    }
  }

  // Check screen width and adjust layout
  function checkScreenWidth() {
    if (window.innerWidth <= 768) {
      // Mobile view
      carouselIndicators.style.display = "flex";
    } else {
      // Desktop view
      carouselIndicators.style.display = "none";
    }
  }

  // Initial check
  checkScreenWidth();

  // Add resize listener
  window.addEventListener("resize", checkScreenWidth);

  // Tab functionality
  const tabs = document.querySelectorAll(".tab");
  const tabPanes = document.querySelectorAll(".tab-pane");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Remove active class from all tabs and panes
      tabs.forEach((t) => t.classList.remove("active"));
      tabPanes.forEach((pane) => pane.classList.remove("active"));

      // Add active class to clicked tab
      tab.classList.add("active");

      // Show corresponding tab pane
      const tabId = tab.getAttribute("data-tab");
      const tabPane = document.getElementById(tabId);
      if (tabPane) {
        tabPane.classList.add("active");
      }
    });
  });
});

// import "@tensorflow/tfjs";
// import * as bodySegmentation from "@tensorflow-models/body-segmentation";
// import "@tensorflow/tfjs-backend-webgl";

// document.addEventListener("DOMContentLoaded", async () => {
//   const tryOnBtn = document.querySelector(".tryon-btn");
//   const tryOnModal = document.getElementById("tryOnModal");
//   const closeTryOn = document.getElementById("closeTryOn");
//   const cameraModeBtn = document.getElementById("cameraModeBtn");
//   const uploadModeBtn = document.getElementById("uploadModeBtn");
//   const tryonVideo = document.getElementById("tryonVideo");
//   const tryonCanvas = document.getElementById("tryonCanvas");
//   const uploadImageInput = document.getElementById("uploadImageInput");

//   let segmenter;
//   let currentMode = null;

//   // Load segmentation model
//   async function loadModel() {
//     segmenter = await bodySegmentation.createSegmenter(
//       bodySegmentation.SupportedModels.MediaPipeSelfieSegmentation,
//       { runtime: "tfjs" }
//     );
//     console.log("Segmentation model loaded ✅");
//   }
//   await loadModel();

//   // Open Try-On modal
//   tryOnBtn.addEventListener("click", () => {
//     tryOnModal.style.display = "flex";
//   });

//   // Close Try-On modal
//   closeTryOn.addEventListener("click", () => {
//     tryOnModal.style.display = "none";
//     stopCamera();
//   });

//   // Camera mode
//   cameraModeBtn.addEventListener("click", async () => {
//     currentMode = "camera";
//     uploadImageInput.style.display = "none";
//     await startCamera();
//   });

//   // Upload mode
//   uploadModeBtn.addEventListener("click", () => {
//     currentMode = "upload";
//     uploadImageInput.click();
//   });

//   // Handle image upload
//   uploadImageInput.addEventListener("change", (event) => {
//     const file = event.target.files[0];
//     if (!file) return;
//     const img = new Image();
//     img.onload = async () => {
//       tryonCanvas.width = img.width;
//       tryonCanvas.height = img.height;
//       const ctx = tryonCanvas.getContext("2d");
//       ctx.drawImage(img, 0, 0);
//       await applyHairColor(tryonCanvas);
//     };
//     img.src = URL.createObjectURL(file);
//   });

//   // Start camera
//   async function startCamera() {
//     const stream = await navigator.mediaDevices.getUserMedia({
//       video: true,
//     });
//     tryonVideo.srcObject = stream;

//     tryonVideo.onloadeddata = () => {
//       renderCameraFrame();
//     };
//   }

//   // Stop camera
//   function stopCamera() {
//     if (tryonVideo.srcObject) {
//       tryonVideo.srcObject.getTracks().forEach((track) => track.stop());
//     }
//   }

//   // Apply hair color overlay
//   async function applyHairColor(canvas) {
//     const ctx = canvas.getContext("2d");
//     const segmentation = await segmenter.segmentPeople(canvas);
//     const mask = bodySegmentation.toMask(segmentation);

//     const color = "rgba(75, 40, 15, 0.5)"; // dark brown overlay
//     bodySegmentation.drawMask(canvas, canvas, mask, color, 0.7, 0, false);
//   }

//   // Process camera frames
//   async function renderCameraFrame() {
//     if (!segmenter) return;
//     const ctx = tryonCanvas.getContext("2d");
//     tryonCanvas.width = tryonVideo.videoWidth;
//     tryonCanvas.height = tryonVideo.videoHeight;

//     async function render() {
//       ctx.drawImage(tryonVideo, 0, 0);
//       await applyHairColor(tryonCanvas);
//       requestAnimationFrame(render);
//     }
//     render();
//   }
// });
