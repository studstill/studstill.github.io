/**********************************************************************
This script was adapted from the "Agency"
Bootstrap theme by BlackrockDigital:
http://startbootstrap.com/template-overviews/agency
The original MIT liscence can be found here:
https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE
************************************************************************/

(function($) {
    'use strict'; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    });

    // Fade In Bouncing Arrow after 2.5 seconds
    window.setTimeout(function() {
        $('.arrow').fadeIn();
    }, 2500);

    // Hide bouncing arrow on scroll
    window.addEventListener('scroll', function(e) {
        $('.arrow').fadeOut();
    });

    // Maintain current copyright year
    var copyrightYearSpan = document.querySelector('#copyrightYear');
    var date = new Date();
    var year = date.getFullYear();
    copyrightYearSpan.innerHTML = year;

})(jQuery); // End of use strict
