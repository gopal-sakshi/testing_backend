class Person1 {
    constructor(name) {
      this.name = name;
    }
    hello() {
      return 'hello ' + this.name;
    }
}
  
class Developer1 extends Person1 {
    constructor(name, title) {
      super(name);
      this.title = title;
    }
    getTitle() {
      return this.title;
    }
}
/******************************
    class keyword is really just a syntactic sugar around constructor functions. 
    We can replace the code above with two constructor functions and link their prototypes:
***************************************************************** */

// Person1 ==> a class... it has a constructor() which initializes 'name' and a hello() method
// Person2 ==> a function... it also initialises 'name'; then we add hello() function to Person2
function Person2(name) { this.name = name; }
Person2.prototype.hello = function hello() {  return 'hello ' + this.name; };
function Developer2(name, title) { Person2.call(this, name); this.title = title; }
Developer2.prototype = Object.create(Person2.prototype) // A
Developer2.prototype.constructor = Developer2; // B
Developer2.prototype.getTitle = function getTitle() { return this.title; };
/************************************************************************************************/

var d1_class = new Developer1('gopal', 'SE');
var d1_function = new Developer2('priya', 'SoftEng');
console.log(d1_class.getTitle());
console.log(d1_function.getTitle());
console.log(d1_function.hello());

