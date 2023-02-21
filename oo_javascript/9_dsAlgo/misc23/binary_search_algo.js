const array44 = [11,22,23,38,44,45,59,66,67,72,88,91,93,95,98];
function binarySearch(array, search) {
    let middle;
    let middleItem;
    let left = 0;
    let right = array.length - 1;
    while (left <= right) {
        middle = Math.floor((left + right) / 2);
        middleItem = array[middle];
        if (middleItem === search) { return true; }
        if (middleItem < search) { left = middle + 1; } 
        else { right = middle - 1; }
    }
    return false;
}
console.log(binarySearch(array44, 27));
console.log(binarySearch(array44, 67));
console.log(binarySearch(array44, 72));

