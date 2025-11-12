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


});

