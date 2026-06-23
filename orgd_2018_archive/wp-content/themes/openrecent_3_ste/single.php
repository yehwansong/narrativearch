<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package openrecent
 */

get_header();
?>
<div id='whitewrap'></div>
<div id="fromstart">처음으로</div>
	<div id="primary" class="content-area">

		<?php
		while ( have_posts() ) :
			the_post();

			get_template_part( 'template-parts/content', get_post_type() );

		endwhile; // End of the loop.
		?>
	</div><!-- #primary -->
<?php
get_sidebar();
get_footer();
