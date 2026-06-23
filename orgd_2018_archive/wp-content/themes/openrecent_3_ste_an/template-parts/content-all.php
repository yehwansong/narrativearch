<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package openrecent
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<?php openrecent_post_thumbnail(); ?>

	<header class="entry-header">
		

	<?php
	echo '<p>'. get_the_category( $id )[0]->name .'</p>';
		?>

	<?php
	if ( is_singular() ) :
		the_title( '<h1 class="entry-title">', '</h1>' );
	else :
		the_title( '<h2 class="entry-title">', '</h2>' );
	endif;

		?>

	<p class="book-meta">
	<?php the_field('event-date'); ?>
	</p>

	</header><!-- .entry-header -->


	<div class="entry-content">
		
	</div><!-- .entry-content -->

</article><!-- #post-<?php the_ID(); ?> -->
