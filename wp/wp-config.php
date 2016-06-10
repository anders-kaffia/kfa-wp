<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wordpress');

/** MySQL database username */
define('DB_USER', 'kaffia');

/** MySQL database password */
define('DB_PASSWORD', 'b3q4W92SRbMh7SYe');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '6`%a9sqp,N=y3=`mwr4U1d_w841VxX%~@x`]`(jIr4|M 6p[Ia!b_+5j8:Ji:/I5');
define('SECURE_AUTH_KEY',  'Y=hL z4&l1$0HtW^!X(!inS*FJiGRC[8 5u5~s%aR1Nnk]=@([3sDqbOxx2.|S 4');
define('LOGGED_IN_KEY',    'A9{kqxq09o1,k)f+@c{Q~S$1%ddM>ON!cGn7YrDP-zif-;of&=>@O.a-ZfBV_9/K');
define('NONCE_KEY',        'ZZMn5^iH3Ns0ReNs9JlXjG2#L<@<U #Ug40rQOv*oBv]^Pz%0zuWq#xFXD2XEY#Q');
define('AUTH_SALT',        'aU:(]k%>@VdQ$_ko1~IKjPV0[#tQ 1r3F?1QhUqd&&cNHrvK@w_pKeOt|9T8oJSa');
define('SECURE_AUTH_SALT', '8IjV<3:r95$2jPy-X$=9uJ;gcQu&C#ibC-s1@Kt$<K7jb)DOS97sL^G!@N>K;>rx');
define('LOGGED_IN_SALT',   'RDnncwLBxrt)s|I8+Cm]Cex+kI7Ft~Hr!U%-4T:O)~Zwz#}J$c_>a-@{5i6?-+9M');
define('NONCE_SALT',       'Qp^09J1;H#i|M`.lzI)U~!^E;Uhh9@3;za<2SXR4tHG-Y6j5ZL[ B=LHNfL$I-7R');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
