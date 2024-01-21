let clicBurger = document.querySelector(".menu-toggle img");
console.log(clicBurger);

var burgerClicked = false;

document.querySelector('.menu-toggle img').addEventListener('click', function() {
    burgerClicked = !burgerClicked; // Inverser l'état à chaque clic
    console.log(burgerClicked);

    var burgerMenu = document.getElementById('burger-menu');

    if (burgerClicked) {
        burgerMenu.classList.add('visible');
    } else {
        burgerMenu.classList.remove('visible');
    }
});


document.addEventListener("DOMContentLoaded", function () {
    let clicBurger = document.querySelector(".menu-toggle img");
    let etatOriginal = true; // variable pour suivre l'état actuel

    clicBurger.addEventListener("click", function () {
        // Code à exécuter au clic
        if (etatOriginal) {
            changementImage("wp-content/uploads/2024/01/Burgercroix.svg");
        } else {
            changementImage("wp-content/uploads/2024/01/Burger.svg");
        }

        // Inversez l'état pour le prochain clic
        etatOriginal = !etatOriginal;
    });

    function changementImage(nouveauSrc) {
        // Changez ici l'attribut src de l'image
        clicBurger.src = nouveauSrc;
    }
});
