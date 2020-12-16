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

function isTrue(x) {
  return x === true;
}

function isFalse(x) {
    return x === false;
}

function isEven(x) {
    x = Number(x);
    return x === 0 || !!(x && !(x%2));
}

function addOne(x) {
    x = Number(x);
    return x + 1
}

function isEqual(x, y) {
    x = parseInt("x");
    return x  == true;
}

function not(x) {
    if (x !== null) return true;
    if (x !== Number) return false;
}

function isIdentical(x, y) {
    if (x === y) return true;
    if (x == null || y == null) return false;
    if (x.length !== y.length) return false;
    if (x == Number || y == Number) return true;
}

function and(x) {
    if (x == true && true) return true;
    if (x == true && false) return  false;
}

function concat(x) {

}

function or(x) {
    if(x == true || false) return true;
    if(x == false || false) return false;
}