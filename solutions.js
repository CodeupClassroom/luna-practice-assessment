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

//1
function isTrue(input) {
    return input === true;
}

//2
function isFalse(input) {
    return input === false;
}

//3
function not(input) {
    return !input === true;
}

//4
function addOne(input) {
    return parseFloat(input) + 1;
}

//5
function isEven(input) {
    return input % 2 == 0;
}

//6
function isIdentical(input1, input2) {
    return input1 === input2;
}

//7
function isEqual(input1, input2) {
    return input1 == input2
}

//8
function or(input1, input2) {
    return input1 || input2;
}

//9
function and(input1, input2) {
    return input1 && input2;
}

//10
function concat (input1, input2) {
    return ("" + input1 + input2);
}