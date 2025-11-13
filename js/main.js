document.addEventListener('DOMContentLoaded', function () {

    // --- existing Swiper initializations ---
    const swiper = new Swiper('.cardSlider', {
      loop: false,
      slidesPerView: 3,
      spaceBetween: 16,
      breakpoints: {
        0: { slidesPerView: 1.2, spaceBetween: 16 },
        576: { slidesPerView: 2, spaceBetween: 20 },
        992: { slidesPerView: 3, spaceBetween: 16 },
      }
    });
  
    const swiper2 = new Swiper('.instaSlider', {
      loop: false,
      slidesPerView: 5,
      spaceBetween: 32,
      breakpoints: {
        0: { slidesPerView: 1.4, spaceBetween: 16 },
        576: { slidesPerView: 3.4, spaceBetween: 20 },
        992: { slidesPerView: 5, spaceBetween: 42 },
      }
    });
  
    const swiper3 = new Swiper('.availableSlider', {
      loop: false,
      slidesPerView: 6,
      spaceBetween: 20,
      breakpoints: {
        0: { slidesPerView: 1.7, spaceBetween: 16, initialSlide: 2, centeredSlides: true },
        576: { slidesPerView: 3.4, spaceBetween: 20 },
        992: { slidesPerView: 6, spaceBetween: 42 },
      }
    });
  
    // ✅ Swiper 4: Related Blogs (only below 767px)
    let relatedBlogsSwiper = null;
  
    function initRelatedBlogsSwiper() {
      const screenWidth = window.innerWidth;
  
      if (screenWidth < 767 && !relatedBlogsSwiper) {
        document.querySelector('.relatedBlogsWrap').classList.add('swiper');
        document.querySelectorAll('.relatedBlogsWrap > .wrap').forEach(el => el.classList.add('swiper-slide'));
        const wrapper = document.createElement('div');
        wrapper.classList.add('swiper-wrapper');
        const parent = document.querySelector('.relatedBlogsWrap');
        while (parent.firstChild) wrapper.appendChild(parent.firstChild);
        parent.appendChild(wrapper);
  
        relatedBlogsSwiper = new Swiper('.relatedBlogsWrap', {
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
      const wrapper = document.querySelector('.Wrapper.perfectMatch');
      const cards = wrapper ? wrapper.querySelector('.cards') : null;
  
      if (!wrapper || !cards) return;
  
      if (window.innerWidth <= 767) {
        // Remove container-related classes
        wrapper.classList.remove('container', 'container-w90');
  
        // Initialize Swiper for cards if not already done
        if (!perfectMatchSwiper) {
          cards.classList.add('swiper');
          const wrapperEl = document.createElement('div');
          wrapperEl.classList.add('swiper-wrapper');
  
          cards.querySelectorAll('.card').forEach(card => {
            card.classList.add('swiper-slide');
            wrapperEl.appendChild(card);
          });
  
          cards.appendChild(wrapperEl);
  
          perfectMatchSwiper = new Swiper('.Wrapper.perfectMatch .cards', {
            slidesPerView: 1.4,
            spaceBetween: 16,
            centeredSlides: true,
          });
        }
      } else {
        // Add container class back
        if (!wrapper.classList.contains('container-w90')) {
          wrapper.classList.add('container-w90');
        }
  
        // Destroy Swiper and restore structure
        if (perfectMatchSwiper) {
          perfectMatchSwiper.destroy(true, true);
          perfectMatchSwiper = null;
  
          // Cleanup classes and structure
          cards.classList.remove('swiper');
          cards.querySelectorAll('.swiper-slide').forEach(slide => {
            slide.classList.remove('swiper-slide');
          });
  
          const wrapperEl = cards.querySelector('.swiper-wrapper');
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
  
    window.addEventListener('resize', function () {
      initRelatedBlogsSwiper();
      togglePerfectMatchContainerAndSlider();
    });
  
  });
  