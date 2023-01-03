function foo2() { 
    let x = y = z = w = 0;
    // Assignment in Javascript is from right to left... So, it effectively translates to 
    // x = (y = (z = (w = 0)));                     // which effectively translates to 
    // let x = (global.y = (global.z = (global.w = 0)))
    x++; y++; z++; w++; return x;

    // understand like this...
    // let a = b = 0;           // b is a global variable... since it has no keyword immediately before it.
                                    // Don’t let the "let" keyword fool you

                                // Any variables that don’t have a keyword before it is a global variable.
}

console.log(foo2());
console.log(typeof x);
// console.log(x);
console.log(y);
console.log(z);
console.log(w);
console.log(typeof y);

