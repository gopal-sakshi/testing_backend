var searchString = 'Ronaldo';
var playersList = [
    { name: 'Ronaldo', position: 'Winger' },
    { name: 'Benz', position: 'Striker' },
    { name: 'Modric', position: 'Midfield' },
    { name: 'Carvajal', position: 'LB' },
    { name: 'Courtous', position: 'GK' },
];

// we used arrow function & curly brackets here... so, we explicitly need to write return statement
var arr1 = playersList.filter(player => { console.log('---->',player); return player.name == searchString });

// we did NOT use curly brackets... hence, no need to write return statement explicitly
var arr2 = playersList.filter(player => player.name == searchString );

// we use function here... not arrow function
        // note: this function takes a parameter/argument ----> it is the CURRENT VALUE
var arr3 = playersList.filter( function(player) { return player.name == searchString; } );

console.log('------------------');
console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log('------------------');
