// Maps can be iterable... but Objects cant be

var maps23 = new Map([
    ['123', { name: 'gopal', city: 'vijayawada', job: 'employee'}],
    ['124', { name: 'priya', city: 'vizag', job: 'houseWife'}],
    ['125', { name: 'sahasra', city: 'hyderabad', job: 'child'}]    
]);

var keys23 = maps23.keys();
console.log(keys23);
console.log(typeof keys23);
// It seems keys23 ---> type of iterator object.. iterator object will have next() method
// console.log(keys23.next());

var values23 = maps23.keys();
console.log(values23);
console.log(typeof values23);

var entries23 = maps23.entries();
console.log(entries23);
console.log(typeof entries23);

for(const [key, value] of maps23) {    
    console.log(key);       // here key = 123, 124, 125 (only keys are considered)
    console.log(value);
}

for(const key of maps23) {    
    console.log(key);       // here key = 1st entry (both key & value together)
}