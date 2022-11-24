var objOriginal = {
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
var objAssign = structuredClone(objOriginal);

objOriginal.name = 'Real Madrid';
objOriginal.info.nicknames = objOriginal.info.nicknames.concat('Los Merengues')
objAssign.players = ['Benz'];
console.log(objOriginal);
console.log(objAssign);     // notice how modifications in 'objOriginal' ----> NOT reflected in 'objAssign'