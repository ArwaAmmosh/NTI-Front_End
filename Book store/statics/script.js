
function act() {
    let loginform = document.querySelector(".logincontainer");
    loginform.classList.toggle("active");
}
function actn() {
    let loginform = document.querySelector(".logincontainer");
    loginform.classList.remove("active");
}
var swiper = new Swiper(".arrivals-slider", {
    spaceBetween: 11,
    loop: true,
    centeredslides: true,
    autoplay: {
        delay: 9500,
        diableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        450: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,

        },
        1024: {
            slidesPerView: 4,

        },
    },
});



var swiper = new Swiper(".featured-slider", {
    spaceBetween: 11,
    loop: true,
    centeredslides: true,
    autoplay: {
        delay: 9500,
        diableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        450: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,

        },
        1024: {
            slidesPerView: 4,

        },
    },
});

var swiper = new Swiper(".reviews-slider", {
    spaceBetween: 11,
    loop: true,
    centeredslides: true,
    grabCursor: true,
    autoplay: {
        delay: 9500,
        diableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        450: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,

        },
        1024: {
            slidesPerView: 4,

        },
    },
});
var swiper = new Swiper(".blogs-slider", {
    spaceBetween: 11,
    loop: true,
    centeredslides: true,
    grabCursor: true,
    autoplay: {
        delay: 9500,
        diableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        450: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,

        },
        1024: {
            slidesPerView: 4,

        },
    },
});

