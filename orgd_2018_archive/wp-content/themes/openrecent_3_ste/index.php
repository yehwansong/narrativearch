<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package openrecent
 */
get_header();
?>




<div id="background_whole"></div>
<div class="content-area">
	<div id="index">
			<?php
			the_custom_logo();
			if ( is_front_page() && is_home() ) :
				?>
				<h1 class="site-title"><a id="site-title-link" href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
					<?php bloginfo( 'name' ); ?>
					</a>
					<div class="site-subtitle"><?php bloginfo( 'description' ); ?></div></h1>
				<?php
			else :
				?>
				<p class="site-title"><a id="site-title-link" href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
					<?php bloginfo( 'name' ); ?>
				</a>
					<div class="site-subtitle"><?php bloginfo( 'description' ); ?></div></p>
				<?php
			endif;?>
	<div id="indexwhite"></div>
	<div id="column14wrap" class="column" >
		<div class="column" id="column1">
				<?php
			$id = 67;
			$p = get_page($id);
			echo apply_filters('the_content', $p->post_content);
			?>
		</div>
	</div>
		<div class="column" id="column2">
				<?php
			$id = 61;
			$p = get_page($id);
			echo apply_filters('the_content', $p->post_content);
			?>
		</div>
		<div class="column" id="column3">
			
				<?php
			$id =59;
			$p = get_page($id);
			echo apply_filters('the_content', $p->post_content);
			?>
		</div>
	</div>


<!-- <img src="index.svg" id="indexsvg"> -->
	<div id="posts">
		<!-- <div id="postblack"><div id="postblack_map"></div></div> -->
		<?php
		if ( have_posts() ) :
				?>
		<?php
			while ( have_posts() ) :
				the_post();
				get_template_part( 'template-parts/content-all', get_post_type() );
			endwhile;
		else :
			get_template_part( 'template-parts/content-all', 'none' );

		endif;
			?>
	</div>
	<div class="back">
		BACK
	</div>
</div>



<?php
// get_sidebar();
get_footer();
