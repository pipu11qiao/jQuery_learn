//-->> Created by pipu on 2016/12/28.

// 用正则quickExpr 检测参数selector 是否是稍微复杂一些的HTML 代码（如“abc<div>”）或#id

// A simple way to check for HTML strings or ID strings
// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
var quickExpr = /^(?:[^ # <]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/;

// + ->  量词  大于等于1次   * -> 量词 任意次   . ->  通配符 匹配除了换行符之外的任意单字符
//正则quickExpr 包含两个分组，依次匹配HTML 代码和id。如果匹配成功，则数组
//match 的第一个元素为参数selector，第二个元素为匹配的HTML 代码或undefined，第三个
//元素为匹配的id 或undefined。下面的例子测试了正则quickExpr 的功能：

//quickExpr.exec( '#target' ); // ["#target", undefined, "target"]
//quickExpr.exec( '<div>' ); // ["<div>", "<div>", undefined]
//quickExpr.exec( 'abc<div>' ); // ["abc<div>", "<div>", undefined]
//quickExpr.exec( 'abc<div>abc#id' ); // ["abc<div>abc#id", "<div>", undefined]
//quickExpr.exec( 'div' ); // null
//quickExpr.exec( '<div><img></div>' ); // ["<div><img></div>", "<div><img>
//</div>", undefined]

// reg.exec 用于检索字符串中的这则表达式的匹配
// 返回  返回一个数组，其中存放匹配的结果。如果未找到匹配，则返回值为 null。
/*
exec() 方法的功能非常强大，它是一个通用的方法，而且使用起来也比 test() 方法以及支持正则表达式的 String 对象的方法更为复杂。

如果 exec() 找到了匹配的文本，则返回一个结果数组。否则，返回 null。
此数组的第 0 个元素是与正则表达式相匹配的文本，
第 1 个元素是与 RegExpObject 的第 1 个子表达式相匹配的文本（如果有的话），
第 2 个元素是与 RegExpObject 的第 2 个子表达式相匹配的文本（如果有的话），
以此类推。除了数组元素和 length 属性之外，exec() 方法还返回两个属性。
index 属性声明的是匹配文本的第一个字符的位置。input 属性则存放的是被检索的字符串 string。
我们可以看得出，在调用非全局的 RegExp 对象的 exec() 方法时，返回的数组与调用方法 String.match() 返回的数组是相同的。
但是，当 RegExpObject 是一个全局正则表达式时，exec() 的行为就稍微复杂一些。
它会在 RegExpObject 的 lastIndex 属性指定的字符处开始检索字符串 string。
当 exec() 找到了与表达式相匹配的文本时，在匹配后，它将把 RegExpObject 的 lastIndex 属性设置为匹配文本的最后一个字符的下一个位置。这就是说，您可以通过反复调用 exec() 方法来遍历字符串中的所有匹配文本。当 exec() 再也找不到匹配的文本时，它将返回 null，并把 lastIndex 属性重置为 0。
    */

//判断一个字符串中的‘m’的个数还有位置  用exec
//var reg1 = /(m)|(n)/;
//var string1 ='md;sfk;safn';
//var string2 ='<div><img></div>';
//
//var result1;
//result1 = reg1.exec(string1);
//console.log(result1);


// Match a standalone tag   <div>   <div></div>    <br/>
var rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;
// HTML 代码中不能含有的标签定义在正则rnocache 中，该正则的定义代码如下所示：
var rnocache = /<(?:script|object|embed|option|style)/i;
// checked="checked" or checked
var rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i;
// 用正则rhtml 检测HTML 代码中是否含有标签、字符代码或数字代码，
var rhtml = /<|&#?\w+;/;
var rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig;


var result;
var string1 = '<script>';
result = rnocache.exec(string1);
console.log(result);

