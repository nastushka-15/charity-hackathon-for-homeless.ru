import Swiper from "swiper";
import './node_modules/swiper/swiper-bundle.min.css'

const swiper = new Swiper('.projects__swiper', {
    spaceBetween: 30,

    navigation: {
        nextEl: '.projects__swiper-button-next',
        prevEl: '.projects__swiper-button-prev',
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