
var bigInt23:BigInt = BigInt(987654321)              // using BigInt() constructor

var bigInt24:BigInt = 123456789n
        // for this to work, I needed to change target property in compilerOptions in tsconfig.json

// console.log(bigInt23 + bigInt24);


let num23:number = 10;
let undefined23:undefined;
num23 = undefined23;
console.log(num23);