//-->> Created by pipu on 2017/3/5.
//文档坐标和视口坐标
/*
* 无论在何种情况下，当讨论元素的位置时，必须弄清楚所使用的坐标是文档坐标还是视口坐标。 视口坐标有时也叫作窗口坐标
*
* 一般来说要在梁总坐标系之间互相转换，必须加上或减去滚动的偏移量，。文档坐标鼻屎口坐标更加基础，并且在用户滚动时他
* 们不会发生变化。 为了坐标系之间互相转换，我们需要判定浏览器窗口的滚动条位置。
* */
// 查询窗口滚动调的位置。

function getScrollOffset(w) {
    // 使用指定的窗口，若果不带参数则使用当前窗口
    w = w || window;
    // 除了IE8及更早的版本以外，其他浏览器都能用
    if(w.pageXOffset != null) return {x: w.pageXOffset, y: w.pageYOffset};

    // 对标准模式下的IE
    var d = w.document;
    if(document.compatMode == 'CSS1compat')
        return {x: d.documentElement.scrollLeft,y: d.documentElement.scrollTop};
    //对怪异模式下的浏览器
    return {x: d.body.scrollLeft, y: d.body.scrollTop};
}
// 查询窗口尺寸
function getViewportSize(w) {
    w = w || window;

    if(w.innerWidth != null) return {w: w.innerWidth, h: w.innerHeight};

    // 标准模式下的IE
    var d = w.document;

    if(d.compatMode == 'CSS1Compat') return {w: d.documentElement.clientWidth, h: d.documentElement.clientHeight}

    return {w: d.body.clientWidth, h: d.body.clientHeight};
}