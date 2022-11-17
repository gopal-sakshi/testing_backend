class Person {
    name34 = 'gopal';
    printUsingArrow() {
        setTimeout(() => {
            console.log(this.name34)
        }, 100)
    }
    printUsingFunction() {
        setTimeout(function() {            
            console.log(this.name34)
        }, 100)
    }
    printAnother() {
        var printAnother = 'printAnother';
        console.log('---------------- explanation about %o ',printAnother, '----------------');
        console.log('notice that even in the "class method" --');
        console.log('class\'s own method ---> %o ', printAnother)
        console.log('we have to access class property by \'this\' variable');
        // console.log(`name = ${name34}`);         ------------> ReferenceError (name34 is not defined);
        console.log(`this.name = ${this.name34}`);
        console.log('------------------------------------------- ');
    }
}

var p12 = new Person();
p12.printUsingArrow();                  // gopal
p12.printUsingFunction();               // undefined
p12.printAnother();

/*
    Both functions use setTimeout() method with 2 arguments
        For printUsingArrow()
            1st argument        () => { console.log(this.name34) }
            2nd argument        100
        For printUsingFunction()
            1st argument        function() { console.log(this.name34)}
            2nd argument        100

        printUsingArrow uses arrow function... so the scope of this isnt changed
        printUsingArrow uses function... inside the function, the scope of this is changed and it no 
            longer refers to Person class scope
*/