var arr44 = [1,4,9,16,25,36];
var nextElem = arr44[Symbol.iterator]();
console.log(nextElem.next());
console.log(nextElem.next());
console.log(nextElem.next());
for(const value of nextElem) {
    console.log(value);
}