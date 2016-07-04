<?php if (post_password_required()) { return; } ?>
<div id="comments" class="row">
	<div class="col-sm-10 col-sm-offset-1">
		<?php if (have_comments()) : ?>
			<h4 class="comments-title"><?php _e('Комментарии', 'woodley'); ?></h4>		
			<ol class="comment-list">
				<?php wp_list_comments(array('callback' => 'woodley_comment')); ?>
			</ol>
			<?php paginate_comments_links(); ?>
			<?php if (!comments_open()) : ?>
				<p class="no-comments"><?php _e('Комментарии закрыты', 'woodley'); ?></p>
			<?php endif; ?>
		<?php endif; ?>
		<?php comment_form(); ?>
	</div>
</div>