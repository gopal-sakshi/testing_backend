class Person {
    name34 = 'gopal';


    // printInBoldArrow is an arrow function... inside that arrow function, we use this keyword
        // printInBoldArrow arrow function takes the surrounding scope...
        // meaning, 'this' inside of printInBoldArrow arrowfn ===> refers to 'this' of printUsingArrow()
        // because printUsingArrow() is the surrounding scope of printInBoldArrow()
    printUsingArrow() {        
        var printInBoldArrow = () => { console.log('st arrow ===> ', this.name34) };
        printInBoldArrow();
    }

    // printInBoldFn() is a normal function... there is no 'this' keyword
        // meaning you cant use 'this' keyword inside printInBoldFn() ====> it throws error
    printUsingFunction() {        
        (function printInBoldFn() { try {console.log('No ARROW ===> ', this.name34)} catch(err) { console.log(`${err}`)} })();
    }

    // here, we are supplying 'this' to printInBoldFnThis()
    printUsingFunctionThisSupplied() {
        ((function printInBoldFnThis() { console.log('NO arrow, but this supplied ===> ', this.name34) }).bind(this))();
    }

    //  .................. DONT BOTHER ..................
    // printAnother() {
    //     var printAnother = 'printAnother';
    //     console.log('---------------- explanation about %o ',printAnother, '----------------');
    //     console.log('notice that even in the "class method" --');
    //     console.log('class\'s own method ---> %o ', printAnother)
    //     console.log('we have to access class property by \'this\' variable');
    //     // console.log(`name = ${name34}`);         ------------> ReferenceError (name34 is not defined);
    //     console.log(`this.name = ${this.name34}`);
    //     console.log('------------------------------------------- ');
    // }
}

var p12 = new Person();
p12.printUsingArrow();
p12.printUsingFunction();
p12.printUsingFunctionThisSupplied();

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