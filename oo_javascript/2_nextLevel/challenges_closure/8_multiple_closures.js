function createCounter() {
    let i = 0
    return function() {
        i++;
        return i;
    }
}
  
let increase1 = createCounter()
let increase2 = createCounter()

console.log(increase1())
console.log(increase1())

console.log(increase2())
console.log(increase2())
/***************************************************************************************** */


// increase1 and increase2 are created by different function call to createCounter
// they do not share memory
// their i are independent and different.