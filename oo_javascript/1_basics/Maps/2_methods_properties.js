var clubs = new Map([
    [ "Barca", { name: 'FCB', clTitles: 5} ],
    [ "AC Milan", { name: 'AC M', clTitles: 7} ]
]);
// console.log(clubs);
// console.log('-------------------------- X22 --------------');

clubs.set("Real Madrid", {name: 'RM', clTitles:13});
clubs.set("Real Madrid", 23);
console.log(clubs.get("Real Madrid"));
// console.log('rm club added --->',clubs);
console.log(clubs.has("Real Madrid"));
// console.log('-------------------------- X23 --------------');
// clubs.set("Real Madrid", {name: 'RM', clTitles:14});
// console.log('rm club modified', clubs);
// console.log('-------------------------- X24 --------------');
// var result1 = clubs.get('Real Madrid');
// console.log('rm club retrieved', result1);
// console.log('-------------------------- X25 --------------');
// var result1 = clubs.delete('Real Madrid');
// console.log('rm club deleted', result1);
// console.log(clubs);
// console.log('-------------------------- X26 --------------');
// var result2 = clubs.size;
// console.log(result2);

// // delete, clear, has ----> other methods