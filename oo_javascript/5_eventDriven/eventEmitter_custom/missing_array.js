class Solution{
    MissingNumber(array,n){
        var sum = 0;
        for(var i of array) {
            sum = sum + i;
        }
        console.log(sum);
        return (n * (n+1) / 2) - sum;
    }
}

var s1 = new Solution();
var blah = s1.MissingNumber([1,2,3,5], 5);
console.log(blah);