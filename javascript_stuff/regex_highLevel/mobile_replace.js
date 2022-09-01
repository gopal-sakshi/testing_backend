const mobile1 = '7730870403';       

// console.log('7730870403'.match(/.{2}/));         // O/P = 77                     2 dots... dot means any character 
// console.log('?_-a3-sdff'.match(/.{4}/));         // O/P = ?_-a                   4 dots... dot means any character
// console.log('7730870403'.match(/.{3}/g));        // O/P = 773, 087, 040          3 'any characters' -- all such list
// console.log('7730870403'.match(/.{5}/));         // O/P = 77308 
// console.log('7730870403'.match(/.{4}$/));        // O/P = 0403                   last 4 'any characters'

// console.log('7730870403'.match(/^(.*?).{2}/));
// console.log('7730870403'.replace('870', 'AAA'));

// let str33 = '7730870403';
// var blah1 = str33.match(/^(.*?).{2}(.{4})$/);
// console.log(blah1);

// console.log('7730870403'.replace(/^(.*?).{2}/, '$1'));                  // regex = 77, replaced by $1 which is null
// console.log('7730870403'.replace(/^(.*?).{2}/, '$2'));                  // regex = 77, replaced by $1 which is null

console.log('7730870403'.replace(/^(.*?).{2}(.{3})$/,'$1___$2'));       // captures two groups
                            // the 10-digit string is split into 3 units
                                // last THREE 'any characters' as 1 unit... by the way its also grouped as $2
                                // TWO 'any characters' in the middle
                                // ANY (here 5 digits left) at the start of the string... by the way its also grouped as $1
                            // $1 = 77308       $2 = 403
                            // /^(.*?).{2}(.{3})$/ -------> matches entire string... because we arent filtering anything... just grouping
                            // entire string is replaced by $1XX$2

/*

    ()      is a "capture group"
    ^       matches beginning of the string
    .*?     matches as few characters as necessary to fulfill pattern
    .{2}    matches two characters
    $       matches the end of the string

    $1      () is capture group... it captures something & returns... $1 = the return value of 1st paranthesis
    $2      () is capture group... it captures something & returns... $2 = the return value of 2nd paranthesis

*/


