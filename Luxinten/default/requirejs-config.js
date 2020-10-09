let config = {
    map: {
        '*': {
             stickyProduct: 'js/stickyProduct',
             productHeight: 'js/productHeight'
        }
    },
    shim: {
        stickyProduct: {
            deps: ['jquery']
        },
        productHeight: {
            deps: ['jquery']
        }
    }
};
