/**
 * Created by Administrator on 2016/9/4.
 */

/* 简单模拟一下队列回调函数 运用闭包的方法 */
function Callbacks(option) {
    var once = option === 'once';
    var list = [];
    return {
        add:function(fun) {
            if(list){
                list.push(fun);
            }
        },
        remove:function(fun) {
            if(list) {
                var position = list.indexOf(fun);
                if(position >= 0){
                    list.splice(position,1);
                }
            }
        },
        fire:function (args){
            if(list) {
                for(var i = 0,l = list.length; i < l; i++) {
                    var fun = list[i];
                    fun(args)
                }
            }

            if(once){
                list = undefined;
            }
        }
    }
}


function fun1(args) {
    console.log('fun1: ' + args);
}
function fun2(args) {
    console.log('fun2: ' + args);
}

var callbacks = Callbacks('once');

callbacks.add(fun1);
callbacks.fire('giraffe');

callbacks.add(fun2);
callbacks.fire('rhinoceros');

callbacks.remove(fun1);
callbacks.fire('peacock');
/*  The falgs argument is an optional arguments to $.Callbacks(), structured as a list of space-seprarated strings that change
 how the call back list behaves (eg.$.Callbacks( " unique stopOnFalse")). */

