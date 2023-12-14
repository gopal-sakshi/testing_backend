async function add(p1, p2) {
    
    // get caller function in nodeJs
    const error23 = new Error();
    const stack23 = error23.stack?.split('\n');
    console.log("stack23 =========> ", stack23);
        
    return p1+p2;
}

async function multiply(p1, p2) {
    return p1*p2;
}

module.exports = {
    add23: add,
    multiply23: multiply
}