let first12:number = 123;                   // number 
let second12: number = 0x37CF;              // hexadecimal (14287 in decimal)
let third:number=0o377 ;                    // octal        (255 in decimal)
let fourth: number = 0b111001;              // binary       (57 in decimal)

console.log(first12+second12);
console.log(third+fourth);

// tsc number_data_type.ts 
// node number_data_type.js 