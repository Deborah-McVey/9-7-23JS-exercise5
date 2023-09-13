/* Exercise #5
Objective: Implement a Function Factory using Closures.

Instructions:

Design a function that accepts a parameter.
The function should return another function that uses the parameter in some way. */

function functionFactory(param) {
    return function(name) {
        return `${name} ${param}`;
    };
}

let exampleOne = functionFactory('are for reading!');
let exampleTwo = functionFactory('are for eating!');

console.log('exampleOne:', exampleOne('Books')); // exampleOne: Books are for reading!
console.log('exampleTwo:', exampleTwo('Forks')); // exampleTwo: Forks are for eating!