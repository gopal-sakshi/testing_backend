// minimize function object allocation


/*

a) In JS, functions = 1st class objects
b) object allocations = very taxing/burdensome/heavy on performance
    particularly function object allocations
c) In JS, garbage collector wont sit idle... 
    it is constantly looking for unused objects so that they can be deallocated. 
    more memory you use in JS ====> the more CPU is being used to power garbage collector


If you have a function 
- which contains code declaring another function, 
- then every call to the parent function will create new unique function objects
- despite having the same code.

*/


/*********************************************************/

function trimStart(r) {
	return r.replace(/^\s+/g, "");
}

function trimEnd(r) {
	return r.replace(/\s+$/g, "");
}

function trim(r) {
	return trimEnd(trimStart(r));           //  \s  = space character in regex
}

let str1 = '  open with spaces.. end with spaces, tabs - they get removed     ';

var resp1 = trim(str1);
console.log(resp1);
/*********************************************************/

const v8 = require('node:v8');
// const stream = v8.getHeapSnapshot();
// stream.pipe(process.stdout); 


function trim23(n) {
    return function trimEnd23(n) {
		return n.replace(/\s+$/g, "")
	}(function trimStart23(n) {
		return n.replace(/^\s+/g, "")
	}(n))
}
var resp2 = trim23(str1);
console.log(resp2);


/*
    README
    a) every time trim23() function is called 
    b) two unnecessary function objects are created 
        to represent the functions trimStart23 and trimEnd23
    c) These function objects are unnecessary

*/
const blah = v8.getHeapSpaceStatistics();
console.log(blah);

/*
    read_only_space
    old_space
    code_space
    map_space
    large_object_space
    code_large_object_space
    new_large_object_space
    new_space
*/