// never ending generator... it goes on generating forever
function* ticketGenerator() {
    for (var i = 0; true; i++) { yield i; }
}

var takeANumber = ticketGenerator();
console.log(takeANumber.next().value);
console.log(takeANumber.next().value);
console.log(takeANumber.next().value);
console.log(takeANumber.next().value);
console.log(takeANumber.next().value);