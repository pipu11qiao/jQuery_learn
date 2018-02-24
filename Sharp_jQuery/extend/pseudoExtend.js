/**
 * Created by Administrator on 2016/9/14.
 */
$ = function() {
    var copyIsArray,
        toString = Object.prototype.toString,
        hasOwn = Object.prototype.hasOwnProrty,

        class2type = {
            '[object Boolean]': 'boolean',
            '[object Number]': 'number',
            '[object String]': 'string',
            '[object Function]': 'function',
            '[object Array]': 'array',
            '[object Date]': 'date',
            '[object RegExp]': 'regExp',
            '[object Object]': 'object'
        },
        type = function (obj) {// 用来检测对象类型的方法
            return obj == null ? String(obj) : class2type[toString.call(obj)] || 'object';
        },
        isWindow = function (obj) {// 判断是否是 window 对象
            return obj && typeof obj === 'object' && 'setInterval' in obj;
        },
        isArray = Array.isArray || function (obj) {// 判断是否是 数组
                return type(obj) === 'array'
            },
        isPlainObject = function (obj) {
            if(!obj || type(obj) !== 'object' || obj.nodeType || isWindow(obj)) {
                return false;
            }
            if(obj.constructor && !hasOwn.call(obj,'constructor')
            && !hasOwn.call(obj.constructor.prototype,'isPrototypeOf')) {
                return false;
            }
            var key;
            for(key in obj) {

            }
            return key === undefined || hasOwn.call(obj,key);
        },
        extend = function(deep,target,options) {
            for(name in options) {
                src = target[name];
                copy = options[name];

                if(target === copy) {continue;}

                if(deep && copy && (isPlainObject(copy)) || (copyIsArray = isArray(copy))) {
                    if(copyIsArray) {
                        copyIsArray = false;
                        clone = src && isArray(src) ? src : [];
                    } else {
                        clone = src && isPlainObject(src) ? src : {};
                    }

                    target[naem] = extend(deep,clone,copy);
                } else if(copy !== undefined) {
                    target[name] = copy;
                }
            }
            return target;
        };
    return {extend:extend}

}();