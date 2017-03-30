var my = require('./my');
Array.prototype.reduce = my.reduce;
Array.prototype.every = my.every;
Array.prototype.map = my.map;
Array.prototype.forEach = my.forEach;

var a = [1,2,3,1,3,45,6];
var b = a.forEach(function(value,index){return value});
console.log(b);
var c = a.map(function(x){return x});
console.log(c);
var d = a.every(function(x){return x<4});
console.log(d);
var e = a.reduce(function(x,y){return x+y});
console.log(e);

