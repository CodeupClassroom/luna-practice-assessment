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
function isTrue(anyInput) {
   if (anyInput === true) {
       return true;
   } else {
       return false
   }
}

function isFalse(inputProvided) {
    if (inputProvided === false) {
        return true;
    }   else {
        return false;
    }
}

function not(anyInput2) {
        return !(anyInput2);
}

function addOne(singleInput) {
        return Number(singleInput) + 1
}

function isEven(singleInput2) {
    return singleInput2 % 2 == 0;
// https://stackoverflow.com/questions/6211613/testing-whether-a-value-is-odd-or-even
}

function isIdentical(input1, input2) {
    if(input1 === input2) {
        return true;
    } else {
        return false;
    }

}

function isEqual(inputX, inputY) {
    if (inputX == inputY) {
        return true;
    } else {
        return false;
    }

}

function or(inputA, inputB) {
    return (inputA || inputB);
}

function and(inputC, inputD) {
    return (inputC && inputD);
}

function concat(inputE, inputF) {
    return "" + inputE + inputF
}