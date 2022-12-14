var lawnMowed = false;
var satisfied = false;

var lawnMowed = true;
var satisfied = false;

// var lawnMowed = true;
// var satisfied = true;

const myAsync = async () => {    
    let finalStatus = '';
    const response1 = await angelMowersPromise.then(data => { console.log(data); return true }).catch( err => false);
    if(response1) {
        const response2 = await myPaymentPromise.then(data => { console.log(data); return true }).catch(err => false);
        if(response2) {
            finalStatus = 'good job';
        } else {
            finalStatus = 'payment iyyaa'
        }
    } else {
        finalStatus = 'bhak - lawn not mowed';        
    }

    return finalStatus;
}

const angelMowersPromise = new Promise((resolve, reject) => {    
    if (lawnMowed) resolve('We finished mowing the lawn');
    else reject("We couldn't mow the lawn")
});

const myPaymentPromise = new Promise((resolve, reject) => {   
    if (satisfied) resolve({ amount: 1000, note: 'Thank You' });
    else reject({ amount: 0, note: 'Sorry Lawn was not properly Mowed' });
});

myAsync().then(data => {console.log(data)});
// console.log(response);