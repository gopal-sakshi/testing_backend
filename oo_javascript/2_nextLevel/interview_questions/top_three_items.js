// Sorts the three elements of an array
function sortFn(arr, asc = true) {
    var newArray = [];
    if(arr[0].price < arr[1].price) {
        if(arr[1].price < arr[2].price) newArray = [arr[0], arr[1], arr[2]];
        else if(arr[0].price < arr[2].price) newArray = [arr[0], arr[2], arr[1]];
        else newArray = [arr[2], arr[0], arr[1]];
    } else {
        if(arr[1].price > arr[2].price) newArray = [arr[2], arr[1], arr[0]];
        else if(arr[0].price > arr[2].price) newArray = [arr[1], arr[2], arr[0]];
        else newArray = [arr[1], arr[0], arr[2]]
    } 
    if(asc) return newArray;
    else {  
        var reverseArray = []; 
        for(let i=newArray.length-1; i>=0; i--) { reverseArray.push(newArray[i]); }
        return reverseArray;
    }
}

// products Input
var input23 = [ {id:1, price:998}, {id:2, price:985},{id:3, price:220},{id:4, price:110},{id:5, price:190},{id:6, price:270}, {id:7, price:990}, {id:8, price:970}, {id:9, price:980}];

// We take the 1st three elements in sorted order.
var sorted23 = sortFn([input23[0], input23[1], input23[2]]);

// We iterate over the array
// compare each element with 3 elements in the sorted array
// we place the element in its relative position with respect to other 3 elements

for(let i=3; i<input23.length; i++) {
    if(input23[i].price > sorted23[0].price) { 
        if(input23[i].price > sorted23[1].price) {
            if(input23[i].price > sorted23[2].price) sorted23 = [sorted23[1], sorted23[2], input23[i]];
            else sorted23 = [sorted23[1], input23[i], sorted23[2]];
        } else sorted23 = [input23[i], sorted23[1], sorted23[2]];
    } else { /* nothing */ }
}

// sort the array in descending order
console.log(sortFn(sorted23, false));
