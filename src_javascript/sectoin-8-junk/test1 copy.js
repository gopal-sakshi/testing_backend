const json23 = require('./shaktiman_plantHealth_categories.json');
// const json23 = require('./shaktiman_plantGrowth_categories.json');
// const json23 = require('./shaktiman_crop_categories.json');

console.log(json23.listOfLevel2Cards.length);

for (let i of json23.listOfLevel2Cards) {
    console.log(i.sellerId);
}
