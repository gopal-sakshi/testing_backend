let namespace = {};

(function foo(n) {

  let numbers = [];
  function format(n) {  return Math.trunc(n) };
  function tick() { numbers.push(Math.random() * 100) };
  function toString23() { return numbers.map(format) };
  n.counter = { tick, toString23 };
  n.someProperty44 = 'Learning new syntax ??'
}(namespace))

const counter = namespace.counter
counter.tick()
counter.tick()
console.log(counter.toString23())
console.log(namespace.someProperty44);

// DID NOT UNDERSTAND THE SYNTAX

/*
  Something about the syntax

      namespace ====> an object                                                                   // probably, within the global object
      we pass namespace as a parameter to IIFE                                                    // IIFE accepts that parameter as 'n'
      inside the IIFE, we add some properties/methods on 'n' (ie on namespace object)
        namespace.counter -----------> an Object with 2 methods
        namespace.someProperty44 ----> a property which stored string

*/