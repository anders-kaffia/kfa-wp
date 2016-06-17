 "use strict";
/* Enables the use of '$' with jQuery in Wordpress */
var $ = jQuery;

$(document).ready(function () {
    /* Targets the 'burger menu' */
    var toggle = document.getElementById("bgr");
    /* Toggle the animation of the 'burger menu' */
    $('#bgr').on('click', function(e) {
        e.preventDefault();
        (toggle.classList.contains("is-active") === true) ? toggle.classList.remove("is-active") : toggle.classList.add("is-active");
    });
    /* Slides open the nav menu */
    $('#bgr').on('click', function(e) {
        e.preventDefault();
        $('.main-nav').toggleClass('menu-open');
    });
});
/* ==================================
        HEADER FIXED ON SCROLL
================================== */

$(document).ready(function () {
    var menu = $("#menu-container");
    $(window).on("scroll", function(e) {
        var scrollPos = $(document).scrollTop();
        if (scrollPos > 253) {
            menu.addClass("fixed-nav");
        } else {
            menu.removeClass("fixed-nav");
        }
    });
});

/* ==================================
            WP CUSTOMIZER
================================== */
// (function( $ ) {

//     wp.customize( 'blogname', function( value ) {
//         value.bind( function( to ) {
//             $( '.site-title a' ).text( to );
//         } );
//     } );

//     wp.customize( 'blogdescription', function( value ) {
//         value.bind( function( to ) {
//             $( '.site-description' ).text( to );
//         } );
//     } );

//     wp.customize( 'header_textcolor', function( value ) {
//         value.bind( function( to ) {
//             if ( 'blank' === to ) {
//                 $( '.site-title' ).css( {
//                     'clip': 'rect(1px, 1px, 1px, 1px)',
//                     'position': 'absolute'
//                 } );
//             } else {
//                 $( '.site-title' ).css( {
//                     'clip': 'auto',
//                     'position': 'static'
//                 } );

//                 $( '.site-title a' ).css( {
//                     'color': to
//                 } );
//             }
//         } );
//     });

// })( jQuery );
//# sourceMappingURL=script.js.map
