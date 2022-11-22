let namespace = {};

(function foo(n) {

  let numbers = []
  function format(n) {  return Math.trunc(n) }
  function tick() { numbers.push(Math.random() * 100) }
  function toString() { return numbers.map(format) }
  n.counter = { tick, toString }

}(namespace))

const counter = namespace.counter
counter.tick()
counter.tick()
console.log(counter.toString())


// DID NOT UNDERSTAND THE SYNTAX