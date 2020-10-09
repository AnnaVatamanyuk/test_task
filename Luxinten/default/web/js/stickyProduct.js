define([
    'jquery'
], function ($) {
    'use strict';
    const container = $(window);
    container.scroll(function() {
        const scrollTop = container.scrollTop();
        if (scrollTop > $('.product-social-links').offset().top) {
            $('.container-sticky-block').addClass('sticky');
        } else if (scrollTop === 0) {
            $('.container-sticky-block').removeClass('sticky');
        }
    });
});
