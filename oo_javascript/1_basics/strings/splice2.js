// LESSON I --------------> splice of array 

var str15 = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225];
var str14 = ['Jan', 'Feb', 'junk1', 'junk2', 'junk3', 'junk4', 'junk5', 'junk6', 'June'];


var result15 = str15.splice(3, 2);          // 3 = action will be done at 3rd index
                                            // 2 = remove 2 items.... so 3rd & 4th elements will be removed
                                            // no 3rd param = nothing will be inserted... 

console.log(str15);                         // original array is affected
console.log(result15);                      // splice() returns deleted items

/******************************************************************************************** */

// 2 = index at which action must be done
// 6 = remove 6 elements
// 'March', 'April', 'May' = items to be inserted

// // APPROACH I
// var result14 = str14.splice(2, 6, 'March', 'April', 'May');
// console.log(result14);
// console.log(str14);

// APPROACH II 
var newMonths = ['March', 'April', 'May']
var result15 = str14.splice(2, 6, ...newMonths);

// var someAlbums = {gasoline: 'daddy yankee', loseYourself: 'eminem'};
// var result15 = str14.splice(2, 6, someAlbums);
console.log(str14);
/******************************************************************************************** */