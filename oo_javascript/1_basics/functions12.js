/*

arguments property inside arrowFn point to arguments of outerFn
arguments property inside any regularFn point to arguments of that regularFn itself
cant use arrow function with new keyword

name, length, toString() ====> attributes of functionObject
---------------------------------------------------

declaration vs expression vs constructor

it if starts with function keyword ===> then its function declaration
    ending may be + 1 or something... doesnt matter
function declarations are useful to create standalone functions
function expressions are good as callbacks.
function declaration creates a function variable 
    — a variable with the same name as the function name
function expression can have its own customName as function name
    - we can assign anononymous functions (or) some functionNames to function Expression
    - functionNames ===> useful in recursion

const fe1 = (a,b) => a*b;
const fe2 = function (a,b) { return a+b; } 
const fe3 = function jingChak(a,b) { return a-b; }
jingChak is local to fe3; cant be used outside

function declarations ===> hoisted
function expressions ====> not hoisted

IIFEs ===> need to wrapped inside round brackets
Function expressions as IIFE ===> no need to be wrapped in

see objectLiteral vs constructor
- constructor = new keyword... will have target property
---------------------------------------------------

higher order functions = functions that accept another function as parameter
- allows composability of functions.
first order functions = function that accept number/strings/boolean/objects as parameter

JS doesnt support function overloading... 2nd definition will overwrite 1st definition
use Typescript instead


REST vs SPREAD

REST in functions
- must be last argument
- used in variadic functions

REST in destructuring (rest operator on LHS side)
const { name, age, ...address } = { name: 'gop', age:'34', city:'hyd', country:'ind' }
const [ name, age, ...address ] = ['gop', '34', 'hyd', 'ind' ];

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

spread operator (...) helps you expand iterables into individual elements
- iterable = string as characters; array as individual elements


rest_vs_spread
- rest will simply make extra arguments as oneUnit and store it in anotherObject/anotherArray
- spread ===> simply spread/expand the iterables

*/