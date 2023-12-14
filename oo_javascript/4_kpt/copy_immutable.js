let club1 = {
    name: "RealMadrid",
    stadium: "Bernabeu",
    info: {
        manager: "ancelotti",
        address: "spain, madrid"
    }
};

let copy12 = { ...club1 };                              // spread makes deepCopy of topData... shallowCopy of nestedData
let copy13 = structuredClone(club1);
let copy14 = club1;

copy12.name = 'RMA';
console.log('are both same ??? ', club1 == copy12);
console.log('are both same ??? ', club1.info == copy12.info);               // shallowCopy of nested Object
console.log('are both same ??? ', club1 == copy13);
console.log('are both same ??? ', club1 == copy14);
console.log(club1);