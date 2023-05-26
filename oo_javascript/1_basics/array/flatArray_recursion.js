var arr1 = [1,2,[3],[[4]],[[5,6]]];
var arr2 = [1,2,[3, 4]];
var opArr = [];

function returnArr(array) {
    var tmpArr = [];
    for(let i=0; i<array.length; i++) {
        if(typeof array[i] == 'number') {
            tmpArr.push(array[i]);
        } else {
            var blah = array[i]                 // [3], [[4]], [[5,6]]
            while(typeof blah == 'object') {
                blah = blah[0];                 // blah = 3, [4], [5,6]
            }
            tmpArr.push(blah);
        }
    }
    return tmpArr;
}

var result = returnArr(arr2);
console.log(result);