var arr11 = [1,2,3,4,5]
arr11.length = 14;
arr11[7] = 'something23'
console.log("arr ====> ", arr11);
console.log("arr[9]", arr11[9]);

/*
    arr11 is an object
    - when we create an array - some properties are created on this object
    the keys = 0, 1, 2, 3, 4 ... 
    "length" is also a key that is created on this arr11 object
*/