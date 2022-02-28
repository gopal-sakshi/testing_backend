// var str22 = 'https://emahila.org/admin/#/app/assist/RFQ225979092122B1/QUOT225979092216B';
// var str23 = 'https://emahila.org/admin/#/app/assist/RFQ224401995760B1/QUOT224401995858B';
var strEmahila = 'https://emahila.org/v2/store/EMAHILA/rfq/RFQ224401995760B1/details?isAssisting=false&appStoreType=BIZ_STORE&appName=EMAHILA&appStoreDomain=https://emahila.org'

var strOutputs = 'https://outputs.kalgudi.com/v2/store/OUTPUTS/rfq/RFQ225785564037B1/details?isAssisting=true&appStoreType=BIZ_STORE&appName=OUTPUTS&appStoreDomain=https://outputs.kalgudi.com'


// const newString = strEmahila.split('store');
// console.log(newString);

// const newerString = newString[1].split('/');
// console.log(newerString);
// // console.log(strEmahila);

// const finalString = strEmahila.replace(newerString[1], 'storeName');
// console.log(finalString);




console.log(strEmahila.replace(strEmahila.split('store')[1].split('/')[1], 'helloYeshwant'));
console.log(strOutputs.replace(strOutputs.split('store')[1].split('/')[1], 'helloSunnith'));