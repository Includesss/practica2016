<?php get_header(); ?>	
<div class="container-fluid">	
	<div class="row">		
		<?php get_sidebar(); ?>		
		<div id="content-holder" class="col-md-9">			
			<?php
			while (have_posts()) : the_post();					
				get_template_part('content', get_post_format());					
				if (comments_open() || get_comments_number()) { comments_template(); }
			endwhile;
			?>
			<div class="row">
				<div class="col-sm-offset-1 col-sm-10">					
					<div id="post-nav" class="clearfix">				
						<?php
							$prev_post = get_previous_post();
							if (!empty($prev_post)): ?>			
							<div id="post-nav-prev">
								<span>&#171;</span> 
								<a class="post-nav-older" href="<?php echo get_permalink($prev_post->ID); ?>">
									<?php echo get_the_title($prev_post); ?>
								</a>
							</div>
						<?php endif; ?>			
						<?php
							$next_post = get_next_post();
							if (!empty($next_post)): ?>
							<div id="post-nav-next">
								<a href="<?php echo get_permalink($next_post->ID); ?>">										
									<?php echo get_the_title($next_post); ?>				
								</a>
								<span>&#187;</span>
							</div>
						<?php endif; ?>
					</div>				
				</div>
			</div>
			<?php get_footer(); ?>
		</div>		
	</div>
</div>