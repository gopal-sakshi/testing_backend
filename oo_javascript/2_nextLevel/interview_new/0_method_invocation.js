function callback23() { console.log(this.length); }
var blah23 = {
    0: callback23,
    1: 1, 
    2: 2, 
    length: 344 
}
blah23[0]();