var playerIds = {
    id1: { name: "RM", stadium: 'Bernabeu' },
    id2: { name: "Sevilla", stadium: 'Sanchez Pijuan' },
    id3: { name: "Atleti", stadium: 'Vicente Calderon' },
    id4: { name: "Barca", stadium: 'Camp Nou' },
}

console.log(playerIds);
console.log(Object.keys(playerIds));
var blah23 = Object.keys(playerIds).includes('id26');
console.log(blah23);