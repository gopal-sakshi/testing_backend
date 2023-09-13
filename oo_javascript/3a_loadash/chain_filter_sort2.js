var _ = require('lodash');

var users = [
    { user: 'barney', age: 36, skills:['cooking'] },
    { user: 'fred', age: 40, skills:['velaikkaran'] },
    { user: 'pebbles', age: 1, skills:['crying', 'pooping'] },
    { user: 'achilles', age: 56, skills: ['yawning', 'attacking'] }
];
   

var youngest1 = _.chain(users)
.sortBy('age')
.value();
console.log(youngest1);