// mon_script.js

let imgBackground = document.querySelector(".banner");
let backgroundImageValue = window.getComputedStyle(imgBackground).getPropertyValue("background-image");
console.log(backgroundImageValue);


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

/// transition face in //////////////////////////////
$(window).scroll(function() {
  $('.toAnim').each(function() {

    var _win     = $(window),
        _ths     = $(this),
        _pos    = _ths.offset().top,
        _scroll = _win.scrollTop(),
        _height = _win.height();

    (_scroll > _pos - _height * .75) ? _ths.addClass('anim') : _ths.removeClass('anim');

  });
});
// script.js


 