const THRESHOLD_A = 5;                              // can use zero 0 to guarantee error

function tetheredGetNumber(resolve, reject) {
    setTimeout(() => {
        const randomInt = Date.now();
        const value = randomInt % 10;
        if (value < THRESHOLD_A) { resolve(value); } 
        else { reject(`Too large: ${value}`); }
    }, 500);
}

function determineParity(value) {
    const isOdd = value % 2 === 1;
    return { value, isOdd };
}

function troubleWithGetNumber(reason) {
    const err = new Error("Trouble getting number", { cause: reason });
    console.error(err);
    
    // this 'throw' makes sure that ----> all subsequent then() blocks are skipped and control goes to catch() block directly
        // if you omit this 'throw' ----> all subsequent then() blocks will be called
        // thats the reason, we dont use 2nd param in then()
        // if you use 2nd param in then() ======> you MUST throw error to make sure all subsequent chained then() are skipped
    throw err;
}

function promiseGetWord(parityInfo) {
    return new Promise((resolve, reject) => {
        const { value, isOdd } = parityInfo;
        if (value >= THRESHOLD_A - 1) { reject(`Still too large: ${value}`); } 
        else { parityInfo.wordEvenOdd = isOdd ? "odd" : "even"; resolve(parityInfo); }
    });
}

new Promise(tetheredGetNumber)
    .then(determineParity, troubleWithGetNumber)
    .then(promiseGetWord)
    .then((info) => {
        console.log(`Got: ${info.value}, ${info.wordEvenOdd}`);
        return info;
    })
    .catch((reason) => {
        if (reason.cause) { console.error("Had previously handled error"); } 
        else { console.error(`Trouble with promiseGetWord(): ${reason}`); }
    })
    .finally((info) => console.log("All done"));