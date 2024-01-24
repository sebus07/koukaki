<?php
get_header();
?>

<main id="primary" class="site-main">
    <section class="banner">
        <img src="<?php echo get_template_directory_uri() . '/assets/images/logo.png'; ?>" alt="logo Fleurs d'oranger & chats errants">
    </section>
    <section id="story" class="story">
        <h2><span id="gliding-text">L'histoire</span></h2>
        <article id="" class="story__article">
            <p><?php echo get_theme_mod('story'); ?></p>
        </article>

        <?php
        $args = array(
            'post_type'      => 'characters',
            'posts_per_page' => -1,
            'meta_key'       => '_main_char_field',
            'orderby'        => 'meta_value_num',
        );
        $characters_query = new WP_Query($args);
        ?>

<article id="characters">
  <div class="main-character title-container">
    <h3 class="pers"><span>les </span><span>personnages</span></h3>
    <div class="swiper mySwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="wp-content/uploads/2022/06/Kawaneko.png" alt="Slide 1"></div>
        <div class="swiper-slide"><img src="wp-content/uploads/2022/06/Orenjiiro-1.png" alt="Slide 2"></div>
        <div class="swiper-slide"><img src="wp-content/uploads/2022/06/Pinku-1.png" alt="Slide 3"></div>
        <div class="swiper-slide"><img src="wp-content/uploads/2022/06/Tenshi-1.png" alt="Slide 4"></div>
        <div class="swiper-slide"><img src="wp-content/uploads/2022/06/jaakuna-1.png" alt="Slide 5"></div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</article>
        <article id="place">
            <div>
                <h3><span>Le</span><span> Lieu</span></h3>
                
                <p><?php echo get_theme_mod('place'); ?></p>
            </div>
            <div class="change-image "><img src="wp-content/uploads/2024/01/big_cloud.png" alt="Grand nuage"></div>
            <div class="imgLieu "><img src="wp-content/uploads/2024/01/little_cloud.png" alt="Petit nuage"></div>
        </article>
    </section>

    <section id="studio">
        <h2><span>Studio</span><span> Koukaki</span></h2>
        <div>
            <p>Acteur majeur de l’animation, Koukaki est un studio intégré fondé en 2012 qui créé, produit et distribue des programmes originaux dans plus de 190 pays pour les enfants et les adultes. Nous avons deux sections en activité : le long métrage et le court métrage. Nous développons des films fantastiques, principalement autour de la culture de notre pays natal, le Japon.</p>
            <p>Avec une créativité et une capacité d’innovation mondialement reconnues, une expertise éditoriale et commerciale à la pointe de son industrie, le Studio Koukaki se positionne comme un acteur incontournable dans un marché en forte croissance. Koukaki construit chaque année de véritables succès et capitalise sur de puissantes marques historiques. Cette année, il vous présente “Fleurs d’oranger et chats errants”.</p>
        </div>
    </section>
</main>

<!-- le fichier JavaScript de Swiper -->
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

<!-- Votre script swiper -->
<script>
    document.addEventListener("DOMContentLoaded", function () {
        var mySwiper = new Swiper(".mySwiper", {
            slidesPerView: 3,
            spaceBetween: 40,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });

        // Ajouter un gestionnaire d'événements pour vérifier si Swiper est correctement initialisé
        mySwiper.on('init', function () {
            console.log('Swiper initialized');
        });

    });
</script>

<?php
get_footer();
?>
