define([
    'jquery',
    'sticky'
], function ($) {
    const container = $('.nav-sections');
    const startOffset = 0 - container.offset().top;
    container.css('position', 'relative').sticky({
        "container": "body",
        "spacingTop": startOffset
    });
})
