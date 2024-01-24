// mon_script.js


// Sélectionnez la balise h2 existante (par exemple, en utilisant getElementById, getElementsByClassName, querySelector, etc.)
let monTitreH2Histoire = document.querySelector(".story h2"); // Remplacez "monTitre" par l'ID réel de votre balise h3

// Ajoutez une classe à la balise h3
monTitreH2Histoire.classList.add("maNouvelleClasseStory");
  
// Sélectionnez la section existante par son ID
let maSectionStudio = document.getElementById("studio");

// Ajoutez la classe à la section
if (maSectionStudio) { // Assurez-vous que l'élément a été trouvé
  maSectionStudio.classList.add("studio");
}

// Sélectionnez la balise h2 existante (par exemple, en utilisant getElementById, getElementsByClassName, querySelector, etc.)
let monTitreH2Studio = document.querySelector(".studio h2"); // Remplacez "monTitre" par l'ID réel de votre balise h3

// Ajoutez une classe à la balise h3
monTitreH2Studio.classList.add("maNouvelleClasseStudio");


// Sélectionnez la balise h3 existante (par exemple, en utilisant getElementById, getElementsByClassName, querySelector, etc.)
let monTitreH3Personnages = document.querySelector(".main-character h3"); // Remplacez "monTitre" par l'ID réel de votre balise h3

// Ajoutez une classe à la balise h3
monTitreH3Personnages.classList.add("maNouvelleClassePersonages");

// Sélectionnez la section existante par son ID
let maSectionArticle = document.getElementById("place");

// Ajoutez la classe à la section
if (maSectionArticle) { // Assurez-vous que l'élément a été trouvé
  maSectionArticle.classList.add("place");
}

// Sélectionnez la balise h3 existante (par exemple, en utilisant getElementById, getElementsByClassName, querySelector, etc.)
let monTitreH2Lieu = document.querySelector(".place h3"); // Remplacez "monTitre" par l'ID réel de votre balise h3

// Ajoutez une classe à la balise h3
monTitreH2Lieu.classList.add("lieu");


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
// script.js


 