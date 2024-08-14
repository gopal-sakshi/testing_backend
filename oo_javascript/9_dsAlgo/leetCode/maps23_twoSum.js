/*

    Input: nums = [2,6,11,7,15], target = 9
    Output: [0,1]
    Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
    
    Input: nums = [3,2,4], target = 6
    Output: [1,2]
    Example 3:

    Input: nums = [3,3], target = 6
    Output: [0,1]

    { 
        0: [2, 7]           [3, 3]              { 2: 7 }
        1: [6, 3]           [2, 4]
        2: [11, -2]         [4, 2]
        3: [7, 2]
        4: [15, -6]
    }

*/

var twoSum_dummy = function(nums, target) {
    let number = [0, 0];
    for (let i=0; i< nums.length-1; i++) {
        for (let j=i+1; j< nums.length; j++) {
            if( nums[i] + nums[j] == target) {
                return [i, j]
            }
        }
    }
};

var twoSum = function(nums, target) {       // 2, 6, 11, 7, 15
    const map = new Map();
 
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            return [i, map.get(target - nums[i])]
        }
 
        map.set(nums[i], i);        // { 2: 0, 6: 1, 11: 3, 7: 4 }
    }
};