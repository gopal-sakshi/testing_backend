var players1 = ['Courtious', 'Carvajal', 'Militao', 'Alaba', 'Mendy', 'Modric', 'Casemiro', 'Kroos', 'Rodrygo', 'Benzema', 'Vinicius', 'Lunin', 'Vasquez', 'Nacho', 'Vallejo', 'Marcelo', 'Valverde', 'Ceballos', 'Isco', 'Hazard', 'Jovic', 'Bale'];

var players2 = [
    { name: 'Casillas', position: 'GK', nationality: 'Spain' },
    { name: 'Pepe', position: 'CB', nationality: 'Portugal' },
    { name: 'Benzema', position: 'ST', nationality: 'France' },
    { name: 'Modric', position: 'CM', nationality: 'Croatia' },
    { name: 'Kroos', position: 'CM', nationality: 'Germany' },
    { name: 'Bale', position: 'RW', nationality: 'Wales' },
    { name: 'Ceballos', position: 'CM', nationality: 'Spain' }
];

const filter1 = players1.filter(player => player.includes('b'));
const filter2 = players2.filter(player => player.name.includes('b'));

console.log(filter1);
console.log(filter2);