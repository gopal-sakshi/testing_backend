
var bigInt23:BigInt = BigInt(987654321)              // using BigInt() constructor

var bigInt24:BigInt = 123456789n
        // for this to work, I needed to change target property in compilerOptions in tsconfig.json
        // BigInt is enabled in node_modules/typescript/lib/lib.es2020.bigint.d.ts, 
                // it is part of es2020
                // it is not part of esnext, es2016



// console.log(bigInt23 + bigInt24);


let num23:number = 10;
let undefined23:undefined;                                  // undefined is also a datatype in typescript
let num24:number | undefined;    
// num23 = undefined23;                                 // ERROR ===> Type 'undefined' is not assignable to type 'number'
num24 = undefined23;                                    // This will not throw error... coz num24 can accept either
console.log(num23);