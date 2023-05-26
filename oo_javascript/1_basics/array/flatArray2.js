var input = [1,2,[3],[[4]],[[5,6]]];
var output1 = [];
var output2 = [];
function iter(arr1, opArr) {
    for (let i=0; i<arr1.length; i++) {
        if(typeof arr1[i] == 'number') {
            opArr.push(arr1[i]);
        } else {
            if (typeof arr1[i] == 'object') {
                for(let j=0; j<arr1[i].length; j++) {
                    opArr.push(arr1[i][j]);
                }
            }
        }
    }
    return opArr;
}

iter(iter(input, output1), output2);
console.log(output2);