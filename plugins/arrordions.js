!(function ($, window, document, undefined) {

    var Plugin = function (elem, options) {
        this.$wrapper = $(elem);

        this.defaults = {
            w: $(document.body).width(),
            h: 300,
            imgNum: 14,
            mouse: 'mouseover'
        };

        this.opts = $.extend({}, this.defaults, options);
    };

    Plugin.prototype = {
        inital: function () {
            var self = this;

            this.createElem();

            this.$item = this.$wrapper.find('li');

            this.setData();

            this.$item[this.opts.mouse](function () {
                self.change(this);
            })

            if (this.opts.mouse === 'mouseover') {
                this.$item.mouseout(function () {
                    self.$item.stop().animate({width: self.opts.w / self.opts.imgNum});
                });
            }
        },

        createElem: function () {
            var $createUl = $('<ul></ul>');
            var str = '';

            for (var i = 1; i <= this.opts.imgNum; i++) {
                str += '<li><img src="images/'+i+'.jpg" alt="#"></li>';
            }

            $createUl.html(str);
            this.$wrapper.append($createUl);
        },

        setData: function () {
            this.$wrapper.css({width: this.opts.w, height: this.opts.h});

            this.$item.css({width: this.opts.w / this.opts.imgNum});
        },

        change: function (obj) {
            var $curImg_w = $(obj).find('img').width();
            var otherImg_w = (this.opts.w  - $curImg_w) / (this.opts.imgNum - 1);

            $(obj).stop().animate({width: $curImg_w}, 'fast');
            $(obj).siblings().stop().animate({width: otherImg_w}, 'fast');
        },

        constructor: Plugin
    };

    $.fn.accordion = function (options) {
        var a1 = new Plugin(this, options);

        return a1.inital();
    };

})(window.jQuery, window, document);