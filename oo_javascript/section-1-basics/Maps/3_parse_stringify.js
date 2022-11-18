// No native support for parse & strigify for Maps

var obj23 = {
    name : 'gopal',
    city: 'vijayawada',
    job: 'employee'
}
var stringified23 = JSON.stringify(obj23);
var parsed23 = JSON.parse(stringified23);
// console.log(`typeof stringified23 = ${typeof stringified23}`);
// console.log(stringified23);
// console.log('------------------- X22 ------------------- ');
// console.log(`type of parsed23 = ${typeof parsed23}`);
// console.log(parsed23);
/******************************************************************************************************** */

var maps23 = new Map([
    ['123', { name: 'gopal', city: 'vijayawada', job: 'employee'}],
    ['124', { name: 'priya', city: 'vizag', job: 'houseWife'}],
    ['125', { name: 'sahasra', city: 'hyderabad', job: 'child'}]    
]);

function replacer(key, value) {
    if(value instanceof Map) {
      return {
        dataType: 'Map',
        value: Array.from(value.entries()), // or with spread: value: [...value]
      };
    } else {
      return value;
    }
}

function reviver(key, value) {
    if(typeof value === 'object' && value !== null) {
      if (value.dataType === 'Map') {
        return new Map(value.value);
      }
    }
    return value;
}

const strigified_maps23 = JSON.stringify(maps23, replacer);
console.log(strigified_maps23);
const parsed_maps23 = JSON.parse(strigified_maps23);
