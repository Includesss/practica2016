<?php get_header(); ?>	
<div class="container-fluid">	
	<div class="row">		
		<?php get_sidebar(); ?>		
		<div id="content-holder" class="col-md-9">			
			<?php
			if (have_posts()) :	
				while (have_posts()) : the_post();								
					get_template_part('content', get_post_format());				
				endwhile;
			else :
				get_template_part('content', 'none');
			endif;	
			?>
			<div class="row">
				<div class="col-sm-offset-1 col-sm-10">
					<?php woodley_pagination(); ?>
				</div>
			</div>
			<?php get_footer(); ?>
		</div>		
	</div>
</div>