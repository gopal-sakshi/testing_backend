// const fn1 = (x, ...nums, a, b) => {                  // ERROR = rest params MUST always be last argument to a function
//     return {
//         firstParam: x,
//         secondParam: nums,
//         otherParams: a+b
//     }
// };


const fn2 = (x, a, ...nums) => {
    return {
        firstParam: x,
        secondParam: a,
        otherParams: nums
    }
};

var result22 = fn2('gopal', 33, 'software', 'hardware', '3rd elem in array');       // all 3rd, 4th, 5th params ===> will become array
console.log(result22);