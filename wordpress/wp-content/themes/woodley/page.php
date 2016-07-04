<?php get_header(); ?>	
<div class="container-fluid">	
	<div class="row">		
		<?php get_sidebar(); ?>		
		<div id="content-holder" class="col-md-9">			
			<?php
			while (have_posts()) : the_post();					
				get_template_part('content', 'page');					
				if (comments_open() || get_comments_number()) { comments_template(); }
			endwhile;
			?>			
			<?php get_footer(); ?>
		</div>		
	</div>
</div>