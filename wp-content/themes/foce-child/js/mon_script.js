
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



