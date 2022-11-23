// this objOriginal (string, array, number, boolean, object)
var objOriginal = {
    name: 'real madrid',
    players: ['alaba', 'kroos', 'modric'],    
    clTitles: 14,
    isEnglish: false,
    info: { year:1902, president: 'perez', nicknames: ['Los Blancos', 'Galacticos'] }
}

var objAssign = objOriginal;
console.log(objAssign);
console.log('----------------- after changes --------------------------');
objOriginal.name = 'Real Madrid';
objOriginal.info.nicknames = objOriginal.info.nicknames.concat('Los Merengues')
objAssign.players = ['Benz'];
console.log(objOriginal);
console.log(objAssign); 