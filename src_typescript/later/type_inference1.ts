var a122 = "some text";
var b232 = 123;
// a122 = b232;     // ERROR: number is not assignable to string... 
                    // bcoz typescript decided that "a122" is of string type
/****************************************************************************/

var arr132 = [ 10, null, 30, 40 ];                  // number | null
// arr132.push('gopal');           // ERROR
arr132.push(45);                    // WORKS
arr132.push(null);                  // WORKS


var arr133 = [143, "ILU", 'kadhal', 22];            // number | string
arr133.push('gopal');               // WORKS
arr133.push(45);                    // WORKS
// arr133.push(null);                  // ERROR
// arr133.push(true);                  // ERROR

