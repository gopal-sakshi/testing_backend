/* 
   Write a mul function which behaves like below
   mul(1)(1)(1)(1)(1)();            return 5 
*/

const mul = (x) => {
    return function jc (y) {
        if(typeof y != 'undefined') {
            return mul(x+y);
        } else {
            return x;
        }        
    }
}

var blah1 = mul(1)(4)(5);
console.log(blah1);
/**********************************************************************************/

function addNum(x) {
    return function(y) {
        if (typeof y !== 'undefined') {
            x = x + y;
            return arguments.callee;
        } else {
            return x;
        }
    }
}
console.log( addNum(1)(2)(3)() );
/**********************************************************************************/