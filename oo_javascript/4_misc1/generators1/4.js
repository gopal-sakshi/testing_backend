function* laptoptGenerator() {
    yield 'msi';
    yield 'macbook';
    for(var i=0; i<1e5; i++) {
        for (var j=0; j<1e5; j++) {}
    }
    yield 'dell';
    return 'asus';
}

var gen23 = laptoptGenerator();
console.log(gen23.next());
console.log(gen23.next());
console.log(gen23.next());
console.log(gen23.next());
console.log(gen23.next());