<?php get_header(); ?>	
<div class="container-fluid">	
	<div class="row">		
		<?php get_sidebar(); ?>		
		<div id="content-holder" class="col-md-9">
			<div class="article-holder row">		
				<div class="col-sm-offset-1 col-sm-12 col-md-offset-1 col-md-10 article-content">			
					<article>			
						<h1><?php _e('404 - ничего не найдено', 'woodley'); ?></h1>			
						<p><?php _e('Используйте поиск.', 'woodley'); ?></p>
						<?php get_search_form(); ?>				
					</article>	
				</div>		
			</div>
			<?php get_footer(); ?>
		</div>		
	</div>
</div>