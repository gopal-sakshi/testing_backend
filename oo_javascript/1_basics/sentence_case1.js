let str11 = "Real maDRid, is A FooTbaLl clUb";

let value1 = str11.replace(/([a-z])([A-Z])/g, '$1 $2');
console.log("value1 ===> ", value1);

let value2 = str11.charAt(0).toUpperCase() + str11.slice(1);
console.log("value2 ===> ", value2);

var splitStr = str11.split(' ');

for (var i = 0; i < splitStr.length; i++) {
    if (i > 0) {
      splitStr[i] = splitStr[i].charAt(0).toLowerCase() + splitStr[i].substring(1);
    }
}

let value3 = splitStr.join(' ');
console.log("value3 ===> ", value3);