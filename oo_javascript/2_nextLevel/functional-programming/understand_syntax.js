// const curry23 = fn => (...args) => fn.bind(null, ...args);          // curry23 ===> just calls/invokes the 1st argument that it received.... fn();
// const understandSyntax1 = curry23('blah1', 'blah2');
// understandSyntax1();

/***********************************************************************************/

const add23 = x = y => {
    console.log(`1st argument ===> `, x);
    console.log(`2nd argument ===> `, y);
    return x+y;
};

const temp1 = add23(5);
console.log(temp1(2));
