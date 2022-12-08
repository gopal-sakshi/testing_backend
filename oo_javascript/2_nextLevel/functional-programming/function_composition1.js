const toSlug1 = input => encodeURIComponent(
    input.split(' ')
        .map(str => str.toLowerCase())
        .join('-')
);

console.log(toSlug1('Gonzalo Higuain'));
/************************************************************************************************* */

// Some of the operations =====> split(), toLowerCase(), join(), etc
    // Imagine if each of these operations had a corresponding composable function.
    // some of these functions are available in npmjs module 'lodash/fp' ===> lodash/functionalProgramming
const curry = fn => (...args) => fn.bind(null, ...args);
const map = curry((fn, arr) => arr.map(fn));
const join = curry((str, arr) => arr.join(str));
const toLowerCase = str => str.toLowerCase();
const split = curry((splitOn, str) => str.split(splitOn));

const toSlug2 = input => encodeURIComponent(
    join('-')(
      map(toLowerCase)(
        split(' ')(
          input
        )
      )
    )
);
  
console.log(toSlug2('Karim Benzema'));
/************************************************************************************************* */

// toSlug2 ===> looks like a lot of nesting... and its a bit confusing to read. 
    // We can flatten the nesting with a function that will compose these functions for us
    // meaning that it will take the output from one function and automatically patch it to the input of the next function
    // so, we will write toSlug3
    // // order of function execution =====> right to left

const compose23 = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

const toSlug3 = compose23(
    encodeURIComponent,
    join('-'),
    map(toLowerCase),
    split(' ')
);
  
console.log(toSlug3('Cristiano Ronaldo'));
/************************************************************************************************* */

// we use reduce, instead of reduceRight
    // order of function execution =====> left to right

const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

const toSlug4 = pipe(
    split(' '),
    map(toLowerCase),
    join('-'),
    encodeURIComponent
);
/************************************************************************************************* */

const trace = curry((label, x) => { console.log(`== ${ label }:  ${ x }`); return x; });

const toSlug5 = pipe(
    trace('input'),
    split(' '),
    map(toLowerCase),
    trace('after map'),
    join('-'),
    encodeURIComponent
);
console.log(toSlug5('JS Cheerleader'));
/*************************************************************************************************/

