const names = ['joker', 'batman', 'catwoman'];
console.log(names.sort());                                   // ['batman', 'catwoman', 'joker']


const numbers = [10, 5, 11];
console.log(numbers.sort());                 // => [10, 11, 5]
                                            // invoking the sort() method on numbers ====> performs alphabetical sorting
/******************************************************************************/

// comparator function
    // control how element are ordered in the array during sorting

const numbers_comparator = [10, 5, 11];
var sortedNum = numbers_comparator.sort((a, b) => {
    if (a < b) { return -1; }           // If a < b — the function returns -1, placing a before b (5 < 10, thus 5 is before 10)
    if (a > b) { return 1; }
    return 0;
});
console.log(sortedNum);
/******************************************************************************/    

const numbers_short_comparator = [10, 5, 11];
var sortedNum_short = numbers_short_comparator.sort((a, b) => a - b);
console.log(sortedNum_short);
/******************************************************************************/    

const numbers_desc = [10, 12, 5, 6, 9, 22];
var sortedNum_desc = numbers_desc.sort((a, b) => b - a);
console.log(sortedNum_desc);
/******************************************************************************/    