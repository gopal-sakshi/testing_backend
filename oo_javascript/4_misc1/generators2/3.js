// In addition to advancing the iterator-generator object, next() actually has a secondary use. 
// If you pass a value to next, it will be treated as "result of a yield statement" inside the generator

function* ticketGenerator() {
    for (var i = 0; true; i++) {
        var reset = yield i;
        if (reset) { i = -1; }
    }
}

var takeANumber = ticketGenerator();
console.log(takeANumber.next().value);
console.log(takeANumber.next().value);
console.log(takeANumber.next().value);
console.log(takeANumber.next(true).value);
console.log(takeANumber.next().value);
