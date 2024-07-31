let str11 = "Real madrid, est. in 1902 is a football club based in Spain, and won 15 CLs, last being 2023-24";

let value1 = str11.replace(/([a-z])([A-Z])/g, '$1 $2');
console.log("value1 ===> ", value1);

let value2 = value1.charAt(0).toUpperCase() + value1.slice(1);
console.log("value2 ===> ", value2);

var splitStr = value2.split(' ');

for (var i = 0; i < splitStr.length; i++) {
    if (i > 0) {
      splitStr[i] = splitStr[i].charAt(0).toLowerCase() + splitStr[i].substring(1);
    }
}

let value3 = splitStr.join(' ');
console.log("value3 ===> ", value3);