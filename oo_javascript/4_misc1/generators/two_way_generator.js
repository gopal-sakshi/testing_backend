function* twoWayGenerator() {
    var what23 = yield '__';
    console.log('Hello ' + what23);
    yield 'unko yield undi le';
    // return 'blah'
}
var twoWay = twoWayGenerator();
console.log(twoWay.next());
console.log(twoWay.next('world'));
console.log(twoWay.next());
/*

When the first next() method is invoked
- the generator reaches the first yield function and is then put on pause.

When next('world') is invoked
- the generator resumes from the point where it was put on pause, which is on the yield instruction, 
- but this time we have a value that is passed back to the generator. 
- This value will then be set into the what23 variable. 
- The generator then executes the console.log() instruction and terminates

*/