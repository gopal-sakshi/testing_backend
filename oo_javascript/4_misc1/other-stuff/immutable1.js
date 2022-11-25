/*
    A mutable object 
    - an object whose state can be modified or changed over time. 
    - Arrays and Objects Are Mutable

    
    An immutable object
    - is an object whose state cannot be modified after it is created.
    - string & numbers are immutable data types
    - No string operations modify the string they operate on in JavaScript.
    - Numbers are immutable because you can’t change its value. 
        you can’t literarily change the value of 7 to 8. That doesn’t make sense. Instead, you can change the value stored in the variable x
    - Keeping the state immutable can help you in terms of performance, predictivity, better mutation tracking.
    
*/


var myString = "I am immutable";
console.log(myString);                      // O/P ====> I am immutable
myString[2] = 'c';
console.log(myString);                      // O/P is still ====> I am immutable....

var num1 = 4;
num1++;
console.log(num1);


var x = { foo: 'bar' };
var  y = x;
console.log(y.foo); 
x.foo = 'Something else';
console.log(y.foo); // Something else
console.log(x === y) // true
// Both x & y are references to the same item