var x = { 
    name: 'RM',
    stadium: 'Bernabeu',
    city: 'Madrid'
}
var blah1 =  Object.assign({ manager: 'Ancelotti' }, x, {name: 'Real Madrid'});
var blah2 =  Object.assign({}, x, {name: 'Real Madrid'});
console.log(blah1);
console.log(blah2);

// Object.assign(param1, param2, param3)
    // param1 ====> the baseObject which will be created... it can be empty (or) prefilled with data
    // param2 ====> the sourceObject (all properties inside this sourceObject will come & sit in param1)
    // param3 ====> the properties mentioned here will overwrite any properties (if present) in param1 & param2