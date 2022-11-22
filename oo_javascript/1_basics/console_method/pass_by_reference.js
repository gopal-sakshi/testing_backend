var someObject = {title:'old title', cost:200};
var someString = 'old name'
var someNumber = 5
var someBool = true
console.log(someObject, someString, someNumber, someBool);
changeTitle(someObject, someString, someNumber, someBool);
console.log(someObject, someString, someNumber, someBool);       // pass-by-reference
                                                                    // only someObject value is updated bcoz pass-by-reference
                                                                // someString, someNumber, someBool --> pass-by-value (not updated)

function changeTitle(object23, string23, someNumber, someBool) {
    object23.title = 'new title';
    string23 = 'new name';
    someNumber = 4;
    someBool = false;
}