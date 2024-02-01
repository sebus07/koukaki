document.addEventListener("DOMContentLoaded", function () {
    let clicBurger = document.querySelector(".menu-toggle img");
    var burgerMenu = document.getElementById('burger-menu');
    var burgerClicked = false;

    clicBurger.addEventListener("click", function () {
        burgerClicked = !burgerClicked;

        if (burgerClicked) {
            burgerMenu.classList.add('visible');
            changementImage("wp-content/uploads/2024/01/Burgercroix.svg");
        } else {
            burgerMenu.classList.remove('visible');
            changementImage("wp-content/uploads/2024/01/Burger.svg");
        }
    });

    var menuLinks = document.querySelectorAll('#burger-menu a');

    menuLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            burgerMenu.classList.remove('visible');
            burgerClicked = false;

            changementImage("wp-content/uploads/2024/01/Burger.svg");
        });
    });

    function changementImage(nouveauSrc) {
        clicBurger.src = nouveauSrc;
    }
});
