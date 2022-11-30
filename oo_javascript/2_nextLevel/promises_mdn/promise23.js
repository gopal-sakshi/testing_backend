"use strict";

let promiseCount = 0;

function testPromise() {
    const thisPromiseCount = ++promiseCount;
    const log = document.getElementById("log");

    log.insertAdjacentHTML("beforeend", `${thisPromiseCount}) Started<br>`);
    const p1 = new Promise((resolve, reject) => {        
        log.insertAdjacentHTML("beforeend",`${thisPromiseCount}) Promise constructor<br>`);
        var time23 = Math.random() * 10000 + 1000;
        console.log(`${thisPromiseCount} will be resolved after ${time23}`);
        setTimeout(() => {
            resolve(thisPromiseCount);
        }, time23);
    });

    p1.then((val) => {
        log.insertAdjacentHTML("beforeend", `${val}) Promise fulfilled<br>`);
    }).catch((reason) => {    
        console.log(`Handle rejected promise (${reason}) here.`);
    });
    
    log.insertAdjacentHTML("beforeend", `${thisPromiseCount}) Promise made<br>`);
}

const btn = document.getElementById("make-promise");
btn.addEventListener("click", testPromise);
