var bike = {
    wheels: 2,
    model: 'hero',
    engine: '2 stroke'
};

var raleigh = Object.create(bike);
raleigh.color = 'red';

console.log(raleigh);
console.log(Object.getPrototypeOf(raleigh));
