const firstPromise = new Promise((res, rej) => {
    setTimeout(res, 500, 'one');
});

const secondPromise = new Promise((res, rej) => {
    setTimeout(res, 100, 'two');
});

Promise.race([firstPromise, secondPromise]).then(res => console.log(res));

/*
    A: "one"
    B: "two"
    C: "two" "one"
    D: "one" "two"

    EXPLANATION:
        When we pass multiple promises to the Promise.race method, 
        - it resolves/rejects the first promise that resolves/rejects
        - rest all promises can go to hell
*/