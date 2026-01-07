const modelsSwiper = new Swiper(".payment-models-swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  

    pagination: {
    el: '.payment-model-pagination',
    clickable:true
  },


  breakpoints: {
    320: { slidesPerView: 1, },
    576: { slidesPerView: 1.5 ,},
    626: { slidesPerView: 1.6 },
     700: { slidesPerView: 2 },
    830: { slidesPerView: 2.2 },
    1000: { slidesPerView: 2.7 },
    1200: { slidesPerView: 3 },
  },
});



