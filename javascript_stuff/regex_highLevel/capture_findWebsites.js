/*    
    /go+/       means g character, followed by o repeated 1 or 10 times     // go, gooo, goooo, etc
    /(go)+/     means 'go' thingy.... repeated 1 or 10 times                // go, gogo, gogogo, etc


    \w+             ====> find words (alphanumeric & underscore)

    regexp0         ====> all words (no spaces, no commas, no dots)
    regexp1         ====> all words that end with single . dot          \. means single dot
    regexp2         ====> word, then 1 or 10 dots 
    regexp3         ====> (word & single dot) as a group/unit which is followed word
*/

let regexp0 = /\w+/g;               //      O/P = cricinfo   com    cricbuzz    org     goog    le  com     hello
let regexp1 = /\w+\./g;             //      0/P = cricinfo.     cricbuzz.       org.        le.     hello.
let regexp2 = /\w+\.+\w+/g;           //    o/P also includes = hello..net        
let regexp3 = /(\w+\.)+\w+/g;

console.log( "cricinfo.com cricbuzz.org. goog-le.com hello..net this*is*not_a website, ab.fb.com".match(regexp1));
console.log( "cricinfo.com cricbuzz.org. goog-le.com hello..net this*is*not_a website, ab.fb.com".match(regexp2));
console.log( "cricinfo.com cricbuzz.org. goog-le.com hello..net this*is*not_a website, ab.fb.com".match(regexp3));
