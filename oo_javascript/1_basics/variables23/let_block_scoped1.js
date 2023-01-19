let x = 1;

if (x === 1) {
    let x = 2;                  // let is block_scoped... this 'x' only exists within this scope
    console.log(x);             // output: 2
}

console.log(x);                 // output: 1
/**************************************************************************************/

let y = 'jingChak23';

function choosta23() {
    let y = 'jingChak24';
    { let y = 'jingChak25'; console.log(y); }
    { let y = 'jingChak26'; console.log(y); }
    console.log(y);
}
choosta23();
console.log(y);
/**************************************************************************************/