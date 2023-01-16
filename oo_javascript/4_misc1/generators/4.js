function* laptoptGenerator() {
    yield 'msi';
    yield 'macbook';
    for(var i=0; i<1e5; i++) {
        for (var j=0; j<1e5; j++) {}
    }
    yield 'dell';
    return 'asus';
}

// most important method of the generator object is next(), which is used to start/resume the execution of the generator

var gen23 = laptoptGenerator();
console.log(gen23.next());
console.log(gen23.next());
console.log(gen23.next());
console.log(gen23.next());
console.log(gen23.next());