
'use strict';
var arr=["red","blue","green","orange"];



var last=arr[arr.length-1];
Object.defineProperty(arr,'last',
{get:function(){return this[thihs.length-1];}});



var color=["Guava","Watermelon","Papaya","Kiwi"]

Object.defineProperty(Array.prototype,'last',{get:function(){return this [this.length-1];}});

console.log(arr.last);
console.log(color.last);