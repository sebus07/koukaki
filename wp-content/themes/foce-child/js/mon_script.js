// mon_script.js

document.addEventListener("DOMContentLoaded", function () {
    let bannerElement = document.querySelector(".banner");
    
    if (bannerElement) {
      let bannerVideo = document.createElement("video");
  
      bannerVideo.src = "https://course.oc-static.com/projects/D%C3%A9veloppeur+Web/DWP+IW_P9+Studio+d'animation/Studio+Koukaki-vide%CC%81o+header+sans+son+(1).mp4";
      bannerVideo.autoplay = true;
      bannerVideo.loop = true;
      bannerVideo.muted = true;
      bannerVideo.className = "banner-video"; // Ajoutez une classe à la balise vidéo
  
      bannerElement.style.position = "relative";
      bannerElement.style.background = "url('https://course.oc-static.com/projects/D%C3%A9veloppeur+Web/DWP+IW_P9+Studio+d'animation/Studio+Koukaki-vide%CC%81o+header+sans+son+(1).mp4') no-repeat center center fixed";
      bannerElement.style.backgroundSize = "cover";
      bannerElement.innerHTML = "";
  
      bannerElement.appendChild(bannerVideo);
  
      let logoImage = document.createElement("img");
      logoImage.src = "http://localhost/fleurs_d_oranger/wp-content/themes/foce/assets/images/logo.png";
      logoImage.alt = "logo Fleurs d'oranger & chats errants";
  
      logoImage.style.position = "absolute";
      logoImage.style.top = "60%";
      logoImage.style.left = "50%";
      logoImage.style.transform = "translate(-50%, -50%)";
  
      bannerElement.appendChild(logoImage);

      
  
      // Ajoutez une classe spécifique en fonction de la largeur de l'écran
      window.addEventListener("resize", function () {
        if (window.innerWidth < 768) {
          bannerVideo.classList.add("mobile-video");
        } else {
          bannerVideo.classList.remove("mobile-video");
        }
      });
  
      // Initialisez la classe au chargement de la page
      if (window.innerWidth < 768) {
        bannerVideo.classList.add("mobile-video");
      }
    }
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    let bannerElement = document.querySelector(".banner");
    let bannerVideo = document.querySelector(".banner-video");
  
    if (bannerElement && bannerVideo) {
      // Attendre que la vidéo soit chargée
      bannerVideo.addEventListener("loadedmetadata", function () {
        // Définir la hauteur de la section sur la hauteur de la vidéo
        bannerElement.style.height = bannerVideo.videoHeight + "px";
      });
    }
  });

/// creation du slider personnages ///

let sliderPersonnage = document.querySelector("figure img");
console.log(sliderPersonnage);
let divSlider = document.querySelector("#characters");
console.log(divSlider);
let titreSectionPersonnages = document.querySelector(".main-character h3")
console.log(titreSectionPersonnages);


let imageIndex = 0;

document.addEventListener("DOMContentLoaded", function () {
    // Masquer les anciennes images
    let images = document.querySelectorAll('img[alt="Kawaneko"]');
    if (images.length > 0) {
        images.forEach(function (image) {
            image.style.display = "none";

            // Trouver le <figcaption> correspondant et le masquer
            let figcaption = image.nextElementSibling;
            if (figcaption && figcaption.tagName === 'FIGCAPTION') {
                figcaption.style.display = "none";
            }
        });
    }

    // Sélectionner le parent des images existantes
    let parentContainer = document.querySelector('.other-characters');

    // Vérifiez si l'élément existe avant de tenter de le masquer
    if (parentContainer) {
        // Pour masquer l'élément avec la classe "other-characters"
        parentContainer.style.display = 'none';
        // Ajouter la flex-direction en colonne
        parentContainer.style.flexDirection = 'column';
    }

    // Créer une nouvelle div pour le slider
    let sliderContainer = document.createElement('div');
    sliderContainer.classList.add('slider-container');

    // Ajouter une disposition en ligne (horizontal) avec Flexbox
    sliderContainer.style.display = 'flex';
    divSlider.style.flexDirection = 'column';

    // Définir la largeur et la hauteur de l'image
    sliderPersonnage.setAttribute("width", "400");
    sliderPersonnage.setAttribute("height", "400");
    sliderContainer.setAttribute("width", "1266");
    sliderContainer.setAttribute("height", "442");
    // Ajuster la justification du texte à gauche
    titreSectionPersonnages.style.textAlign = "left";


    // Ajuster l'image de fond à gauche
    titreSectionPersonnages.style.backgroundPositionX = "3%";



    // Remplacer chaque figure avec les nouvelles images
    const newImages = [
        "wp-content/uploads/2022/06/Kawaneko.png",
        "wp-content/uploads/2022/06/Orenjiiro-1.png",
        "wp-content/uploads/2022/06/Pinku-1.png",
        "wp-content/uploads/2022/06/Tenshi-1.png",
        "wp-content/uploads/2022/06/jaakuna-1.png"
    ];

    for (let i = 0; i < newImages.length; i++) {
        let figure = document.createElement('figure');
        let img = document.createElement('img');
        let figcaption = document.createElement('figcaption');

        img.src = newImages[i];
        figcaption.textContent = "Caption " + (i + 1); // Vous pouvez personnaliser le texte du caption ici

        figure.appendChild(img);
        figure.appendChild(figcaption);

        sliderContainer.appendChild(figure);
    }

    // Insérer la nouvelle div avec la classe slider-container après l'élément .other-characters
    parentContainer.insertAdjacentHTML('afterend', sliderContainer.outerHTML);
});



//////changement background image lieu/////
let imageArticle = document.querySelector("#place");
console.log(imageArticle);

imageArticle.style.background = "url('wp-content/uploads/2024/01/Studio_koukaki-image_place.png')";

document.addEventListener('DOMContentLoaded', function () {
    const placeElement = document.getElementById('place');
    const movingImage = document.createElement('div');
    movingImage.classList.add('change-image');

    // Ajout du background-image 
    movingImage.style.backgroundImage = 'url("wp-content/uploads/2024/01/big_cloud.png")';
    movingImage.style.backgroundSize = 'contain';
    movingImage.style.backgroundRepeat = 'no-repeat';
    placeElement.appendChild(movingImage);

    function handleScroll() {
        const rect = placeElement.getBoundingClientRect();
        if (rect.top <= window.innerHeight) {
            // La div est visible dans la fenêtre
            movingImage.classList.add('animate-on-scroll');
            window.removeEventListener('scroll', handleScroll);
        }
    }

    window.addEventListener('scroll', handleScroll);
});

document.addEventListener('DOMContentLoaded', function () {
    const placeElement2 = document.getElementById('place');
    const moving2Image = document.createElement('div');
    moving2Image.classList.add('imgLieu');

    // Ajout du background-image
    moving2Image.style.backgroundImage = 'url("wp-content/uploads/2024/01/big_cloud.png")';
    moving2Image.style.backgroundSize = 'contain';
    moving2Image.style.backgroundRepeat = 'no-repeat';
    placeElement2.appendChild(moving2Image);
});


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



document.addEventListener("DOMContentLoaded", function () {
    var imgLieu = document.querySelector("#place .imgLieu");
  
    var options = {
      threshold: 0.5, // Changez cette valeur en fonction de vos besoins
    };
  
    var observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          imgLieu.style.animation = "moving2Image 3s linear forwards";
          observer.unobserve(entry.target);
        }
      });
    }, options);
  
    observer.observe(imgLieu);
  });
  



