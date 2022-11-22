console.time('label23');
for(i=1;i<=1000000000;i++) {
    if(i%999999937 == 0) {
        console.log(`largest prime within 1 billion == ${i}`);
    }
}
console.timeEnd('label23');
// time taken ====> the time taken for execution of code in between 'label23'