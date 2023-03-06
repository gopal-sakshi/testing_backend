function addNumberOrString23<Type> (arg1:Type, arg2:Type):Type { 
    if(typeof arg1 == 'string') { return (arg1+arg2).toUpperCase() as Type  }
    else if (typeof arg1 == 'number' && typeof arg2 == 'number') { return (arg1+arg2) as Type } 
    else return arg1
};

var blah1 = addNumberOrString23("GopAL", "Priya");
var blah2 = addNumberOrString23(3,8);
console.log(blah1);
console.log(blah2);
/***************************************************************************************/
function identity23<Type>(arg1: Type): Type { return arg1 };

// let id1 = ""