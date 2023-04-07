function greet11(person:string) { return `Hello ${person}`; }
// But what if, we have to greet multiple persons one after another
console.log(greet11('Benz'));
console.log(greet11('Luka'));
console.log(greet11('Toni'));            // bad practice
/************************************************************************************************/

// what if the function can accept array of strings
function greet12(person: string | string[]): string | string[] {
    if (typeof person === 'string') { return `Hello, ${person}!`; } 
    else if (Array.isArray(person)) { return person.map(name => `Hello, ${name}!`); }
    throw new Error('Unable to greet');
}
console.log(greet12(['Vini', 'Valverde', 'Alaba']));
/************************************************************************************************/

// Instead of having greet12(person: string | string[])
    // it is best to create         2 overload signatures                   1 implementation signature