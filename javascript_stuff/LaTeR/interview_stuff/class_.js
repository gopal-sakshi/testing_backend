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
 * class keyword is really just a syntactic sugar around constructor functions. 
 * We can replace the code above with two constructor functions and link their prototypes:
 * **************************************************************** */

function Person2(name) {
    this.name = name;
}

Person2.prototype.hello = function hello() {
    return 'hello ' + this.name;
};

function Developer2(name, title) {
    Person2.call(this, name);
    this.title = title;
}

Developer2.prototype = Object.create(Person2.prototype) // A
Developer2.prototype.constructor = Developer2; // B
Developer2.prototype.getTitle = function getTitle() {
    return this.title;
};

