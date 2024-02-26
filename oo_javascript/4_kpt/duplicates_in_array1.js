let stringArray = ["a", "e", "i", "a", "o", "u"];

let duplicateItems = stringArray.filter((item, index) => {
    console.log(item, index);
    return stringArray.indexOf(item) != index;
})

if (duplicateItems) {
    console.log("Array contains the following duplicate elements");
    console.log(duplicateItems); // [“a”]
} else {
    console.log("Array doesn't contains duplicate elements");
}