function multiply12(param1) {
    return param1 * param1;
}

const concatenate = (a) => (b) => {
    var concatenated = a+b;
    const res = multiply12(concatenated);
    return res;
}
/*********************************************************************** */

// concatenate can also be written as

const concatenateExplained = function(a) {
    return function(b) {        
        var concatenated = a+b;
        const res = multiply12(concatenated);
        return res;        
    }
}

/*********************************************************************** */
console.log( concatenate(5)(4)   );
console.log( concatenateExplained(5)(4)   );

