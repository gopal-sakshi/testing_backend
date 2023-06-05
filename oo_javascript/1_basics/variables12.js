/*

CONST

const a = [1,2];
a[10] = 11;

const dessert = { type: 'icecream', cost: 200 };
const tmp1 = dessert;
tmp1.type = 'lassi';

****************************************

`Scoping rules`
- Variables declared by var are scoped to the ===> immediate function body (hence the function scope) 
- Variables declared by let are scoped to the ===> immediate enclosing block denoted by { } (hence the block scope).

`Hoisting`
- variables declared with var keyword are hoisted (initialized with undefined)
- let variables are not initialized until their definition is evaluated

`Creating global object property`
- At the top level, let, unlike var, does not create a property on the global object:
- const & let statements DO NOT get defined on the window object
- see <const_let.js>

`Redeclaration`
- var will let you re-declare the same variable in the same scope 
- while let raises a SyntaxError.
****************************************

*/