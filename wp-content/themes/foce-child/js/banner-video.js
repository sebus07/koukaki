document.addEventListener("DOMContentLoaded", function () {
  let bannerElement = document.querySelector(".banner"); // Déplacer cette ligne en haut

  if (bannerElement) {
    let bannerVideo = document.createElement("video");

    bannerVideo.src = "https://course.oc-static.com/projects/D%C3%A9veloppeur+Web/DWP+IW_P9+Studio+d'animation/Studio+Koukaki-vide%CC%81o+header+sans+son+(1).mp4";
    bannerVideo.loop = true;
    bannerVideo.muted = true;
    bannerVideo.className = "banner-video"; // Ajoutez une classe à la balise vidéo

    bannerElement.style.position = "relative";
    bannerElement.style.backgroundSize = "cover";
    bannerElement.innerHTML = "";

    bannerElement.appendChild(bannerVideo);

    let logoImage = document.createElement("img");
    logoImage.src = "http://localhost/fleurs_d_oranger/wp-content/themes/foce/assets/images/logo.png";
    logoImage.alt = "logo Fleurs d'oranger & chats errants";

    logoImage.style.top = "60%";
    logoImage.style.left = "50%";
    logoImage.style.transform = "translate(-0%, -110%)";

    bannerElement.appendChild(logoImage);

    // Ajoutez une classe spécifique en fonction de la largeur de l'écran
    function updateVideoClass() {
      if (window.innerWidth < 768) {
        bannerVideo.classList.add("mobile-video");
        bannerVideo.pause(); // Pausez la vidéo sur les petits écrans
      } else {
        bannerVideo.classList.remove("mobile-video");
        bannerVideo.play(); // Reprenez la lecture sur les écrans plus larges
      }
    }

    // Ajoutez un gestionnaire d'événement pour la mise à jour lorsque la fenêtre est redimensionnée
    window.addEventListener("resize", updateVideoClass);

    // Initialisez la classe au chargement de la page
    updateVideoClass();

    if (bannerVideo) {
      // Attendre que la vidéo soit chargée
      bannerVideo.addEventListener("loadedmetadata", function () {
        // Définir la hauteur de la section sur la hauteur de la vidéo
        bannerElement.style.height = bannerVideo.videoHeight + "px";
      });
    }
  }
});