var str23 = "gopal@kalgudi.coma"
var str24 = "gopal@kalgudi.comaa"
var str25 = "priya@gmail.com"

str23.indexOf("@kalgudi.com", str23.length - "@kalgudi.com")

console.log('str23 length = ', str23.length);
console.log('domain length = ', "@kalgudi.com".length)
var blah = str23.indexOf("@kalgudi.com", str23.length - "@kalgudi.com".length)

var blah2 = str23.indexOf("@kalgudi.com")
console.log('index = ', blah2);

console.log(str23.endsWith("@kalgudi.com"));