var _ = require('lodash');

const fnThatRuns = (param1, param2, param3) => {
    console.log(param1, param2, param3);
    return param3.name;
}

const collection23 = [
    { name: 'Benz', id:9, position: 'Striker' },
    { name: 'Luka', id: 10, position: 'MF' },
    { name: 'Ramos', id:4, position: 'CB' },
    { name: 'Kroos', id: 8, position: 'MF' }
]

var finalArray12 = _.map(collection23, _.partial(fnThatRuns, 'param1', 'param2'));
console.log(finalArray12);

/*

EXPLANATION

map()
- takes each element in "collection23"
    1st element, 2nd element, 3rd element, 4th element
- and runs/executes the given function fn23 (here, we provided _partial())   
- whatever value is returned by fn23 is stored as 1st element of finalArray12
- 2nd element is taken... executes the fn23 again... stores the result as 2nd element of finalArray12

partial()
- 1st param will be a function (here, its fnThatRuns)
- 

*/