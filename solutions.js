"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

function isTrue(){
    return isTrue == true;
}

function isFalse(){
    return isFalse === false;
}

function not(anyInput){
    var anyInput = !anyInput;
       return anyInput == !anyInput;
}

function addOne(x){
    var x =+ 1;
    return x;
}

function isEven(x){
    var x = x % 2;
    return x >= 0;
}

function isIdentical(x, y){
var x;
var y;
    return (x === true) && (y === true);
}

function isEqual(x,y){
    return x == y;
}

function or(x, y){
    var x;
    var y;
    return x == true || y == true;
}

function and(x, y){
    var x;
    var y;
    return x === true && y === true;
}

function concat(x, y){
    var x;
    var y;
    return "x" + "y";
}