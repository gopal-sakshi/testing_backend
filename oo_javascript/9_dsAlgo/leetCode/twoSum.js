// https://leetcode.com/problems/two-sum/
// nums = [2,7,11,15,8], target = 9/10
    // sorted = [2,7,8,11,15]

var twoSum = function(nums, target) {
    for (let i=0; i<(nums.length-1); i++) {                                
        for (let j = i+1; j<=(nums.length-1); j++) {                       
            if(nums[i] + nums[j] == target) {
                return [i,j]
            }
        }        
    }
};
/***************************************************************************** */
var twoSum1 = function(nums, target) {              //      ([2,7,8,11,15], 10)
    const comp = {};
    for(let i=0; i<nums.length; i++){
        if(comp[nums[i] ]>=0){
            return [ comp[nums[i] ] , i]
        }
        comp[target-nums[i]] = i            // comp[10-2] = 0;  comp[10-7]=1;
    }                   
}
/******************************************************************************** */
// using Hash table ??
function twoSum(nums, target) {
    const map = {}
    for (let index = 0; index < nums.length; index++) {
      const element = nums[index]
      const complement = target - element
      if (map[complement] !== undefined) {
        return [map[complement], index]
      } else {
        map[element] = index
      }
    }
    return []
}


console.log(twoSum1([2,7,8,11,15], 9));