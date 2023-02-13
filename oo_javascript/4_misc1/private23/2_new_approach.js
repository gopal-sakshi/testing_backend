class MyClass {
    #x = 12.96;
    get xValue23() { return this.#x }
}

const c3 = new MyClass();
// try { 
//     console.log(c3.#x);                     // JS engine throws Syntax error... try/catch block CANNOT catch syntax errors.
// } catch(e) { 
//     console.log('e ===>', e.message); 
// }
console.log(c3.xValue23);