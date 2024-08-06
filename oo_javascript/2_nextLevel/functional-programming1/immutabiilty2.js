const obj = { 
    propA: {
        nestedA: 1,
    },
}; 
Object.defineProperty(obj, 'propA', { writable: false });

obj.propA.nestedA = 2;          // valid
obj.propA  = null;              // error

console.log("obj ==> ", obj)