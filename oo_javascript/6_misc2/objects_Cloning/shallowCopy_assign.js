// this obj12 (string, array, number, boolean, object)
var obj12 = {
    name: 'real madrid',
    players: ['alaba', 'kroos', 'modric'],    
    clTitles: 14,
    isEnglish: false,
    info: { year:1902, president: 'perez', nicknames: ['Los Blancos', 'Galacticos'] }
}

/*
    APPROACH I --------------> Object.assign(); but this is shallow copy
    - obj12 -------> an object in heap memory.
    - objAssign ---> another object in heap memory.
    - both obj12 & objAssign ====> two different memory locations
    - BUT... both obj12 & objAssign ----> share same property 'info'
        technically, 'info' is another object in heap memory... there is only one such 'info object'
        Both obj12.info & objAssign.info ------> point to the same thing...88


*/
var objAssign = {};
Object.assign(objAssign, obj12);
console.log(objAssign);
console.log('----------------- after changes --------------------------');
obj12.name = 'Real Madrid';
obj12.info.nicknames = obj12.info.nicknames.concat('Los Merengues')
objAssign.players = ['Benz'];
console.log(obj12);
console.log(objAssign);     // notice how modifications in 'obj12' ----> reflected in 'objAssign'