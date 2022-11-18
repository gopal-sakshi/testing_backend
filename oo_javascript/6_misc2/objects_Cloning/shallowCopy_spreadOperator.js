// this obj12 (string, array, number, boolean, object)
var obj12 = {
    name: 'real madrid',
    players: ['alaba', 'kroos', 'modric'],    
    clTitles: 14,
    isEnglish: false,
    info: { year:1902, president: 'perez', nicknames: ['Los Blancos', 'Galacticos'] }
}

/*
    APPROACH I --------------> spread operator.... this is also shallow copy
*/
var objAssign = {...obj12};

console.log(objAssign);
console.log('----------------- after changes --------------------------');
obj12.name = 'Real Madrid';
obj12.info.nicknames = obj12.info.nicknames.concat('Los Merengues')
objAssign.players = ['Benz'];
console.log(obj12);
console.log(objAssign);     // notice how modifications in 'obj12' ----> reflected in 'objAssign'