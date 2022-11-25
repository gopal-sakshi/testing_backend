'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');
    console.log('input String = ',inputString);
    main();
});

function readLine() {
    const blah = inputString[currentLine++];
    console.log('readLine = ',blah);
    return blah;
}

function plusMinus(arr) {

    let positive = 0;
    let negative = 0;
    let zero = 0;
    for (let i=0; i<arr.length; i++) {
        if (arr[i]>0) {
            positive++ ;
        } else if (arr[i]<0) {
            negative++ ;
        } else {
            zero++;
        }
    }
    console.log((positive/arr.length).toFixed(6));
    console.log((negative/arr.length).toFixed(6));
    console.log((zero/arr.length).toFixed(6));
}

function main() {
    const n = parseInt(readLine().trim(), 10);
    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    plusMinus(arr);
}
