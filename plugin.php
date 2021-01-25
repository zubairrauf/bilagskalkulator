<?php
/**
 * Plugin Name: Bilagskalkulator
 * Plugin URI: https://github.com/zubairrauf/
 * Description: Bilagskalkulator er en WordPress block som gir en enkel oversikt over hvor mye tid regnskapsførere kan spare ved å bruke Bilagsautmasjon.
 * Author: Zubair Rauf
 * Author URI: https://zubairrauf.com/
 * Version: 1.0.0 b
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
