console.time('label23');
for(i=0;i<=1000000000;i++) {
    if(i%999999937 == 0) {
        console.log(i);
    }
}
console.timeEnd('label23');
// time taken ====> the time taken for execution of code in between 'label23'