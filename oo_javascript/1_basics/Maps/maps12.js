// Objects as keys

const vini = { name: 'vinicius junior', position: 'winger', country: 'brazil' };
const luka = { name: 'luka modric', position: 'midfielder', country: 'croatia' };
const kroos = { name: 'toni kroos', position: 'midfielder', country: 'germany' };

const pl23 = new Map()

pl23.set(vini, { info : "vini is very fast; dribbles;", age: 23, comments: [] });
pl23.set(luka, { info: "what can we say about balon dOr winner", age: 38 });

console.log("has ====> ", pl23.has(vini))
console.log("has ====> ", pl23.has({ name: 'luka modric', position: 'midfielder', country: 'croatia' }))