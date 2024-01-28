$(document).ready(function() {
    $(window).on('scroll', function() {
      // Pour chaque balise avec la classe "premier"
      $('.premier').each(function() {
        let offset = $(this).offset().top;
        let scroll = $(window).scrollTop();
        let windowHeight = $(window).height();
  
        // Si la balise est visible à l'écran
        if (scroll > offset - windowHeight + 100) {
          $(this).addClass('animate-premier');
        } else {
          $(this).removeClass('animate-premier');
        }
      });
  
      // Pour chaque balise avec la classe "deuxieme"
      $('.deuxieme').each(function() {
        let offset = $(this).offset().top;
        let scroll = $(window).scrollTop();
        let windowHeight = $(window).height();
  
        // Si la balise est visible à l'écran
        if (scroll > offset - windowHeight + 50) {
          $(this).addClass('animate-deuxieme');
        } else {
          $(this).removeClass('animate-deuxieme');
        }
      });
    });
  });