var rgx2_singleOccurence = /ab*c/;          // b* means ====>   zero (or) more occurences of b
                                            // b* means         ''      'b'     'bb'        'bbb'
                                            // matches with     ac      abc     abbc        abbbc       'et cetera'

var rgx2_allOccurences = /ab*c/g;


var line2 = 'cbbacdsdfabcaeefscabbcddefabbbbcdebc';


// console.log(rgx2_singleOccurence.test(line2));      // TRUE if that pattern occurs in the string
// console.log(rgx2_singleOccurence.exec(line2));      // captures the pattern (only 1 occurence)
// console.log(rgx2_allOccurences.test(line2));      // TRUE if pattern occurs in the string
// console.log(rgx2_allOccurences.exec(line2));      // captures the patterns    (all occurences)
    // FOR THE TIME BEING, we will forget about ---> regex.test(), regex.exec()
    
console.log(line2.match(rgx2_singleOccurence));
console.log(line2.match(rgx2_allOccurences));
