var playerIds = {
    id1: { name: "RM", stadium: 'Bernabeu' },
    id2: { name: "Sevilla", stadium: 'Sanchez Pijuan' },
    id3: { name: "Atleti", stadium: 'Vicente Calderon' },
    id4: { name: "Barca", stadium: 'Camp Nou' },
}

// console.log(playerIds);
// console.log(Object.keys(playerIds));
var blah23 = Object.keys(playerIds).includes('id26');
var blah24 = playerIds['id2'];
console.log(blah23);
console.log(blah24);
/***********************************************************************************************/

var obj23 = { 
    name: "sakshi",
    age: 33,
    country: "India"
}
var blah = Object.keys(obj23).length
console.log(blah);
/**********************************************************************************************/