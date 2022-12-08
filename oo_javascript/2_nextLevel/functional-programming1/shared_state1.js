// With shared state, the order in which function calls are made // changes the result of the function calls.
const x = {val: 2};
const x1 = () => x.val = x.val + 1;
const x2 = () => x.val = x.val * 2;

x1();
x2();

console.log(x.val);                 // 6
/**************************************************************************************** */

const y = { val: 2 };

const y1 = () => y.val += 1;
const y2 = () => y.val *= 2;

y2();
y1();

console.log(y.val);                 // 5
/**************************************************************************************** */

// When you avoid shared state, 
    // the timing and order of function calls don’t change the result of calling the function. 
    // With pure functions, given the same input, you’ll always get the same output. 
    // This makes function calls completely independent of other function calls, which can radically simplify changes and refactoring. 
    // A change in one function, or the timing of a function call won’t break the program

// shared_state1.js =======> using shared state
// shared_state2.js =======> not using shared state... functional programming
/********************************************************************************************************* */