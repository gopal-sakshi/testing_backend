// without binding this
class Logger1 {
    // constructor() { this.printName1 = this.printName1.bind(this) }
    printName1 (name = 'Lawrence Eagles') {
        console.log('value of this in printName1 is',this);         // value of this in printName1 is undefined
        this.print1(`Hello ${name}`);             // here, this is undefined... bcoz, we didnt bind
    }
    print1 (text) { console.log(text);  }
}
  
const logger1 = new Logger1();
console.log(logger1);

const { printName1 } = logger1;
// this is ES6 destruction.... it simply means 
    // const printName1 = logger1.printName1;
    // console.log(printName1); prints this ====================> [Function: printName1]

printName1(); 
    // returns: TypeError: Cannot read property 'print' of undefined
        // because this is undefined....

/* ****************************************************************************** */