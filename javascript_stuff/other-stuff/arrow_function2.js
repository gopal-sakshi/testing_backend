class Person {
    name = 'gopal';
    printUsingArrow() {
        setTimeout(() => {
            console.log(this.name)
        }, 100)
    }
    /*
        Both functions use setTimeout() method with 2 arguments
            For printUsingArrow()
                1st argument        ()=> { console.log(this.name) }
                2nd argument        100
            For printUsingFunction()
                1st argument        function() { console.log(this.name)}
                2nd argument        100

            printUsingArrow uses arrow function... so the scope of this isnt changed
            printUsingArrow uses function... inside the function, the scope of this is changed and it no 
                longer refers to Person class scope
    */
    printUsingFunction() {
        setTimeout(function() {
            console.log(this.name)
        }, 100)
    }
}

var p12 = new Person();
p12.printUsingArrow();                  // gopal
p12.printUsingFunction();               // undefined