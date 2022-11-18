var arr1 = [
    ["benzema", "modric", "kroos"], 
    ["ramos", "ronaldo", "kaka"], 
    ["casillas", "courtious", "keylor navas"]
]
var newArr = [];
arr1.forEach((item, index) => {
    newArr.push(...item);
});
console.log(arr1);  
    // arr1 = an array
        // this is not an array of numbers (or) strings (or) objects
        // but this is an array of 'arrays'
console.log(newArr);
