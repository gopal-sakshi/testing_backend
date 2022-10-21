var players23 = {
    "M01q64v0PRFREG2021040236861959UNH001": {
        "selectedCropId": "",
        "selectedCropImageUrl": "",
        "playerId": "M01q64v0PRFREG2021040236861959UNH001",
        "consumedGroundWater": 8,
        "cropSelectedTS": "",
        "grossRevenue": 0,
        "earnedRevenue": 0,
        "selectedCropName": "",
        "playerImageUrl": "https://kalgudi.com/data/profilepics/M01q64v0PRFREG2021040236861959UNH001.png",
        "penality": 0,
        "playerName": "sunnith"
    },
    "M01l3cs0PRFREG2018123132244091UNH001": {
        "playerImageUrl": "https://kalgudi.com/data/profilepics/M01l3cs0PRFREG2018123132244091UNH001.png?1566989678806",
        "playerId": "M01l3cs0PRFREG2018123132244091UNH001",
        "consumedGroundWater": 13,
        "cropSelectedTS": "2022-09-29T06:10:46.343Z",
        "grossRevenue": 1000,
        "selectedCropImageUrl": "/data/G4S/cropImages/ChickPea.webp",
        "selectedCropId": "CHICKPEA",
        "penality": 0,
        "selectedCropName": "CHICKPEA",
        "earnedRevenue": 1000,
        "playerName": "Dummy buyer"
    },
    "M01s86e0PRFREG2021102155899992UNH001": {
        "selectedCropId": "CHICKPEA",
        "playerImageUrl": "https://kalgudi.com/data/profilepics/M01s86e0PRFREG2021102155899992UNH001.png",
        "playerId": "M01s86e0PRFREG2021102155899992UNH001",
        "grossRevenue": 1000,
        "cropSelectedTS": "2022-09-29T06:10:36.423Z",
        "selectedCropName": "CHICKPEA",
        "earnedRevenue": 1000,
        "penality": 0,
        "selectedCropImageUrl": "/data/G4S/cropImages/ChickPea.webp",
        "playerName": "GopAL",
        "consumedGroundWater": 21
    }
}
var result23 = 0;
// console.log(Object.values(players23));
for (let blah of Object.values(players23)) {
    // console.log(blah);
    result23 = result23 + parseInt(blah.consumedGroundWater);
}
console.log(result23);