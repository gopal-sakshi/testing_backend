/*
    
    ARRAY elements are assumed to be unique =====================

    Input: arr1[]= [1,3,4,5,2]          arr2[]= [2,4,3,1,7,5,15]
    arr1[] is a subset of arr2[]

    Input: arr1[]= [1,3,4,5,2]          arr2[]= [4,5,2]
    arr1[] is not a subset of arr2[]

    Input: arr1[]= [1,3,4,5,2]          arr2[]= [11,12,13,15,16]
    arr1[] is not a subset of arr2[]
*/

var isSubset = (arr1, arr2) => {
    let s2 = new Set(arr2);
    for(let i=0; i<arr1.length; i++) {
        if(!s2.has(arr1[i])) return false
    }
    return true
}

console.log(isSubset([1,3,4,5,2], [2,4,3,1,7,5,15]));
console.log(isSubset([1,3,4,5,2], [4,5,2]));
console.log(isSubset([1,3,4,5,2], [11,12,13,15,16]));
console.log(isSubset([11, 3, 7, 1], [11, 1, 13, 21, 3, 7]));