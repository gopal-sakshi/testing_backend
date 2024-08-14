// ONLY FOR NUMBERS

var arr1 = [1,2,1,3,1,2,1,4,1,3,4,1,6, "1", "3", "4"];
let set23 = new Set(arr1);          // set WONT have duplicates
var arr2 = [...new Set(set23)];
console.log("using SEt =======> ", [...new Set(set23)]);


/**************************************************************************/

// USING HASH TABLES ---> seen23 is a hash table (it can have "strings" (or) "symbols" as keys)

function uniq(a) {
    var seen23 = {};
    return a.filter(function(item) {
        return seen23.hasOwnProperty(item) ? false : (seen23[item] = true);
    });
}

console.log("using hash table ===> ", uniq(arr1))