function* fruitGenerator() {             // fruitGenerator() function is essentially a factory that, when invoked, returns a new generator object
    yield 'apple';
    yield 'orange';
    return 'watermelon';
}

// most important method of the generator object is next(), which is used to start/resume the execution of the generator
var newFruitGenerator = fruitGenerator();
/**********************************************************************************/

// APPROACH I

// console.log(newFruitGenerator.next());
// console.log(newFruitGenerator.next());
// console.log(newFruitGenerator.next());
/**********************************************************************************/

// APPROACH II
do {
    var item22 = newFruitGenerator.next();
    console.log(item22.value);    
} while(!item22.done);

/**********************************************************************************/