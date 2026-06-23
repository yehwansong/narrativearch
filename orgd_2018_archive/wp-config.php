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
define('DB_NAME', 'yhsongco_orgd');

/** MySQL database username */
define('DB_USER', 'yhsongco_yhsong');

/** MySQL database password */
define('DB_PASSWORD', 'zxczxcv453');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

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
define('AUTH_KEY',         '~Giz>=Q&GxsRLs@w+G|f+xwvbe.wNRM4#tY0_F!t%~]k~2Inmnbto5Xi>Kuk[xl{');
define('SECURE_AUTH_KEY',  '0MKRb/;-TR4S9Q!17*HWxWqZ_QT^@q5IKF J3Q^j4a #`|:,;*->~N2.A/kZ iW*');
define('LOGGED_IN_KEY',    'QKM z` -giqc}J]K!|2pujN`)&[VSkE(94nT <E_.+#{&*F cmbtP:,yKp5CI; Z');
define('NONCE_KEY',        'ZdW_,/~I+1`Z}dvfy>|+pEwhJjd)ze`:?swp=l6Y2iBN/ZsI;l[2PqNS@FU.iY%.');
define('AUTH_SALT',        ')jy/[LBjnzJIXF<03f#U:43Z|=@6&E_6U>L3}H/3o!A#?;_C{V?2;9%Ga qX9)*&');
define('SECURE_AUTH_SALT', '!*D$+)5w+VU3eq EkD(R+z 0+/srC>Pji;@rMuyO&Md)5sS&GlLM@R|0AY[{J:c-');
define('LOGGED_IN_SALT',   '~N$-GFp=W&RIkDGtPA?d9f<+qd-M3D!v[@[1dVRC&ltC/p>Lnee;76 F3R|2)Tmz');
define('NONCE_SALT',       '# HNM,^u#5}VD6}t-e(F60Zw#99u(nkh@;2/(kQprha2!)RA;Pl! |0RQ&OKlQJw');

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
