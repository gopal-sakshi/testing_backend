// A classic application of closures is to hide variables.

/******************************************************************************************* */
let i = 0;
function increase1() {
    i++;
    // console.log(`courrent counter is ${i}`);
    return i;
}

increase1();
increase1();
increase1();

// It can be written in this way, but there will be one more variable i in the global scope, which is not good.

/******************************************************************************************* */


let increase2 = (function() {
    let i = 0
    return function() {
        i++;
        console.log(`counter is ${i}`);
        return i;
    }
})();
  
increase2();
increase2();
var finalResult = increase2();
console.log(finalResult);

// This way, the variable i is hidden in the local scope and does not pollute the global environment.