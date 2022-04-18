const mobile1 = '7730870403';       // output must be '773xxx0403'


let result1 = mobile1.replace(/^(.*?).{2}(.{2})$/,'$1XX$2');

console.log(result1);
/*

    ()      is a "capture group"
    ^       matches beginning of the string
    .*?     matches as few characters as necessary to fulfill pattern
    .{2}    matches two characters
    $       matches the end of the string

*/

