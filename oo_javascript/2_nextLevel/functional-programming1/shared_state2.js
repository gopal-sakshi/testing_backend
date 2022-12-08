// shared_state2.js =======> not using shared state... functional programming

const x = { val: 2 };
const x1 = x => Object.assign({}, x, { val: x.val + 1});    // We pass an empty object as the first parameter to copy the properties of x "instead of mutating it in place"
const x2 = x => Object.assign({}, x, { val: x.val * 2});            // we create copies of existing state instead of using mutations

// console.log(x1(x2(x)).val);                 // calling x2() first... the result of which is passed to x1()
// (OR) 
var temp1 = x2(x);
var temp2 = x1(temp1);
console.log(temp2);
/*************************************************** */
const y = { val: 2 };

x2(y);
x1(y);
console.log(x1(x2(y)).val);             // Because the functions don't mutate, you can call these
                                            // functions as many times as you want, in any order, 
                                            // without changing the result of other function calls.


// Of course, if you change the order of the composition, the output will change. 
    // Order of operations still matters.                   x1(x2(y))   isNotEqualTo        x2(x1(y))
    // f(g(x)) is not always equal to g(f(x)), 
    // but what doesn't matter anymore is what happens to variables outside the function — and that's a big deal. 
// With impure functions, it's impossible to fully understand what a function does unless you know the entire history of every variable that the function uses or affects
// If we remove "function call timing dependency", and you eliminate an entire class of potential bugs.

