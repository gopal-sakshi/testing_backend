class Person {
    name34 = 'gopal';

    printUsingArrow() {        
        var printInBoldArrow = () => { console.log('1st arrow ===> ', this.name34) };
        printInBoldArrow();
    }

    printUsingFunction() {        
        (function printInBoldFn() { try {console.log('No ARROW ===> ', this.name34)} catch(err) { console.log(`${err}`)} })();
    }

    // here, we are supplying 'this' to printInBoldFnThis()
    printUsingFunctionThisSupplied() {
        ((function printInBoldFnThis() { console.log('NO arrow, but this supplied ===> ', this.name34) }).bind(this))();
    }

}

var p12 = new Person();
p12.printUsingArrow();
p12.printUsingFunction();
p12.printUsingFunctionThisSupplied();