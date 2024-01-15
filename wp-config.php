<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clés secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur
 * {@link https://fr.wordpress.org/support/article/editing-wp-config-php/ Modifier
 * wp-config.php}. C’est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @link https://fr.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define('WP_CACHE', true);
define( 'WPCACHEHOME', 'C:\MAMP\htdocs\fleurs_d_oranger\wp-content\plugins\wp-super-cache/' );
define( 'DB_NAME', 'oranger' );

/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', 'root' );

/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', 'root' );

/** Adresse de l’hébergement MySQL. */
define( 'DB_HOST', 'localhost:3307' );

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Type de collation de la base de données.
  * N’y touchez que si vous savez ce que vous faites.
  */
define('DB_COLLATE', '');

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clés secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         ' 6$k^wfQxsr~}#n}H4QT=/i@rR9/utN=`K^~srQ(tPwRaXg/xGW;Vff:js &@_<5' );
define( 'SECURE_AUTH_KEY',  '[>;NQZd<=)$]=+s@Y&{dc_jdE7rWD&K0&<q<<juSz7569- G+SY]N#3+M*MgiD<H' );
define( 'LOGGED_IN_KEY',    '$,O-;>%da#=wml% zyiMV9G*N#KQKJk5X:(#AR{aA^88N%0j^@$z%;2&hf/iX[uL' );
define( 'NONCE_KEY',        'q~b1EW>z1*Lkp;_=MeT!v1Q->[):?OkyZF48PU++px_1qKI[VIGvLZ6NM&QB+T`r' );
define( 'AUTH_SALT',        '9cN]OqxWRcv[1TBes~05rw8Hk,MCmY-ht_h[-YBx0o?G8:Da3xp|Bt872;SE]uhb' );
define( 'SECURE_AUTH_SALT', 'hNB@nOZ8}**5pfy7OZzUfY=9&R~Grkdk?@Kw.X>)p/IK}s<mUw7~`JL80BY/&}>u' );
define( 'LOGGED_IN_SALT',   'z%fM7:#ftE5+;=0W*N_^6LR(?DiXB~N;D+V=#[pECSYPcEI`^;+Js&1HCeSNfnLE' );
define( 'NONCE_SALT',       '<.2S6GUng>.<Q5c-%?],#Qb)ZEF{&4~X/[Xn<..787EzzT,v2!}}H8+]Ib^*LG~3' );
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'wp_';

/**
 * Pour les développeurs et développeuses : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortement recommandé que les développeurs et développeuses d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur la documentation.
 *
 * @link https://fr.wordpress.org/support/article/debugging-in-wordpress/
 */
define('WP_DEBUG', false);

/* C’est tout, ne touchez pas à ce qui suit ! Bonne publication. */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');
