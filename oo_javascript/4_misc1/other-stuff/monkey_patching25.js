var console = {};
console.log = function(param1) { process.stdout.write(`\nHello --------> ${param1} <------------ nenu process.stdout ni\n`); }

class Person23 {
    
    constructor(name, club) {
        this.name = name;
        this.club = club;
    };

    getName() {
        console.log(this.name);         // So first, we check if any console object is there... if its not there, then we use global object's console
                                            // we modified console object
                                            // but we didnt modify global console object
        global.console.log('global console', this.name);
        return this.name;
    }
    getClub() {return this.club;}
    getStatement() {return `${this.name} plays for ${this.club}`}

}

const p1 = new Person23('Ronaldo', 'Man U');

// console.log(p1.getStatement());                         //          O/P -------> Ronaldo plays for Man U
// console.log(p1.getStatement);                        //          O/P -------> [Function: getStatement]
console.log(p1.getName());