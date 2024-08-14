// https://leetcode.com/problems/find-the-difference-of-two-arrays/

let set23 = new Set([1,2,1,3,1,2,1,4,1,3,4,1]);
console.log("set WONT have duplicates ===> ", set23);

var findDifference = function(nums1, nums2) {
    let set1 = new Set(nums1);      // by default set removes duplicate elements
    let set2 = new Set(nums2);
    let number = [ [], [] ];
    for (let i=0; i< nums1.length; i++) {       // I iterated array length; bestGuy iterated through SET (let i of s1)
        if( !set2.has(nums1[i]) ) {
            number[0].push(nums1[i])
        }
    }
    for (let j=0; j<nums2.length; j++) {
        if( !set1.has(nums2[j])) {
            number[1].push(nums2[j])
        }
    }
    return [ [...new Set(number[0])], [...new Set(number[1])] ]
};


var findDifference_bestAnswer = function(nums1, nums2) {
    let s1 = new Set(nums1);
    let s2 = new Set(nums2);
    let ans = [[], []];

    for (let i of s1) {
        if (!s2.has(i)) {
            ans[0].push(i);
        }
    }

    for (let i of s2) {
        if (!s1.has(i)) {
            ans[1].push(i);
        }
    }

    return ans;
};

// var blah = findDifference([1,2,3], [2,4,6]);
// console.log("blah ===> ", blah);