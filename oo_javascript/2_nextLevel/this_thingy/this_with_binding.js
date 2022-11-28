// https://blog.sessionstack.com/how-javascript-works-the-this-variable-and-the-execution-context-12d8f04a40d3

// bind this in the constructor
class Logger2 {

    constructor () {
      this.printName2 = this.printName2.bind(this);
    }
    
    printName2 (name = 'Lawrence Eagles') {
      this.print2(`Hello ${name}`);
    }
  
    print2 (text) {
      console.log(text); 
    }

    hellodoctor98() {
        console.log('hello doctor98');
        return 'this is return value of hello doctor 98'
    }
}
  
const logger2a = new Logger2();
const { printName2 } = logger2a;

const logger2b = new Logger2();
const { hellodoctor98 } = logger2b;

console.log('printing function');
console.log(hellodoctor98);

console.log('calling function');
console.log(hellodoctor98());

hellodoctor98();

printName2();

/* ****************************************************************************** */