<?php
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
}

function enqueue_custom_styles() {
    wp_enqueue_style('nom-du-style', get_stylesheet_directory_uri() . '/css/style.css');
}
add_action('wp_enqueue_scripts', 'enqueue_custom_styles');

// Get customizer options form parent theme
if ( get_stylesheet() !== get_template() ) {
    add_filter( 'pre_update_option_theme_mods_' . get_stylesheet(), function ( $value, $old_value ) {
        update_option( 'theme_mods_' . get_template(), $value );
        return $old_value; // prevent update to child theme mods
    }, 10, 2 );
    add_filter( 'pre_option_theme_mods_' . get_stylesheet(), function ( $default ) {
        return get_option( 'theme_mods_' . get_template(), $default );
    } );
}

// Ajout de plusieurs scripts JS pour le thème enfant
function ajouter_scripts_personnalises() {
    wp_enqueue_script('mon_script_js', get_stylesheet_directory_uri() . '/js/mon_script.js', array('jquery'), '1.0', true);
    wp_enqueue_script('swiper_js', get_stylesheet_directory_uri() . '/js/swiper.js', array('jquery'), '1.0', true);
    wp_enqueue_script('banner-video_js', get_stylesheet_directory_uri() . '/js/banner-video.js', array('jquery'), '1.0', true);
    wp_enqueue_script('section-lieu_js', get_stylesheet_directory_uri() . '/js/section-lieu.js', array('jquery'), '1.0', true);
    wp_enqueue_script('section-burger_js', get_stylesheet_directory_uri() . '/js/section-burger.js', array('jquery'), '1.0', true);
    wp_enqueue_script('animation-titres_js', get_stylesheet_directory_uri() . '/js/animation-titres.js', array('jquery'), '1.0', true);

}
add_action('wp_enqueue_scripts', 'ajouter_scripts_personnalises');






