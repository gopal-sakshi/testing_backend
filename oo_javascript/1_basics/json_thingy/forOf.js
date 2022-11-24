var arr23 = ['RM', 'Bar', 'Atleti', 'Sevilla', 'Athletic'];
var str23 = "Real Madrid";
var obj23 = { 
    clubName: 'RealMadrid', 
    stadium: 'Santiago Benrabeu', 
    players: ['Courtois', 'Alaba', 'Modric'], 
    address: { city: 'Madrid', country: 'Spain'}
}
for (let item of arr23) {    
    console.log(item);
}

console.log('***********************************************************');

for (let item of str23) {    
    console.log(item);
}

console.log('***********************************************************');

for (let item of Object.entries(obj23)) {    
    console.log(item);          // returns whole 'key-value' as single element
}

for (let [k,v] of Object.entries(obj23)) {    
    // console.log(`${k}__${v}`);
    console.log(k, '----> ', v);    
}
console.log('***********************************************************');
for (let item of Object.keys(obj23)) {    
    console.log(item);
}
console.log('***********************************************************');
for (let item of Object.values(obj23)) {    
    console.log(item);
}