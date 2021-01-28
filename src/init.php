<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * Assets enqueued:
 * 1. blocks.style.build.css - Frontend + Backend.
 * 2. blocks.build.js - Backend.
 * 3. blocks.editor.build.css - Backend.
 *
 * @uses {wp-blocks} for block type registration & related functions.
 * @uses {wp-element} for WP Element abstraction — structure of blocks.
 * @uses {wp-i18n} to internationalize the block's text.
 * @uses {wp-editor} for WP editor styles.
 * @since 1.0.0
 */
function trptx_bilagsslider_cgb_block_assets() { // phpcs:ignore
	// Register block styles for both frontend + backend.
	wp_register_style(
		'trptx_bilagsslider-cgb-style-css', // Handle.
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ), // Block style CSS.
		is_admin() ? array( 'wp-editor' ) : null, // Dependency to include the CSS after it.
		null // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.style.build.css' ) // Version: File modification time.
	);

	// Register block editor script for backend.
	wp_register_script(
		'trptx_bilagsslider-cgb-block-js', // Handle.
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ), // Dependencies, defined above.
		null, // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ), // Version: filemtime — Gets file modification time.
		true // Enqueue the script in the footer.
	);

	// Register block editor styles for backend.
	wp_register_style(
		'trptx_bilagsslider-cgb-block-editor-css', // Handle.
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ), // Block editor CSS.
		array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
		null // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.editor.build.css' ) // Version: File modification time.
	);

	// WP Localized globals. Use dynamic PHP stuff in JavaScript via `cgbGlobal` object.
	wp_localize_script(
		'trptx_bilagsslider-cgb-block-js',
		'cgbGlobal', // Array containing dynamic data for a JS Global.
		[
			'pluginDirPath' => plugin_dir_path( __DIR__ ),
			'pluginDirUrl'  => plugin_dir_url( __DIR__ ),
			'my_image_url' => plugins_url( './preview.png', __FILE__ )
			// Add more data here that you want to access from `cgbGlobal` object.
		]
	);

	/**
	 * Register Gutenberg block on server-side.
	 *
	 * Register the block on server-side to ensure that the block
	 * scripts and styles for both frontend and backend are
	 * enqueued when the editor loads.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/blocks/writing-your-first-block-type#enqueuing-block-scripts
	 * @since 1.16.0
	 */
	register_block_type(
		'cgb/block-trptx-bilagsslider', array(
			// Enqueue blocks.style.build.css on both frontend & backend.
			'style'         => 'trptx_bilagsslider-cgb-style-css',
			// Enqueue blocks.build.js in the editor only.
			'editor_script' => 'trptx_bilagsslider-cgb-block-js',
			// Enqueue blocks.editor.build.css in the editor only.
			'editor_style'  => 'trptx_bilagsslider-cgb-block-editor-css',
			'render_callback' => 'render_bilagsslider',
		)
	);
}

function render_bilagsslider( $attr ) {
	//Get timeWithout
	if(isset($attr["timeWithoutAutomation"])) {
		$timeWithout = $attr["timeWithoutAutomation"];
	} else {
		$timeWithout = 180;
	}

	//Get timeWith
	if(isset($attr["timeWithAutomation"])) {
		$timeWith = $attr["timeWithAutomation"];
	} else {
		$timeWith = 26;
	}

	//Get button text
	if(isset($attr["buttonText"])) {
		$buttonText = $attr["buttonText"];
	} else {
		$buttonText = "Book en demo";
	}

	//Get button URL
	if(isset($attr["buttonURL"])) {
		$buttonURL = $attr["buttonURL"];
	} else {
		$buttonURL = "https://www.tripletex.no/kontakt-oss";
	}

	$timeDifference = $timeWithout - $timeWith;

	return "
		<div id='tpltx-container'>
			<div class='wp-block-cgb-block-trptx-bilagsslider'>
				<div class='tpltx_title-container'>
					<h2 class='tpltx_title'>Hva kan du spare med Bilagsautamasjon?</h2>
					<p class='tpltx_description'>Finn ut hva bilagsautomasjon kan bety for deg og din bedrift ved å bruke kalkulatoren nedenfor til å estimere hvor mye du vil spare i kostnad og tid.</p>
				</div>
				<div class='tpltx_slider-container'>
					<div class='tpltx_col-slider'>
						<p class='slider-title'>Antall bilag per år</p>
						<p class='slider-text'><span id='tpltx-antall'>10000</span> bilag</p>
						<input
							id='tpltx-bilagsslider'
							class='tpltx-bilagsslider'
							type='range'
							min='1'
							max='20000'
							value={ attributes.sliderValue }
						/>
					</div>
					<div class='tpltx_col-result'>
						<h3 class='tpltx_result-title'>Timer spart per år:</h3>
						<h2 class='tpltx_result-text' id='tpltx-result'>". ceil(10000 * $timeDifference / 3600) ."</h2>
					</div>
				</div>
				<a class='tpltx_button' id='tpltx_button' href='". $buttonURL ."'>
					<p>". $buttonText ."</p>
				</a>
			</div>
		</div>
		<script>
			var timeDifference = $timeDifference
			var slider = document.getElementById('tpltx-bilagsslider');
			var antallBilagSpan = document.getElementById('tpltx-antall');
			var resultSpan = document.getElementById('tpltx-result');
			var hoursSaved = 0;
			slider.addEventListener('input', function(){
				hoursSaved = (slider.value * timeDifference) / 3600;
				if(hoursSaved < 0.5) {
					hoursSaved = 0;
				} else {
					hoursSaved = Math.ceil(hoursSaved);
				}
				antallBilagSpan.innerHTML = slider.value;
				resultSpan.innerHTML = hoursSaved;
			})
		</script>
	";
}

// Hook: Block assets.
add_action( 'init', 'trptx_bilagsslider_cgb_block_assets' );
