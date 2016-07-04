<div class="article-holder row">		
	<div class="col-sm-offset-1 col-sm-12 col-md-offset-1 col-md-10 article-content">			
		<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
			<?php if (is_single()) : ?>
				<?php the_post_thumbnail('featured'); ?>
			<?php else : ?>
				<?php the_post_thumbnail('featured-crop'); ?>
			<?php endif; ?>									
			<?php if (is_single()) : ?>
				<h1 class="post-title"><?php the_title(); ?></h1>
				<p class="date-author">// <?php _e('Опубликовано:', 'woodley'); ?> <?php the_time(get_option('date_format')); ?> <?php _e('автор:', 'woodley'); ?> <?php the_author(); ?></p>
				<?php the_content(); ?>
				<?php the_category(); ?>
				<?php wp_link_pages(); ?>
			<?php else : ?>
			<?php if (is_sticky()) : ?>
				<p class="featured"><span>&#10026;</span><?php _e('Прикрепленная запись', 'woodley'); ?></p>
			<?php endif; ?> 
			<h3 class="post-title-teaser"><a href="<?php echo esc_url( get_permalink()); ?>"><?php the_title(); ?></a></h3>
				<?php the_excerpt(); ?>
			<?php endif; ?>	
		</article>		
		<?php the_tags('<ul class="tags"><li>', '</li><li>', '</li></ul>'); ?>
	</div>		
</div>