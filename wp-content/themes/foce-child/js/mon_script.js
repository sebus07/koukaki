// mon_script.js

///// remplacement de la balise banner en header video///////
document.addEventListener("DOMContentLoaded", function() {
    // Vérifiez si l'élément de la bannière existe
    let bannerElement = document.querySelector(".banner");
    console.log(bannerElement);
    if (bannerElement) {
        // Créez une balise vidéo
        let bannerVideo = document.createElement("video");

        // Ajoutez des attributs à la balise vidéo
        bannerVideo.src = "https://course.oc-static.com/projects/D%C3%A9veloppeur+Web/DWP+IW_P9+Studio+d'animation/Studio+Koukaki-vide%CC%81o+header+sans+son+(1).mp4";
        bannerVideo.autoplay = true;
        bannerVideo.loop = true;
        bannerVideo.muted = true;

        // Appliquez la balise vidéo comme background de la bannière
        bannerElement.style.position = "relative"; 
        bannerElement.style.background = "url('https://course.oc-static.com/projects/D%C3%A9veloppeur+Web/DWP+IW_P9+Studio+d'animation/Studio+Koukaki-vide%CC%81o+header+sans+son+(1).mp4') no-repeat center center fixed";
        bannerElement.style.backgroundSize = "cover";
        bannerElement.innerHTML = ""; // Effacez le contenu de la bannière

        // Ajoutez la balise vidéo à la bannière
        bannerElement.appendChild(bannerVideo);

        // Ajoutez une balise img en dessous de la vidéo
        let logoImage = document.createElement("img");
        logoImage.src = "http://localhost/fleurs_d_oranger/wp-content/themes/foce/assets/images/logo.png";
        logoImage.alt = "logo Fleurs d'oranger & chats errants";

        // Positionnez l'image au centre de la bannière
        logoImage.style.position = "absolute";
        logoImage.style.top = "60%";
        logoImage.style.left = "50%";
        logoImage.style.transform = "translate(-50%, -50%)";
        
        bannerElement.appendChild(logoImage);
    }
});


/// creation du slider personnages ///

let sliderPersonnage = document.querySelector("figure img");
console.log(sliderPersonnage);
let divSlider = document.querySelector("#characters");
console.log(divSlider);
let titreSectionPersonnages = document.querySelector(".main-character h3" )
console.log(titreSectionPersonnages);


let imageIndex = 0;

document.addEventListener("DOMContentLoaded", function() {
    // Masquer les anciennes images
    let images = document.querySelectorAll('img[alt="Kawaneko"]');
    if (images.length > 0) {
        images.forEach(function(image) {
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
    let imageArticle =document.querySelector("#place");
    console.log(imageArticle);

    imageArticle.style.background = "url('wp-content/uploads/2024/01/Studio_koukaki-image_place.png";

    //ajout des nuage//
    
