var arr1 = [1,2,1,3,1,2,1,4,1,3,4,1,6];
let set23 = new Set(arr1);          // set WONT have duplicates
var arr2 = [...new Set(set23)];
console.log(" new Arr ===> ", [...new Set(set23)]);

/*
    DONT USE IN BUILT METHODS & write your own code
    - first we have to sort the Array... 
    - then remove duplicates
*/

let s1 = new Set([1,1,2]);
let newArr = [...new Set(s1)];
console.log(newArr)