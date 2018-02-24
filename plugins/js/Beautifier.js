//-->> Created by pipu on 2017/2/13.

// ��һ��д�� ���ù��캯��
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

// �ڶ���д��
;(function($,window,document) {
    var defaultOption = {
        color: 'red',
        fontSize: '20px'
    };
    $.fn.myPlugin = function(option) {
        option = option || {};
        //$.extend(defaultOption,option) ����д����ı�defaultOption��ֵ
        option = $.extend({},defaultOption,option);
        console.log(this);
        return this.each(function() {
            $(this).css(option);
        });
    }
})(jQuery,window,document);