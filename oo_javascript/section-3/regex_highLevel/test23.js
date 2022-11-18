const arr23 = [
    {name: 'Real Madrid', stadium: 'Santiago Bernabeu', country: 'Spain'},
    {name: 'Barcelona', stadium: 'Camp Nou', country: 'Spain'},
    {name: 'Bayern', stadium: 'Allianz Arena', country: 'Germany'},
    {name: 'Man U', stadium: 'Old Trafford', country: 'England'}    
];

const arr24 = [
    { name: 'Real Madrid', coach: 'Ancelotti', players: ["Alaba", "Kroos", "Modric"] },
    { name: 'Barcelona', coach: 'Xavi', players: ["De jong", "Pedri", "Aubameyang"] },
    { name: 'Bayern', coach: 'Nagelsman', players: ["Lewa", "Muller", "Kimmich"] },
    { name: 'PSG', coach: 'Pochettino', players: ["Messi", "Neymar", "Di Maria"] }
];

let newArray25 = [];
arr24.forEach((squad, index) => {
    const result = arr23.find(item => squad.name == item.name);    
    squad.stadium = result ? result.stadium : 'pora rei';
    newArray25.push(squad);    
});
console.log(newArray25);