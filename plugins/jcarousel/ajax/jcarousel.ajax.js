(function($) {
    $(function() {
        var jcarousel = $('.jcarousel').jcarousel();

        $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });

        var jcarouselPagination = $('.jcarousel-pagination').jcarouselPagination({
            // item: function (page) {
            //     console.log(page);
            //     var jCarousel = this.carousel().jcarousel('items');
            //     console.log(jCarousel);
            // }
        });

        var setup = function(data) {
            var html = '<ul>';

            $.each(data.items, function(index,item) {
                html += '<li><img src="' + this.src + '" alt="' + this.title + '"></li>';
            });

            html += '</ul>';

            // Append items
            jcarousel
                .html(html);

            // Reload carousel
            jcarouselPagination.jcarouselPagination('reloadCarouselItems');
            jcarousel
                .jcarousel('reload');
        };
        $.getJSON('data.json',setup);

    });
})(jQuery);
