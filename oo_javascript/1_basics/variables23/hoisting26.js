var a = 1;
var b = 2;

if (a === 1) {
    var a = 11;                         // the scope is global
    let b = 22; 
    console.log(a); 
    console.log(b);
}

console.log(a);                     // the value of 'a' got changed
console.log(b);