var arr12 = [
    { name: 'Real Madrid', stadium: 'Bernabeu'},
    { name: 'Barca', stadium: 'Camp Nou'},
    { name: 'Atleti', stadium: 'Calderon'},
    { name: 'Athletic', stadium: 'San Mames'},
];

var newArray = arr12.map(item => {
    item.manager = 'some manager'
    if(item.name == 'Barca') delete item.stadium;
    return item;
});

console.log(newArray);