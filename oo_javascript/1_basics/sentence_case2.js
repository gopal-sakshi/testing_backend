let str11 = "Real madrid, est. in 1902 is a Football Club based in Spain, and won 15 CLs, last being 2023-24";

str11 = str11.replace(/([a-z])([A-Z])/g, '$1 $2');
console.log("value1 ===> ", str11);

str11 = str11.charAt(0).toUpperCase() + str11.slice(1);
console.log("value2 ===> ", str11);

var splitStr = str11.split(' ');

for (var i = 0; i < splitStr.length; i++) {
    if (i > 0) {
      splitStr[i] = splitStr[i].charAt(0).toLowerCase() + splitStr[i].substring(1);
    }
}

let value3 = splitStr.join(' ');
console.log("value3 ===> ", value3);