var _ = require('lodash');

var str1 = "https://s3.ap-south-1.amazonaws.com/whatsapp-prd/pacltest4/2023-10-23/pull/08105156-94b5-48a6-a0a9-cc27513132a8.doc?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231023T070459Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Credential=AKIA4SRXXN5S3ZCKHDBC%2F20231023%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=ec325668c36c8eccac3d2533fc1e1bc85ec43642feb18b913d2c8e7563965b47";

var str2 = `This is a test string [more or less]`;
let reg23 = /(?<=\[)(.*?)(?=\])/;
let reg24 = /(?<=\.)(.*?)(?=\?)/;
let reg25 = /\.(.*?)\?/;
console.log(str1.match(reg24));
// console.log(reg23.exec(str2)[1]);