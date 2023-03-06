let a: string = 'Sanket';
let b = a.split('');
let c = [...new Set(a)];
for (let i of c) { console.log(i) };


// --downlevelIteration         for transpiling to an older version of JavaScript
// New features 
    // for of           for (player of playersArray)
    // Array spread ([a, ...b])
    // argument spread (fn(...args))
    // etcetera 
// downlevelIteration allows these thingies to be used properly in ES5 environments 

// USE THIS ============> tsc downLvlIteration12.ts --downlevelIteration true