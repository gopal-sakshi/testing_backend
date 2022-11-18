var atob = require('atob');

var userName1 = "1111193925"             //      o/p = +911111193925
var userName2 = "+911111193925"         //      o/p = +911111193925

// it seems this regex thingy.... will append +91 if its not there... but if its there, it will ignore
userName1 = userName1.replace(/^(\+91|)/, "+91");
userName2 = userName2.replace(/^(\+91|)/, "+91");
console.log(userName1);
console.log(userName2);

var str23 = 'NjY2NjY2';
console.log(atob(str23));

var str24 = 'MTIzNDU2Nzg=';
console.log(atob(str24));


var str25 = 'YmlnQmVuejE=';
console.log(atob(str25));


var java_response1 = { 
    "profileKey": "M0005010PRFREG2022070518099398UNH001", 
    "firstName": "666666", 
    "password": "1GBL9sJUwSlimTIPui8RmQ==\r\n",
    "profileUUID": "0005010", 
    "mobileTelecomcode": "+91", 
    "profilePicUrl": "http://172.31.28.12/data/profilepics/M0005010PRFREG2022070518099398UNH001.png", 
    "decreptedPwd": "12345678", 
    "languageId": "6", 
    "mobileNo": "+911111193924", 
    "currentBusinessUUID": "0005011", 
    "languageName": "Telugu", 
    "lstOfBusinessInfo": [{ "businessTypeName": "I'll tell later", "objBusinessCity": { "cityName": "Hyderabad", "cityId": "33500300020023", "locationShort": "Telangana IND", "countryId": "335" }, "businessName": "666666", "businessKey": "O0005011PRFBIZ2022070518099895UNH001", "lstOfProductTos": [{ "allowed": false, "groupId": "63", "isEdited": false, "crops": "", "productName": "Unknown", "alsoKnownAs": "", "varietyId": "000000000000", "imageUrl": "https://s3.amazonaws.com/kalgudicontent/commodities/000000037555_1.jpg", "company": "000000", "varietyName": "Not Applicable", "isApproved": true, "brand": false, "productDescription": "", "listofUnits": [{ "unitName": "", "unitId": 0, "rank": 0, "conversion": 0 }], "customunits": [], "productType": "FARMERPRODUCT", "baseUnitId": "0", "productId": "000000037555", "qualifiers": "", "scientific_name": "", "commodityId": "000000000", "baseUnitName": "", "groupName": "Unknown", "universal_name": "Unknown", "commodityName": "Unknown" }], "businessUUID": "0005011", "businessTypeId": "BT000012" }] 
};

var java_response2 = "{\"profileKey\":\"M0005010PRFREG2022070518099398UNH001\",\"firstName\":\"666666\",\"password\":\"1GBL9sJUwSlimTIPui8RmQ==\\r\\n\",\"profileUUID\":\"0005010\",\"mobileTelecomcode\":\"+91\",\"profilePicUrl\":\"http://172.31.28.12/data/profilepics/M0005010PRFREG2022070518099398UNH001.png\",\"decreptedPwd\":\"12345678\",\"languageId\":\"6\",\"mobileNo\":\"+911111193924\",\"currentBusinessUUID\":\"0005011\",\"languageName\":\"Telugu\",\"lstOfBusinessInfo\":[{\"businessTypeName\":\"I'll tell later\",\"objBusinessCity\":{\"cityName\":\"Hyderabad\",\"cityId\":\"33500300020023\",\"locationShort\":\"Telangana IND\",\"countryId\":\"335\"},\"businessName\":\"666666\",\"businessKey\":\"O0005011PRFBIZ2022070518099895UNH001\",\"lstOfProductTos\":[{\"allowed\":false,\"groupId\":\"63\",\"isEdited\":false,\"crops\":\"\",\"productName\":\"Unknown\",\"alsoKnownAs\":\"\",\"varietyId\":\"000000000000\",\"imageUrl\":\"https://s3.amazonaws.com/kalgudicontent/commodities/000000037555_1.jpg\",\"company\":\"000000\",\"varietyName\":\"Not Applicable\",\"isApproved\":true,\"brand\":false,\"productDescription\":\"\",\"listofUnits\":[{\"unitName\":\"\",\"unitId\":0,\"rank\":0,\"conversion\":0}],\"customunits\":[],\"productType\":\"FARMERPRODUCT\",\"baseUnitId\":\"0\",\"productId\":\"000000037555\",\"qualifiers\":\"\",\"scientific_name\":\"\",\"commodityId\":\"000000000\",\"baseUnitName\":\"\",\"groupName\":\"Unknown\",\"universal_name\":\"Unknown\",\"commodityName\":\"Unknown\"}],\"businessUUID\":\"0005011\",\"businessTypeId\":\"BT000012\"}]}"




// var java_reponse1_parsed = JSON.parse(java_response1);
// console.log(java_reponse1_parsed.profileKey);                // java_response1 ============> already a json object
var java_reponse2_parsed = JSON.parse(java_response2);
console.log(java_reponse2_parsed.profileKey);                   // java_response2 ============> its a JSON string thingy