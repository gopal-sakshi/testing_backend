const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

function initAccount() {
    var balance = 1000;

    function currentbalance() {
        balance = balance - 100;        
    }
    currentbalance();
    console.log('balance cuttu ',balance);
}
/**********************************************************************************/
var continue2 = 11;
do {
    continue2 = 0;
    readline.question(`cut cheyyanaa ?? \n`, response => {        
        if(response == 'yes') {            
            initAccount();
            continue2 = 1;
        }        
        else continue2 = 0;
    });    
} while (continue2 != 0)
/**********************************************************************************/