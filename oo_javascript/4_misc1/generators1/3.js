function* iteratorGenerator(arr) {
    for (var i = 0; i < arr.length; i++) { yield arr[i]; };
    return 'EndOfArray';
}
var iterator = iteratorGenerator(['gopal', 'priya', 'sahasra', 'sakshi']);

do {
    var item12 = iterator.next(); 
    console.log(item12.value);
} while (!item12.done);