var obj12 = {
    name: 'real madrid',
    players: ['alaba', 'kroos', 'modric'],    
    clTitles: 14,
    isEnglish: false,
    info: { year:1902, president: 'perez', nicknames: ['Los Blancos', 'Galacticos'] }
}

/* 
    structuredClone() is only available in 
    - browsers... Chrome, Safari...         not in IE
    - NodeJs ---> only after 17.0.0         earlier node versions doesnt support structuredClone()

*/
var objAssign = structuredClone(obj12);

obj12.name = 'Real Madrid';
obj12.info.nicknames = obj12.info.nicknames.concat('Los Merengues')
objAssign.players = ['Benz'];
console.log(obj12);
console.log(objAssign);     // notice how modifications in 'obj12' ----> NOT reflected in 'objAssign'