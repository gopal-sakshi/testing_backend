const _ = require('lodash');


let object = [12, 13, 14, 15, 16];
/*
    transform(object, iterateFn, accumulator)
    - object = the object on which we perform the operation
    - iterateFn ===> a function... 2nd argument for transform
    - accumulator === holds the accumulated value           // optional param
*/
let accumulator23 = { 
    firstVal: 'edo oka first value',
    secondVal: 'ipudu ee object lo ki anni values vachi padathaayi'
};
let st_elem = _.transform(object,
    function (param1, result, index) {
        // console.log('param1 ====> ', param1);            // enable it to see whats happening
        param1[result] = result;
        console.log('result, index ====> ', result, index);
    }, accumulator23);
console.log('--------------------------------------------------- big line break ---------------------------------------------------');
console.log('st_elem ====> ', st_elem);