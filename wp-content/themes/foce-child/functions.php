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

// ajout d'un js pour le theme enfant
function ajouter_script_personnalise() {
    wp_enqueue_script('script_js', get_stylesheet_directory_uri() . '/js/mon_script.js', array('jquery'), '1.0', true);
}
add_action('wp_enqueue_scripts', 'ajouter_script_personnalise');



