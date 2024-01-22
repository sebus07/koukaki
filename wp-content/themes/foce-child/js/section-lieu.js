

document.addEventListener('DOMContentLoaded', function () {
    const placeElement = document.getElementById('place');
    const movingImage = document.querySelector('.change-image');
    const moving2Image = document.querySelector('.imgLieu');

    // Ajout du background-image pour #place
    placeElement.style.backgroundImage = 'url("wp-content/uploads/2024/01/Studio_koukaki-image_place.png")';

    function handleScroll(entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                if (!movingImage.classList.contains('animate-on-scroll')) {
                    movingImage.classList.add('animate-on-scroll');
                    movingImage.style.animation = 'moveImage 3s linear forwards';
                }

                if (!moving2Image.classList.contains('animate-on-scroll')) {
                    moving2Image.classList.add('animate-on-scroll');
                    moving2Image.style.animation = 'moving2Image 3s linear forwards';
                }
            }
        });
    }

    const options = {
        threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleScroll, options);
    observer.observe(placeElement);
});