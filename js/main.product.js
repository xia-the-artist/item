require.config({
    paths: {
        jquery: './jquery.min',
        product: './lib/product',
        cookie: './cookie'
    },
    shim: {}
});

require(['jquery', 'product'], function($, product) {
    product.render(function(id, price) {
        //回调函数解决代码执行顺序问题
        //当页面渲染玩楚才能获取元素
        $('.product-actions').on('click', function() {
            product.addItem(id, price, $('.num').val());
        });
        console.log($);

    });





});