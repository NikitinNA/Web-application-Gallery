let swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    pagination: {
        el: ".swiper-pagination"
    },
    mousehell: true,
    keyboard: true,
    effect: 'cube',
    cubeEffect: {
    slideShadows: false,
  },
}) 