var data23 = [
    {
        "profilekey": "M01l3cs0PRFREG2018123132244091UNH001",
        "profilename": "Dummy buyer"
    },
    {       
        "profilekey": "M01s86e0PRFREG2021102155899992UNH001",
        "profilename": "GopAL"
    }
];

var res23 = data23.find(item => { 
    item.profilekey == 'M01l3cs0PRFREG2018123132244091UNH001';
    
});
console.log(res23);