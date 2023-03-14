var arr23 = [0,3,1,8,9,6,4,5,7]; var sum = 0;
for (let i=0; i<arr23.length; i++) {
    sum = sum + arr23[i];
}

arr23.sort();
// console.log(arr23);

for (let i=0; i<arr23.length; i++) {
    if(arr23[i] + 1 != arr23[i+1]) { console.log(i+1); return; }
}
// console.log(sum);
// console.log(arr23.length);
// var le = arr23.length + 1
// console.log(le/2 * (le - 1) - sum);

