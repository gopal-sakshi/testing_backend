// JavaScript class is a special function
    // so, the value of "this" in a method depends on how it is invoked.
    // to prevent it from happening, we bind "this" 
    // so, all functions refer to the objectInstance & not something else


class Logger {
    // we need to explicity bind "this";     otherwise, printName() may have different "this" in different contexts
    constructor () { this.printName = this.printName.bind(this); }  
    printName (name = 'Lawrence Eagles') { this.print(`Hello ${name}`); }
    print (text) { console.log(text); }
}
    
const logger = new Logger();
const { printName } = logger;
printName();


