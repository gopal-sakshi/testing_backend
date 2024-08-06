// this file will be used elsewhere

interface club23 {
    clubName:string,
    manager: string,
    players: string[],
    readonly est: number            // established is readonly -- it cant change ever
}

/*
    c_football23 imports this file
    similarly many other files import this file
    but none of those 12 files --> can modify doing this rma.est = 1999 ==> it throws error @ compile time
    helpful @ large application --> we have one file that is reused across all modules by 50+ developers team
    

*/

let rma:club23 = {
    clubName: 'Real Madrid',
    manager: 'Ancelotti',
    players: ['CR7', 'Benz', 'Luka'],
    est: 1902
}

let barca:club23 = {
    clubName: 'Barcelona',
    manager: 'Xavi',
    players: ['Messi', 'Lewa', 'Pedri'],
    est: 1898
}

let clubs23:club23[] = [ rma, barca ];
export default clubs23
// export default class clubsList {
//     clubs23:club23[] = [ rma, barca ];
// }