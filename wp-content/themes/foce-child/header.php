<?php

/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Fleurs_d\'oranger_&_Chats_errants
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />

    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>
    <div id="page" class="site">
        <a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e('Skip to content', 'foce'); ?></a>

        <div id="page" class="site">
            <a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e('Skip to content', 'foce'); ?></a>

            <header id="masthead" class="site-header">
                <input type="checkbox" id="menu" name="menu">
                <label class="menu-toggle" for="menu" aria-controls="burger-menu" aria-expanded="false">
                    <img src="wp-content/uploads/2024/01/Burger.svg" alt="Burger Icon">
                    <span class="burger-text"></span>
                </label>
                <nav id="site-navigation" class="main-navigation">
                    <ul class="menu-list">
                        <li class="site-title"><a href="<?php echo esc_url(home_url('/')); ?>" rel="home"><?php bloginfo('name'); ?></a></li>
                    </ul>
                </nav>
                <nav id="burger-menu" class="burger-menu">
                    <input type="checkbox" id="menu-burger" name="menu-burger">
                    <ul class="menu-list">
                        <img src="wp-content/themes/foce/assets/images/logo.png" alt="Close Icon" width="100" height="100">
                        <li class="histoire"><a href="#story">Histoire</a></li>
                        <li class="personnages"><a href="#characters">Personnages</a></li>
                        <li class="lieu"><a href="#place">Lieu</a></li>
                        <li class="studio"><a href="#studio">Studio Koukaki</a></li>
                         <li><a href="#" style="font-size: 20px; margin-bottom: 0;">STUDIO KOUKAKI</a></li>
                    </ul>
                    <label class="menu-toggle close" for="menu-burger">
                        <img src="wp-content/uploads/2024/01/Burgercroix.svg" alt="Close Icon">
                    </label>
                </nav>
            </header>
            </nav><!-- #site-navigation -->
            </header><!-- #masthead -->