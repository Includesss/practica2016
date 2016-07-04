<div class="article-holder row">		
	<div class="col-sm-offset-1 col-sm-12 col-md-offset-1 col-md-10 article-content">			
		<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>			
			<?php the_post_thumbnail('featured'); ?>			
			<h1 class="post-title"><?php the_title(); ?></h1>
			<?php the_content(); ?>
			<?php wp_link_pages(); ?>			
		</article>	
	</div>		
</div>