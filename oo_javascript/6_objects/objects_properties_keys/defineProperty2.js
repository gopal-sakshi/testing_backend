var data24 = {}
Object.defineProperty(data24, 'newProp34', {value: 'gopaal', writable: true});

// Properties added using Object.defineProperty() are immutable and not enumerable.
console.log(data24);
console.log(data24.newProp34);

data24.newProp34 = 'newGopal';
console.log(data24.newProp34);