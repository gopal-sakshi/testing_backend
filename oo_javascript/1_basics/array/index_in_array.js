const arr23 = [1,3,2,5,7,9,4];target=5;         
    // 0th index, 6th index (1,4)   sum is 5
    // 1st index, 2nd index (3,2)   sum is 5
var maps23 = new Map();
for(let i=0; i<arr23.length; i++) {
    maps23.set(arr23[i], {value: target-arr23[i], index: i});
    if(maps23.has(target-arr23[i])) { 
        console.log(maps23.get(arr23[i]).index, maps23.get(target-arr23[i]).index);        
    }
}