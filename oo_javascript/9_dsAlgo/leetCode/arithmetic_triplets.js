// https://leetcode.com/problems/number-of-arithmetic-triplets/

var arithmeticTriplets_mine = function(nums, diff) {
    let number = 0;
    for(let i=0; i<nums.length-2; i++) {
        for(let j=i+1; j<nums.length-1; j++) {
            if(nums[j] - nums[i] == diff) {
                for(let k=j+1; k< nums.length; k++){
                    if(nums[k] - nums[j] == diff) { 
                        number ++;
                    } else {
                        continue;
                    }
                }
            } else {
                continue;
            }
        }
    }
    return number;
};

// best answer uses "SETS"
var arithmeticTriplets = function(nums, diff) {
    let count = 0;
    let set = new Set(nums);
    console.log("set ===> ", set)
    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i] + diff) && set.has(nums[i] + 2 * diff)) {
            count++;
        }
    }
    return count;
};

console.log("====> ", arithmeticTriplets([0,1,4,6,7,10], 3));