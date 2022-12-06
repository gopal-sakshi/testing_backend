const { clubName, stadium, ...z } = { clubName: 'RM', stadium: 'Bernabeu', manager: 'Ancelotti', players: ['Alaba', 'Kroos'] };
console.log(clubName) // 1
console.log(stadium) // 2
console.log(z) // { c: 3, d: 4 }