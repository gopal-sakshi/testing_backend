const arr23 = [1, 4, 9];
arr23[100] = 101;

console.log(arr23);
console.log(arr23.length);

const arr24 = arr23.filter(n => n);
console.log(arr24);
/**************************************************************************** */


const arr25 = ["hello",0,"",null,undefined,1,100," "]  
console.log(arr25.filter(function(e){return e}));