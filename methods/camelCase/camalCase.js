//-->> Created by pipu on 2017/2/16.
var string = 'background-color';
// jQuery
var rdashAlpha = /-([a-z])/ig;
var fcamelCase = function(all,letter) {
    return letter.toUpperCase();
};

var camelCase = function(str) {
    return str.replace(rdashAlpha,fcamelCase)
};
console.log(camelCase(string));

var reg = /([a-z])-([a-z])/ig;
