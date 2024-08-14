const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];

var fruits_sorted1 = fruits1.sort();          // modifies the original Array - fruits
console.log("original array affected =======> ", fruits_sorted1, fruits1);

// SUPPORTED only from nodeV20      (ES2023)
let nodeVersion = process.versions.node.split('.')[0];

if(nodeVersion >= 20) {
    var fruits_sorted2 = fruits2.toSorted();     // doesnt affect the original Array
    console.log("original array not affected ===> ", fruits_sorted2, fruits2);
} else {
    console.log("toSorted() not supported below node version 20 ---- PO RA AREY");
}

/*******************************************************************/

// use slice --> to get copy of an array... and apply sort on it

console.log("using slice ====> ", fruits3.slice().sort(), fruits3)