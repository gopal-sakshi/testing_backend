let animals23 = ["aa", "bb", "cc"];
let key = animal => animal == "bb";
if(animals23.some(key)) {
    console.log('swim');
}


// some() method  
    // tests whether at least one element in the array passes the test implemented by the provided function


// arr23.some(fn23)     
// const fn23 = function (element, index, array) { ... }

// element     = The current element being processed in the array.
// index       = The index of the current element being processed in the array.
// array       = The array some() was called upon.



