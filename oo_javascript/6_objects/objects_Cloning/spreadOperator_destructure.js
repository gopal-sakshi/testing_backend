const { clubName, stadium, ...z } = { clubName: 'RM', stadium: 'Bernabeu', manager: 'Ancelotti', players: ['Alaba', 'Kroos'] };
console.log(clubName)                   // RM
console.log(stadium)                    // Bernabeu
console.log(z)                          // { manager: 'Ancelotti', players: [ 'Alaba', 'Kroos' ] }