define([
    'jquery'
], function ($) {
    'use strict';
    $.widget('mage.productHeight', {
        _create: function () {
            let maxBlock = 0;
            let productArray = $(".product-item");
            $.each(productArray, () => {
                const height = $(this.element).height();
                if (height > maxBlock) {
                    maxBlock = height;
                }
            });
            productArray.height(maxBlock);
        }
    })
});
