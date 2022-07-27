// APPROACH I ----------->  Default Constructor
var array1 = new Array();
array1.push('gopal');
array1.push('priya');
/**************************************************************************************** */

// APPROACH II ----------> Parameterized Constructor
var element1 = 'gopal';
var element2 = 'priya';
var array2 = new Array(element1, element2, 'sahasra');
/**************************************************************************************** */

// APPROACH III ----------> Array literal
var array3 = ['gopal', 'priya', 'sahasra'];

console.log(array1);
console.log(array2);
console.log(array3);
/**************************************************************************************** */

// APPROACH IV --------> another way
var arrLength = 5;
var array4 = [];
for(let i=0; i<arrLength; i++) {
    array4.push(i);
}
console.log(array4);