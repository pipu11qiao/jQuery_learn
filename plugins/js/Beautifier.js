//-->> Created by pipu on 2017/2/13.

// 第一种写法 运用构造函数
/*
;(function($,window,document) {
    var Beautifier = function(elem,opt) {
        this.$element = elem;
        this.default = {
            color: 'red',
            fontSize: '20px'
        };
        this.option = opt || {};
    };
    Beautifier.prototype.beautify = function() {
        var option = $.extend(this.default,this.option);
        this.$element.css(option);
    };
    $.fn.myPlugin = function(option) {
        console.log(this);
        console.log(this.constructor);
        var beautifer = new Beautifier(this,option);
        beautifer.beautify();
        return beautifer.$element;
    }
})(jQuery,window,document);
*/

// 第二种写法
;(function($,window,document) {
    var defaultOption = {
        color: 'red',
        fontSize: '20px'
    };
    $.fn.myPlugin = function(option) {
        option = option || {};
        //$.extend(defaultOption,option) 这种写法会改变defaultOption的值
        option = $.extend({},defaultOption,option);
        console.log(this);
        return this.each(function() {
            $(this).css(option);
        });
    }
})(jQuery,window,document);