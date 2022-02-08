let a1, b1, rest1;
[a1, b1] = [10, 20];
console.log(a1); // 10
console.log(b1); // 20

/**************************************************************************************** */
let a2, b2, rest2
[a2, b2, ...rest2] = [10, 20, 30, 40, 50];
console.log(a2); // 10
console.log(b2); // 20
console.log(rest2); // [30, 40, 50]

/**************************************************************************************** */
let a3,b3,rest3
({ a3, b3 } = { a: 10, b: 20 });
console.log(a3); // 10
console.log(b3); // 20

// Stage 4(finished) proposal
let a4,b4,rest4
({a4, b4, ...rest4} = {a: 10, b: 20, c: 30, d: 40});
console.log(a4); // 10
console.log(b4); // 20
console.log(rest4); // {c: 30, d: 40}

/**************************************************************************************** */

const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y); // 1
console.log(z); // 2

/**************************************************************************************** */
let list22 = ['gopal', 'sakshi', 'priya'];
const [firstElement, secondElement] = list22;
// is equivalent to:
// const firstElement = list[0];
// const secondElement = list[1];
console.log(firstElement,secondElement);


/**************************************************************************************** */

const foo = ['one', 'two', 'three'];

const [red, yellow, green] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three"

/**************************************************************************************** */

let a5 = 1;
let b5 = 3;

[a5, b5] = [b5, a5];
console.log(a5); // 3
console.log(b5); // 1

/**************************************************************************************** */