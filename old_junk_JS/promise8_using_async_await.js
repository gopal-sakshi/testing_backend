var lawnMowed = true;
var satisfied = true;

const myAsync = async () => {
    
    await angelMowersPromise
            // how to handle errors if angelMowersPromise failed ??
            // should we use try catch block
    const response = await myPaymentPromise
    console.log(response);
    


    /*
        await myPaymentPromise.then(() => {
            console.log("payment fulfilled");
        });
    */
    
    return response
}

const angelMowersPromise = new Promise((resolve, reject) => {    
    
    if (lawnMowed) resolve('We finished mowing the lawn');
    else reject("We couldn't mow the lawn")
});

const myPaymentPromise = new Promise((resolve, reject) => {    
   
    if (satisfied) resolve({ amount: 1000, note: 'Thank You' });
    else reject({ amount: 0, note: 'Sorry Lawn was not properly Mowed' });

});

myAsync();