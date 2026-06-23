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
	<div id="ys_artwork">liet</div>
<div class="content-area">
	<div class="button" id="button_ys">liet</div>
	<div id="index">
			<?php
			the_custom_logo();
			if ( is_front_page() && is_home() ) :
				?>
				<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
					<?php bloginfo( 'name' ); ?>
					<div class="site-subtitle"><?php bloginfo( 'description' ); ?></div>
					</a></h1>
				<?php
			else :
				?>
				<p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
					<?php bloginfo( 'name' ); ?>
					<div class="site-subtitle"><?php bloginfo( 'description' ); ?></div>
				</a></p>
				<?php
			endif;?>


		<div class="column" id="column3">
			
				<?php
			$id =59;
			$p = get_page($id);
			echo apply_filters('the_content', $p->post_content);
			?>
		</div>
		<div class="column" id="column4">
			
				<?php
			$id = 57;
			$p = get_page($id);
			echo apply_filters('the_content', $p->post_content);
			?>
		</div>
		<div class="column" id="column1">
				<?php
			$id = 67;
			$p = get_page($id);
			echo apply_filters('the_content', $p->post_content);
			?>
		</div>
		<div class="column" id="column2">
				<?php
			$id = 61;
			$p = get_page($id);
			echo apply_filters('the_content', $p->post_content);
			?>
		</div>
		<div class="category_group">
		<?php
				$categories = get_categories();
		foreach($categories as $category) {
		   echo '<h2>' . $category->name . '</h2>';
		}
				?>
				</div>
	</div>


<div id="real_time"></div>
	<div id="posts">
		<?php
		if ( have_posts() ) :
				?>
		<?php
			while ( have_posts() ) :
				the_post();
				get_template_part( 'template-parts/content-all', get_post_type() );
			endwhile;
		else :
			get_template_part( 'template-parts/content', 'none' );

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
