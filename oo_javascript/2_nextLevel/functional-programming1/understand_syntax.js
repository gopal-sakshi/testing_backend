const curry23 = fn => (...args) => fn.bind(null, ...args);          // curry23 ===> just calls/invokes the 1st argument that it received.... fn();
// curry23 can also be written like this
const curry23Explained = function(fn) {
    return function(...args) {
        var blah= fn.bind(null, ...args);
        return blah;
    }
}
/****************************************************************** */


/****************************************************************** */
const fn22 = (...args) => args.length;
const trace = curry23Explained(fn22);
console.log(trace(2,3));
console.log(trace(2, 3, 4, 33, 66, 12)());                              // 6 arguments
console.log(curry23Explained(fn22)(55,66,77,88,99)());                  // 5 arguments

/****************************************************************** */
// const understandSyntax1 = curry23('blah1', 'blah2');
// understandSyntax1();

// /***********************************************************************************/

// const add23 = x => y => {
//     console.log(`1st argument ===> `, x);
//     console.log(`2nd argument ===> `, y);
//     return x+y;
// };

// const temp1 = add23(5)(2);
// console.log(temp1);
// /***********************************************************************************/