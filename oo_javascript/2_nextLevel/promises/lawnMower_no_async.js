var lawnMowed = true;
var satisfied = false;

const angelMowersPromise = new Promise ((resolve, reject) => {

    if(lawnMowed) resolve('We finished mowing the lawn');
    else reject("We couldn't mow the lawn");
});

const myPaymentPromise = new Promise ((resolve, reject) => {

    if(satisfied) resolve({amount: 1000,note: 'Thank You'});
    else reject({amount: 0,note: 'Sorry Lawn was not properly Mowed'});
});

angelMowersPromise
    .then(() => {
        console.log("angelMowers promise fulfilled.. proceed to payment");
        myPaymentPromise.then(res => {
            console.log("payment fulfilled too");
            console.log(res);
        }).catch(() => {
            console.log("payment rejected");
        })
    }).catch(error => { 
        console.log("angelMowers promise rejected")
        console.log(error);
    });


