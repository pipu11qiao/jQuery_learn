/**
 * Created by Administrator on 2016/9/4.
 */

/* 简单模拟一下队列回调函数 运用闭包的方法 */

var subjectAlice = (function() {
    var def = $.Deferred();
    var task = function() {
        def.resolve('Alice');
    };

    setTimeout(task,3000);

    return def.promise();
})();

var subjectTom = (function() {
    var def = $.Deferred();
    var task = function() {
        def.resolve('Tom');
    };

    setTimeout(task,2000);

    return def.promise();
})();

function fn1(content1,content2) {
    console.log('fn1: ' + content1 + ' ' +  content2);
}

function fn2(content1,content2) {
    console.log('fn2: ' + content1 + ' ' +  content2);
}

$.when(subjectAlice,subjectTom)
.done(fn1)
.done(fn2);


