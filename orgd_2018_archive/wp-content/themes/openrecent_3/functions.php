<?php
/**
 * openrecent functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package openrecent
 */

if ( ! function_exists( 'openrecent_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function openrecent_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on openrecent, use a find and replace
		 * to change 'openrecent' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'openrecent', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );  
add_image_size( 'post-thumb', 620, 207, true );
add_image_size( 'home-thumb', 220, 180, true );
add_image_size( 'index-thumb', 300, 100, true );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus( array(
			'menu-1' => esc_html__( 'Primary', 'openrecent' ),
		) );

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support( 'html5', array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
		) );

		// Set up the WordPress core custom background feature.
		add_theme_support( 'custom-background', apply_filters( 'openrecent_custom_background_args', array(
			'default-color' => 'ffffff',
			'default-image' => '',
		) ) );

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support( 'custom-logo', array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		) );
	}
endif;
add_action( 'after_setup_theme', 'openrecent_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function openrecent_content_width() {
	// This variable is intended to be overruled from themes.
	// Open WPCS issue: {@link https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/1043}.
	// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
	$GLOBALS['content_width'] = apply_filters( 'openrecent_content_width', 640 );
}
add_action( 'after_setup_theme', 'openrecent_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function openrecent_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar', 'openrecent' ),
		'id'            => 'sidebar-1',
		'description'   => esc_html__( 'Add widgets here.', 'openrecent' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
}
add_action( 'widgets_init', 'openrecent_widgets_init' );

/**
 * Enqueue scripts and styles.
 */

function openrecent_scripts() {

	wp_enqueue_style( 'openrecent-style', get_stylesheet_uri() );

	wp_enqueue_script( 'openrecent-navigation', get_template_directory_uri() . '/js/navigation.js', array(), '20151215', false );

	wp_enqueue_script( 'openrecent-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), '20151215', false );
	wp_enqueue_script('jquery');
	wp_enqueue_script( 'recent_script', get_template_directory_uri() . '/js/recent_script.js', array(), '20151215', false );
	wp_enqueue_script( 'html2canvas', get_template_directory_uri() . '/js/html2canvas.js', array(), '20151215', false );
	wp_enqueue_script( 'tesseract','https://cdn.rawgit.com/naptha/tesseract.js/1.0.10/dist/tesseract.js', array('jquery'), null, false );

wp_localize_script( 'recent_script', 'ajax_object', array('ajax_url' => admin_url( 'admin-ajax.php' )
));

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'openrecent_scripts' );


/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}




add_action( 'wp_ajax_f711_get_post_content', 'f711_get_post_content_callback' );
// If you want not logged in users to be allowed to use this function as well, register it again with this function:
add_action( 'wp_ajax_nopriv_f711_get_post_content', 'f711_get_post_content_callback' );

function f711_get_post_content_callback() {

    // retrieve post_id, and sanitize it to enhance security
    $post_id = intval($_POST['post_id'] );

    // Check if the input was a valid integer
    if ( $post_id == 0 ) {
        echo "Invalid Input";
        die();
    }

    // get the post
    $thispost = get_post( $post_id );

    // check if post exists
    if ( !is_object( $thispost ) ) {
        echo 'There is no post with the ID ' . $post_id;
        die();
    }

    echo $thispost->post_content; //Maybe you want to echo wpautop( $thispost->post_content );

    die();

}
    ?>



<?php function sm_custom_meta() {
    add_meta_box( 'sm_meta', __( 'Featured Posts', 'sm-textdomain' ), 'sm_meta_callback', 'post' );
}
function sm_meta_callback( $post ) {
    $featured = get_post_meta( $post->ID );
    ?>
 
	<p>
    <div class="sm-row-content">
        <label for="meta-checkbox">
            <input type="checkbox" name="meta-checkbox" id="meta-checkbox" value="yes" <?php if ( isset ( $featured['meta-checkbox'] ) ) checked( $featured['meta-checkbox'][0], 'yes' ); ?> />
            <?php _e( 'Featured this post', 'sm-textdomain' )?>
        </label>
        
    </div>
</p>
 
    <?php
}
add_action( 'add_meta_boxes', 'sm_custom_meta' );
?>

<?php 
/**
 * Saves the custom meta input
 */
function sm_meta_save( $post_id ) {
 
    // Checks save status
    $is_autosave = wp_is_post_autosave( $post_id );
    $is_revision = wp_is_post_revision( $post_id );
    $is_valid_nonce = ( isset( $_POST[ 'sm_nonce' ] ) && wp_verify_nonce( $_POST[ 'sm_nonce' ], basename( __FILE__ ) ) ) ? 'true' : 'false';
 
    // Exits script depending on save status
    if ( $is_autosave || $is_revision || !$is_valid_nonce ) {
        return;
    }
 
 // Checks for input and saves
if( isset( $_POST[ 'meta-checkbox' ] ) ) {
    update_post_meta( $post_id, 'meta-checkbox', 'yes' );
} else {
    update_post_meta( $post_id, 'meta-checkbox', '' );
}
 
}
add_action( 'save_post', 'sm_meta_save' );

?>

<?php 
 // function wpse80098_filter_post_class( $classes ) {
 //     global $post;
 //     if ( 'yes' == get_post_meta( $post->ID, 'meta-checkbox', true ) ) {
 //         $classes[] = 'featured_post';
 //     }
 //     return $classes;
 // }
 // add_filter( 'post_class', 'wpse80098_filter_post_class' );


 // ?>

<?php 
function wpse_enqueue_datepicker() {
    // Load the datepicker script (pre-registered in WordPress).
    wp_enqueue_script( 'jquery-ui-datepicker' );

    // You need styling for the datepicker. For simplicity I've linked to Google's hosted jQuery UI CSS.
    wp_register_style( 'jquery-ui', 'http://code.jquery.com/ui/1.11.2/themes/smoothness/jquery-ui.css' );
    wp_enqueue_style( 'jquery-ui' );  
}
add_action( 'wp_enqueue_scripts', 'wpse_enqueue_datepicker' );
?>