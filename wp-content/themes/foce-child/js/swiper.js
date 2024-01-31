var swiper;

  
  function initSwiper() {
    swiper = new Swiper('.mySwiper', {
      effect: 'coverflow', // Ajoutez l'effet coverflow
      slidesPerView: 3,
      spaceBetween: 10,
      loop: false, 
      coverflowEffect: {
        rotate: 60,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      },
      autoplay: {
        delay: 3000, 
      },
    });
  }

  var hiddenElement = document.querySelector('.hidden');

  if (hiddenElement) {
    initSwiper();
  }

  