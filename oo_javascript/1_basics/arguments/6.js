let inputString = '';
// process.stdin.setEncoding('utf-8');
process.stdin.setEncoding('hex');
process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
    console.log(inputString);
});