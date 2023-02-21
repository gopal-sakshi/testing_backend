var obj23 = { name: 'RM', stadium: 'Bernabeu' };

function addAddress(objInstance) {
    // objInstance.address = { city: 'Madrid', country: 'Spain' };
    objInstance['address'] = { city: 'Madrid', country: 'Spain' };
}

addAddress(obj23);
console.log(obj23);                     // see, the "obj23" is modified... as it is passed by reference