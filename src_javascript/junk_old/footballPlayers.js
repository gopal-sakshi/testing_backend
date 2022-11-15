var players = require('./__footballPlayers.json');
console.log(players.length);

players.forEach((player, index) => {
    player.first_name = player.first_name + '_copy';
});
// to dump the whole array... and not get ... 322 more items
console.dir(players, {'maxArrayLength':null});