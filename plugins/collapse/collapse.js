//-->> Created by pipu on 2017/2/17.
;(function($,window,document,undefined){
    'use strict';
    var opt = {
        toggle: true
    };
    var Collapse = function(element,options) {
        this.$element = $(element);
        this.options = $.extend({},opt,options)
    };
    Collapse.prototype = {
        constructor: Collapse,
        show: function() {
            this.$element.removeClass('collapse');
            var height = this.$element[0].scrollHeight;
            console.log(height);
            this.$element.height(0);
            this.$element[0].offsetWidth;
            this.$element.addClass('collapsing').height(height);
            var $el = this.$element;
            this.$element.one('transitionend',function() {
                $el.removeClass('collapsing').addClass('collapse in');
            });

            console.log('show');
        },
        hide: function() {
            this.$element.removeClass('collapse').removeClass('in');
            var height = this.$element[0].scrollHeight;
            this.$element.height(height);
            this.$element[0].offsetWidth;
            this.$element.height(0).addClass('collapsing');
            var $el = this.$element;
            this.$element.one('transitionend',function() {
                $el.removeClass('collapsing').addClass('collapse');
            });
            console.log('hide');
        },
        transition: function() {

        },
        toggle: function() {
            this[this.$element.hasClass('in') ? 'hide' : 'show']();
            console.log('toggle');
        }
    };
    $.fn.collapse = function(options) {
        return this.each(function() {
            var collapse,$el;
            $el = $(this);
            if($el.data('collapse')) {
                collapse = $el.data('collapse');
            } else {
                collapse = new Collapse($el,{});
                $el.data('collapse',collapse);
            }
            if(typeof options === 'string') {
                collapse[options]();
            }

        });

    }
})(jQuery,window,document);