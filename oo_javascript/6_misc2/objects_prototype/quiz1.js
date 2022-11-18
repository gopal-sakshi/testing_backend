/*
    ReadMe
    a) there is absolutely no difference between Block A & Block B
    b) its just that we used syntactic sugar in Block B by using classes... ES6 class syntax is used
*/

/**************************************** BLOCK A ************************************************************ */
function PrototypicalGreeting(greeting = "Hello", name = "World") {
    this.greeting = greeting;
    this.name = name;
}

PrototypicalGreeting.prototype.greet = function () {
    return `${this.greeting}, ${this.name}!`;
}

const greetProto = new PrototypicalGreeting("Hey", "folks");
console.log(greetProto.greet());
/***************************************** BLOCK B - using classes ************************************************* */
class ClassicalGreeting {
    constructor(greeting = "Hello", name = "World") {
        this.greeting = greeting
        this.name = name
    }

    greet() {
        return `${this.greeting}, ${this.name}!`
    }
}

const classyGreeting = new ClassicalGreeting("Hey", "folks");
console.log(classyGreeting.greet());
/************************************************************************************************************* */