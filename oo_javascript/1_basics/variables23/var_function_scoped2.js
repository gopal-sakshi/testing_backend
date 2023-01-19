var name55='agastyaraju';
function varScope1() { name55 = 'priya'; console.log('1 lo ===> ', name55); }           // access global 'name55'
function varScope2() { var name55 = 'priya'; console.log('2 lo ===> ', name55); }       // access its own 'name55'
// varScope1();
varScope2();
console.log('function bayata ===>', name55);