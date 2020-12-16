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

function isTrue(input) {
   return input === true;
}
console.log(isTrue(true));
console.log(isTrue(false));
console.log(isTrue(null));
console.log(isTrue(0));
console.log(isTrue("true"));
console.log(isTrue("banana"));
console.log(isTrue([1, 2]));

function isFalse(input) {
    return input === false;
}
console.log(isFalse(false));
console.log(isFalse(true));
console.log(isFalse(0));
console.log(isFalse(null));
console.log(isFalse(""));
console.log(isFalse("banana"));
console.log(isFalse([1, 2]));

function not(input) {
    return !input;
}
console.log(not(false));
console.log(not(0));
console.log(not(null));
console.log(not(""));
console.log(not(NaN));
console.log(not(undefined));
console.log(not(true));
console.log(not("something"));
console.log(not(Infinity));
console.log(not(123));

function addOne(input) {
    return ++input;
}

console.log(addOne(0));
console.log(addOne(2));
console.log(addOne(-5));
console.log(addOne(5.789));
console.log(addOne(Infinity));
console.log(addOne("2"));
console.log(addOne("0"));
console.log(addOne("banana"));
console.log(addOne(true));
console.log(addOne(NaN));

function isEven(input) {
    return input % 2 === 0;
}

console.log(isEven(2));
console.log(isEven(-8));
console.log(isEven(0));
console.log(isEven("42"));
console.log(isEven(1));
console.log(isEven("-3"));
console.log(isEven(false));
console.log(isEven("banana"));

function isIdentical(input1, input2) {
    return input1 === input2;
}

console.log(isIdentical(3,3));
console.log(isIdentical(false, false));
console.log(isIdentical("hello", "hello"));
console.log(isIdentical(3, 3.0));
console.log(isIdentical(undefined, undefined));
console.log(isIdentical(2, "2"));
console.log(isIdentical("javascript", "java"));

function isEqual(input1, input2) {
    return input1 == input2;
}

console.log(isEqual(3, "3"));
console.log(isEqual("abc123", "abc123"));
console.log(isEqual(true, 1));
console.log(isEqual(0, false));
console.log(isEqual(4, -5));
console.log(isEqual("java", "javascript"));

function or(input1, input2) {
    return input1 || input2;
}

console.log(or(true, true));
console.log(or(true, false));
console.log(or(false, true));
console.log(or(false, false));
console.log(or("hello", "world"));

function and(input1, input2) {
    return input1 && input2;
}

console.log(and(true, true));
console.log(and(true, false));
console.log(and(false, true));
console.log(and(false, false));
console.log(and("hello", "world"));


//
function concat(input1, input2) {
    return input1 + input2;
}

console.log(concat("code", "up"));
console.log(concat("connect", 4));
console.log(concat("hello", "world"));
console.log(concat(4, 2));
console.log(concat(true, true));