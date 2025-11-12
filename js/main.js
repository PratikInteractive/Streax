document.addEventListener('DOMContentLoaded', function () {

    // Swiper Slider 
    const swiper = new Swiper('.cardSlider', {
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
            }
        }
    });


    const swiper2 = new Swiper('.instaSlider', {
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
            }
        }
    });

    
    const swiper3 = new Swiper('.availableSlider', {
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
            }
        }
    });


});

