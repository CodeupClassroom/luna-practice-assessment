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
// 1
function isTrue (input){
    return input === true;
}
isTrue();

//2
function  isFalse (input1) {
    return input1 === false;
}
isFalse();

//3
function not(input3) {
    return !input3 === true;
}
not();

//4
function addOne (input4) {
    return ++input4;
}
addOne();

//5

function isEven (input5){
    return (input5 % 2 == 0);
}
isEven();

//6

function isIdentical (input6, input7) {
    return input6 === input7;
}
isIdentical();

//7
function isEqual (input8, input9) {
    return input8 == input9;
}
isEqual();

//8
 function or(input10, input11) {
     return input10 || input11;
 }
 or();

 //9
function and(input12, input13) {
    return input12 && input13;
}
and();

//10
function concat (input14, input15) {
    return input14 + "" + input15;
}
concat();