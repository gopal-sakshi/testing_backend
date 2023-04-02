const arr12 = [1,1,3,2,4,3,2,3,3,3,3,3,3,4,5,3,2,1,2,1,2,2,2,2,2,2,2,3,3,3,3];
// const arr12 = [210,210];
var map23 = new Map();
for (var i=0; i<arr12.length; i++) {
    if(map23.has(arr12[i])) {
        map23.set(arr12[i], { count : map23.get(arr12[i]).count + 1 }) }
    else { 
        map23.set(arr12[i], { count: 1 } );        
    }
}
console.log(map23);
var highest = map23.entries().next().value;
for(const [key, value] of map23) {
    if(highest[1].count < value.count) { highest = [key, { count:value.count } ]}
}
console.log(highest);