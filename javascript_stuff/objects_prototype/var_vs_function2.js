/*
    Its not var vs function
    It can be   let_vs_function (or) 
                const_vs_function

    Functions:
    a) a type of object... 
        String is a type of object... with replace(), substring() methods
        Date is a type of object... with getMonth(), getTime() methods
        Similarly, function is a type of object...
    b) The methods & properties of function Object are
        name
        code ---> actual code (or) function body
        
*/

function Book(type, author) {
    this.type = type;
    this.author = author;
    this.getDetails = function () {
        return this.type + " written by " + this.author;
    }
}


var book23 = new Book("Fiction", "Peter King");               // a fresh functionObject is created using new keyword
var dateToday = new Date();                                  // a fresh date object is created... using new keyword
var str23 = new String('gopal');                            // a fresh string object is created... using new keyword

console.log(Book.name);             // name of function... nothing but Book
console.log(Book.length);           // number of arguments that function accepts
console.log(Book.toString());       // returns a string... representing the 'code' of the function
                                        // overrides the Object.toString() property
console.log(Book.prototype);
console.log('-------------------------------------- X24 ---------------------------------');
console.log(typeof Book);               // prints function
console.log(typeof book23);             // prints object
console.log(Book instanceof Object);    // true
console.log('-------------------------------------- X25 ---------------------------------');

console.log(typeof book23);     // prints object
console.log(typeof dateToday);  // prints object
console.log(typeof str23);      // prints object
console.log('-------------------------------------- X26 ---------------------------------');


console.log(book23.getDetails());