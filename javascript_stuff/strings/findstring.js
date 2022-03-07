// var str44 = "/app/assist/RFQ224458157857B1/QUOT224458157938B?storeName=EMAHILA?player1=Luka"
var str44 = "/app/assist/RFQ224458157857B1/QUOT224458157938B?storeName=EMAHILA"

// const subString33 = str44.split('storeName=');
// console.log(subString33);

const subString34 = str44.split('storeName=');
//console.log(subString34)
const stringAfterPopping = subString34.pop();
console.log(subString34)
const finalString = stringAfterPopping.split('?')[0];
console.log(finalString);
/*
    pop()
    - removes (pops) the last element of an array. 
    - changes the original array. 

*/