function objectify (key, value) {
    let obj = {}
    obj[key] = value
    return obj
}
  
console.log(objectify('name', 'Tyler'));
// ------------------------------------------------------------------------------------------

const myPropertyName = 'c'

const myObject1 = {
    a: 5,
    b: 10,
    [myPropertyName]: 15
} 
console.log("myObject1 =======> ", myObject1);
console.log(myObject1.c);
// ------------------------------------------------------------------------------------------

const fieldNumber = 3

const myObject2 = {
  field1: 5,
  field2: 10,
  ['field' + fieldNumber]: 13
}

console.log(myObject2.field3);
// ------------------------------------------------------------------------------------------

const myObject3 = {
  field1: 5,
  field2: 10,
  [`field${fieldNumber}`]: 44
}

console.log(myObject3.field3)
