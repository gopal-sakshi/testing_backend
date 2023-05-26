var transactions = ['bin', 'can', 'bin', 'bin'];
function groupTransactions(transactions) {
    let mapItems = new Map(); var finalArray = [];
    for(let i=0; i<transactions.length; i++) {
        if(mapItems.has(transactions[i])) {
            mapItems.set(transactions[i], mapItems.get(transactions[i]) + 1)
        } else {
            mapItems.set(transactions[i], 1)
        }
    }
    for(const [key, value] of mapItems) {
        finalArray.push(`${key} ${value}`);
    }
    console.log(finalArray);
    return finalArray
}

groupTransactions(transactions);