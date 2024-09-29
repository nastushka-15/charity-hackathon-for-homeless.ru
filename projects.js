const swiper = new Swiper('.mySwiper', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 24,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});


const swiperTestim = new Swiper('.testimonialsSwiper', {
    direction: "vertical",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return `<img class=" ${className} " src = "./assets/images/testimonial${index + 1}.webp">`;
        },
    },
    breakpoints: {
        768: {
            direction: "horizontal"
        },
        1024: {
            direction: "vertical"
        }
    }
});