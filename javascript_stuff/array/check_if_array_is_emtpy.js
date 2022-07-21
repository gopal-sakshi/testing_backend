var emptyArray1 = [];

// APPROACH I       ------> WRONG WAY
if (emptyArray1) {                      
    console.log(emptyArray1);
} else {
    console.log('even though empty array, if doesnt mean array is NULL')
}

// APPROACH II      --------> RIGHT WAY
if (Array.isArray(emptyArray1) && emptyArray1.length > 0) {                      
    console.log(emptyArray1);
} else {
    console.log('empty array bhayya')
}