//-->> Created by pipu on 2016/12/22.
;(function(window,undefined){
    //构造jQuery对象
    var jQuery = (function () {
        var jQuery = function (selector, context) {
                return new jQuery.fn.init(selector, context, rootjQuery);
            };
        //一对局部连梁申明
        jQuery.fn = jQuery.prototype = {
            constructor: jQuery,
            init: function(selector,context,rootjQuery) {}
        };
        jQuery.fn.init.prototype = jQuery.fn;
        jQuery.extend = jQuery.fn.extend = function() {};
        jQuery.extend({
            //一对静态属性和方法
        });
        return jQuery;
    })();
    //工具方法 Utileities
    //回调函数列表 Callback Object
    //异步队列 Deferred Object
    //浏览器功能测试 Support
    //数据缓存 data
    //队列 Queue
    //属性操作 Attributes
    //时间系统 Events
    //选择器 sizzle
    //DOM 遍历 Tranversing
    //DOM 操作 Manipulation
    //样式操作 css(计算样式，内联样式)
    //异步请求 Ajax
    //动画 Effects
    //坐标  offest、尺寸 Dimensions

    window.jQuery = window.$ = jQuery;
})(window);
//传入window 不需要讲作用域链会退到顶层作用域，从而可以更快地访问window对象。
//可以在压缩代码的时候对齐进行压缩。
var fn = {
    init: function (selector,context,rootjQuery) {
        var match,elem,ret,doc;
    }
};
// selector 可以是任意类型的值，但只有undefined，DOM元素，字符串、函数
//jQuery对象、普通javascript对象这几种类型的数据是有效的，其他类型的值可以寄售但没有意义
