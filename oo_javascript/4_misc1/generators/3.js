function* iteratorGenerator(arr) {
    for (var i = 0; i < arr.length; i++) { yield arr[i]; };
}

var iterator = iteratorGenerator(['gopal', 'priya', 'sahasra', 'sakshi']);
var currentItem = iterator.next();
while (!currentItem.done) {
    console.log(currentItem.value);
    currentItem = iterator.next();
}