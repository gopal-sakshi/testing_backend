var date23 = new Date();
var time22 = date23.getTime();
var year22 = date23.getFullYear();

console.log(date23);
console.log(time22);
console.log(year22);
console.log(year22 % 100);
console.log(time22.toString().substr(3,time22.length));


// Z = it means UTC time
var date24 = new Date('2022-03-30T11:26:45.651Z');
console.log(date24);