// this objOriginal (string, array, number, boolean, object)
var objOriginal = {
    name: 'real madrid',
    players: ['alaba', 'kroos', 'modric'],    
    clTitles: 14,
    isEnglish: false,
    info: { year:1902, president: 'perez', nicknames: ['Los Blancos', 'Galacticos'] }
}

/*
    APPROACH I --------------> Object.assign(); but this is shallow copy
    - objOriginal -------> an object in heap memory.
    - objAssign ---> another object in heap memory.
    - both objOriginal & objAssign ====> two different memory locations
    - BUT... both objOriginal & objAssign ----> share same property 'info'
        technically, 'info' is another object in heap memory... there is only one such 'info object'
        Both objOriginal.info & objAssign.info ------> point to the same thing...88


*/
var objAssign = {};
Object.assign(objAssign, objOriginal);
console.log(objAssign);
console.log('----------------- after changes --------------------------');
objOriginal.name = 'Real Madrid';
objOriginal.info.nicknames = objOriginal.info.nicknames.concat('Los Merengues')
objAssign.players = ['Benz'];
console.log(objOriginal);
console.log(objAssign);     // notice how modifications in 'objOriginal' ----> reflected in 'objAssign'