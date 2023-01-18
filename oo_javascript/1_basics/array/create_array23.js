// Array(5) gives you an array with length 5 but no values, hence you can't iterate over it.

// Array.apply(null, Array(5)).map(function () {}) gives you an array with length 5 and undefined as values, now it can be iterated over.

// Array.apply(null, Array(5)).map(function (x, i) { return i; }) gives you an array with length 5 and values 0,1,2,3,4.

// Array(5).forEach(alert) does nothing, Array.apply(null, Array(5)).forEach(alert) gives you 5 alerts

// ES6 gives us Array.from so now you can also use Array.from(Array(5)).forEach(alert)

// If you want to initialize with a certain value, these are good to knows...
// Array.from('abcde'), Array.from('x'.repeat(5))
// or Array.from({length: 5}, (v, i) => i)   // gives [0, 1, 2, 3, 4]


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from


// ----------------------------------------------------------------------------

var arr11 = Array.from('abcde');
console.log(arr11);                                                         // [ 'a', 'b', 'c', 'd', 'e' ]
var arr12 = Array.from('x'.repeat(5));
console.log(arr12);                                                         // [ 'x', 'x', 'x', 'x', 'x' ]
var arr13 = Array.from({length: 5}, (v, i) => i);  
console.log(arr13);                                                         // [ 0, 1, 2, 3, 4 ]
var arr14 = Array.from({length: 6}, (v, i) => i*i)   
console.log(arr14);                                                         // [ 0, 1, 4, 9, 16, 25 ]
var arr15 = Array.from({length: 6}, (v,i) => v);                            // [undefined, undefined, ... 6 times]   
console.log(arr15)
var arr16 = Array.from("gopal", (v,i) => v+'__');
console.log(arr16);

const range23 = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
console.log(range23(0,5,1));
console.log(range23(0,10,1.5));

/************************************************************************************ */
// Array.from(arrayLike, function (element, index) { /* … */ }, thisArg);

    // arrayLike = "gopal",         [a,b,c]     (or) any iterable
    // each element in iterable is passed to fn (elem, index) function
    // supply thisArg if needed