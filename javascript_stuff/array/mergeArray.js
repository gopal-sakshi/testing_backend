var arr1 = [["benzema", "modric", "kroos"], ["ramos", "ronaldo", "kaka"], ["casillas", "courtious", "keylor navas"]]
var newArr = [];
arr1.forEach((item, index) => {
    newArr.push(...item);
});
console.log(newArr);
