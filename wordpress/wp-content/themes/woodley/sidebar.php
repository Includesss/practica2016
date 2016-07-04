<div id="sidebar" class="col-md-3">
	<a id="site-name" href="<?php echo esc_url(home_url('/')); ?>" rel="home"><?php bloginfo('name'); ?></a>
	<div id="mobile-menu"><?php _e('Menu', 'woodley'); ?></div>
	<?php if (has_nav_menu('primary')) : ?>						
		<?php wp_nav_menu(array('theme_location' => 'primary', 'container' => 'nav', 'fallback_cb' => false, 'depth' => 1)); ?>						
	<?php endif; ?>
	<div id="widgets">
		<?php dynamic_sidebar('primary-sidebar'); ?>
	</div>
</div>