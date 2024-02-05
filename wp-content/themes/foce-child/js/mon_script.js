// mon_script.js

let imgBackground = document.querySelector(".banner");
let backgroundImageValue = window.getComputedStyle(imgBackground).getPropertyValue("background-image");

let monTitreH2Histoire = document.querySelector(".story h2"); 
monTitreH2Histoire.classList.add("maNouvelleClasseStory");

let maSectionStudio = document.getElementById("studio");
if (maSectionStudio) { // Assurez-vous que l'élément a été trouvé
  maSectionStudio.classList.add("studio");
}

let monTitreH2Studio = document.querySelector(".studio h2"); 
monTitreH2Studio.classList.add("maNouvelleClasseStudio");


let monTitreH3Personnages = document.querySelector(".main-character h3"); 
monTitreH3Personnages.classList.add("maNouvelleClassePersonages");

let maSectionArticle = document.getElementById("place");
if (maSectionArticle) { // Assurez-vous que l'élément a été trouvé
  maSectionArticle.classList.add("place");
}

let monTitreH2Lieu = document.querySelector(".place h3"); 
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


 