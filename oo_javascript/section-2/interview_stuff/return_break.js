function doStuff1() {
    var arr23 = [1,4,9,16,25];
    for(var i=0; i < arr23.length; i++) {
        console.log('now processing ', arr23[i]);
        if (arr23[i] % 5 == 2) {
            console.log('remainder is 2');
            return `if block with ${arr23[i]}`
        }
        return `outside if block`;
    }
}

const result = doStuff1();
console.log(result);