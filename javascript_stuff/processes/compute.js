const longComputation = () => {
    let sum = 0;
    for (let i = 0; i < 1e9; i++) {
        sum += i;
    };
    return sum;
};

process.on('message', (msg) => {
    const sum1 = longComputation();
    const sum2 = longComputation();
    const sum3 = longComputation();
    const sum4 = longComputation();
    const sum5 = longComputation();
    const sum6 = longComputation();
    const sum7 = longComputation();
    const sum8 = longComputation();
    process.send(`${sum1 + sum2 + sum3 + sum4 + sum5 + sum6 + sum7 + sum8}`);
});