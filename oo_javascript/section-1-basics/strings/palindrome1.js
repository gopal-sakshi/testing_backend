var str22 = "gopal";
var rev = '';

// know this syntax of for loop
for (let i of str22) {
    console.log(i);
    rev = i + rev;
}
console.log(rev);