/*

to access 5th element
    str12.charAt[4];
    str12[4]                    // both are same; just backwards compatibility

String.fromCharCode(96 + 5);        // transforms 5 to 'e'


splice      doesnt exist
split       returns an array of subStrings
subString   
slice


*/

let str = "sdfsdfsdfds:chatId";

console.log(str.replace(":chatId", '_____'))