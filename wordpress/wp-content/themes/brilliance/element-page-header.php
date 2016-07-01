<?php wp_reset_query(); ?>
<?php if(!is_front_page()){ ?>

<?php $header_image = cpotheme_header_image(); ?>
<?php if($header_image != '') $header_image = 'style="background-image:url('.$header_image.');"'; ?>
<section id="pagetitle" class="pagetitle dark secondary-color-bg" <?php echo $header_image; ?>>
	<div class="container">
		<?php do_action('cpotheme_title'); ?>
	</div>
</section>

<?php } ?>