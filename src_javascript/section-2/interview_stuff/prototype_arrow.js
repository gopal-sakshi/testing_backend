function Person1(name) {
    this.name = name;
}

Person1.prototype.getName = () => {
    return this.name;
};          /*
                Arrow functions cannot create a context and therefore this will be the global object in non-strict mode
            */

const tom1 = new Person1('Tom');
console.log(tom1.getName());



function Person2(name) {
    this.name = name;
}

Person2.prototype.getName = function () {
    return this.name;
};

const tom2 = new Person2('Tommmyyyyyyyyyyyyy');
console.log(tom2.getName());