// ex- str='p11.q23.r555.e.f', value=51
// o/p-> {p:{q:{r:{e:{f:51}}}}}

function addProperty1(obj, prop) {
    console.log(obj, prop);
    obj[prop] = { };
    // console.log(obj);
    return obj;
}

let nestedObjList = 'p11.q23.r555.e.f'.split('.');
console.log(nestedObjList);
let parentProp = nestedObjList[0];
// console.log(parentProp);
var p11 = { };
let updatedObj = p11;
function parseString() {
    let currObj = p11; let prevObj = p11;
    for(let i=1; i<nestedObjList.length; i++) {
        // console.log(' 222', nestedObjList[i]);
        updatedObj = addProperty1(prevObj, nestedObjList[i]);
        currObj = currObj[nestedObjList[i]];
        prevObj = currObj;
        // console.log(' ===', updatedObj);
    }
    console.log(p11);
}

parseString();