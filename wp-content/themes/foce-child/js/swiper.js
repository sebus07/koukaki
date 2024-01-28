var swiper;

  // Function to initialize or start Swiper
  function initSwiper() {
    swiper = new Swiper('.mySwiper', {
      effect: 'coverflow', // Ajoutez l'effet coverflow
      slidesPerView: 3,
      spaceBetween: 10,
      loop: false, // Enable loop
      coverflowEffect: {
        rotate: 60,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      },
      autoplay: {
        delay: 3000, // Adjust the delay as needed (in milliseconds)
      },
    });
  }

  // Check if the hidden class is present
  var hiddenElement = document.querySelector('.hidden');

  // If hidden class is present, initialize Swiper
  if (hiddenElement) {
    initSwiper();
  }

  