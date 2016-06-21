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
    /* Slide open the nav menu */
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
            RANDOM BG IMG
================================== */
/*
$(document).ready(function() {
    var bgImgArray = ['bg-img-cycle1', 'bg-img-cycle2', 'bg-img-cycle3', 'bg-img-cycle4'],
        randomNumber = Math.floor(Math.random() * bgImgArray.length),
        randomBg = bgImgArray[randomNumber];
    $('.container-about').addClass(randomBg);
});
*/

/* ==================================
            CONTACT MODAL
================================== */
// reCaptcha
// $('#contact-submit-btn').on('click', function() {
//     //e.preventDefault();
//     $.ajax('https://www.google.com/recaptcha/api/siteverify', {type: "post", data: {
//         "secret": 6Lc9CCMTAAAAAHQf1Ho-KPhkf95ebzZtWW_WpRK8
//     }
//     }).done(function(data) {
//         if(data.success == true) {

//             // $('#contactform').submit();
//             return true;
//         } else {
//             return false;
//         }
//     });    
// });
// $('#contact-submit-btn').on('click', function(e) {
//     e.preventDefault();
//     return false;
// });

$(document).ready(function () {
    if($('body').hasClass('page-template-page-about-me')) {
        initForm();
    }
});

function initForm() {
    // Based on JavaScript code by Chirp Internet: www.chirp.com.au
    var modalWrapper = $('#contact-wrapper');
    var modalWindow  = $('#contact-modal');

    var openModal = function(e) {
        modalWrapper.addClass('overlay');
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
    };
    // Removes the class 'overlay' to close 
    var closeModal = function(e) {
        modalWrapper.removeClass('overlay');
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
    };
    // Close when click on the 'overlay' div
    var clickHandler = function(e) {
        if(!e.target) e.target = e.srcElement;
        if(e.target.tagName == "div") {
            if(e.target.id != "modal_window") closeModal(e);
        }
    };
    // Close the modal if 'ESC' is pressed
    var keyHandler = function(e) {
        if(e.keyCode == 27) closeModal(e);
    };

    if(document.addEventListener) {
        document.getElementById('modal_open').addEventListener("click", openModal, false);
        document.getElementById('modal_close').addEventListener("click", closeModal, false);
        document.addEventListener("click", clickHandler, false);
        document.addEventListener("keydown", keyHandler, false);
    } else {
        $('#modal_open').attachEvent("onclick", openModal);
        $('#modal_close').attachEvent("onclick", closeModal);
        document.attachEvent("onclick", clickHandler);
        document.attachEvent("onkeydown", keyHandler);
    }
}

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