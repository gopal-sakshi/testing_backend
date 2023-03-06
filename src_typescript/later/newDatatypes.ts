var bigInt23:BigInt = BigInt(987654321);                // using BigInt() constructor
var bigInt24:BigInt = 123456789n;                       // tsconfig.json; "target": "es2020"
// console.log(bigInt23 + bigInt24);

let undefined23:undefined;                      // undefined is also a datatype in typescript
let num24:number | undefined;
num24 = undefined23;
console.log(num24);
num24 = 5
console.log(num24);

// tsc newDatatypes.ts ====> BigInt literals are not available when targeting lower than ES2020
// So, use this ========>               tsc newDatatypes.ts --target es2020
/*********************************************************************************/

// new dataType "never" ====> indicates the values that will never occur.
function throwError(errorMsg: string): never {  throw new Error(errorMsg); } 
